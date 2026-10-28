# Stage 1: download the real animal recordings listed in sounds.txt and trim / normalize them.
FROM alpine:3.20 AS sounds
RUN apk add --no-cache ffmpeg curl
WORKDIR /work
COPY sounds.txt build-sounds.sh ./
RUN sh build-sounds.sh sounds.txt /out

# Stage 2: tiny web server for the app.
FROM nginx:1.27-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY public/ /usr/share/nginx/html/
COPY --from=sounds /out/ /usr/share/nginx/html/sounds/

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=3s --retries=3 \
  CMD wget -qO- http://127.0.0.1/ >/dev/null || exit 1
