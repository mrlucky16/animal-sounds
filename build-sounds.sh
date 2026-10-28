#!/bin/sh
# Downloads each recording listed in sounds.txt, keeps the chosen slice, fades the edges,
# evens out loudness and writes <id>.mp3 into $OUT. Used by the Dockerfile; also runs locally.
set -eu
LIST="${1:-sounds.txt}"
OUT="${2:-out}"
UA="AnimalSoundsKidsApp/1.0 (+https://github.com/mrlucky16/animal-sounds)"
mkdir -p "$OUT" /tmp/src
fail=0

grep -v '^[[:space:]]*#' "$LIST" | grep -v '^[[:space:]]*$' | while IFS='|' read -r id url start len credit; do
  id=$(echo "$id" | xargs); url=$(echo "$url" | xargs); start=$(echo "$start" | xargs); len=$(echo "$len" | xargs)
  src="/tmp/src/$id.src"
  if ! curl -fsSL --retry 3 --retry-delay 3 -m 120 -A "$UA" -o "$src" "$url"; then
    echo "WARN: could not download $id from $url" >&2
    continue
  fi
  fade_out=$(awk -v l="$len" 'BEGIN { printf "%.2f", (l > 0.6 ? l - 0.25 : l * 0.6) }')
  ffmpeg -nostdin -v error -y -ss "$start" -t "$len" -i "$src" \
    -af "afade=t=in:d=0.03,afade=t=out:st=${fade_out}:d=0.25,loudnorm=I=-16:TP=-1.5:LRA=11" \
    -ac 1 -ar 44100 -b:a 96k "$OUT/$id.mp3"
  echo "ok  $id"
  sleep 1
done

ls -1 "$OUT"/*.mp3 | wc -l | xargs echo "sounds built:"
