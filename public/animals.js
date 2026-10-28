/* Animal data: names (EN/FR), onomatopoeia (EN/FR), card colour, and a cartoon drawn as inline SVG.
   To add an animal: add an entry here and a matching function in sounds.js (or drop <id>.mp3 in /sounds). */
window.ANIMALS = [
  {
    id: 'dog', en: 'Dog', fr: 'Chien', snd_en: 'Woof woof!', snd_fr: 'Ouaf ouaf!', color: '#ffe2b8',
    svg: `<svg viewBox="0 0 200 200" role="img" aria-hidden="true">
      <ellipse cx="45" cy="95" rx="22" ry="40" fill="#8d5a2b" transform="rotate(15 45 95)"/>
      <ellipse cx="155" cy="95" rx="22" ry="40" fill="#8d5a2b" transform="rotate(-15 155 95)"/>
      <circle cx="100" cy="105" r="62" fill="#e0a96d"/>
      <ellipse cx="100" cy="125" rx="34" ry="26" fill="#f6e0c3"/>
      <circle cx="78" cy="92" r="10" fill="#fff"/><circle cx="122" cy="92" r="10" fill="#fff"/>
      <circle cx="80" cy="94" r="5.5" fill="#222"/><circle cx="120" cy="94" r="5.5" fill="#222"/>
      <ellipse cx="100" cy="112" rx="12" ry="8" fill="#222"/>
      <path d="M100 120 v9 M100 129 q-11 9 -21 0 M100 129 q11 9 21 0" stroke="#222" stroke-width="3" fill="none" stroke-linecap="round"/>
      <path d="M92 133 q8 22 16 0 z" fill="#ff7a8a"/>
    </svg>`
  },
  {
    id: 'cat', en: 'Cat', fr: 'Chat', snd_en: 'Meow!', snd_fr: 'Miaou!', color: '#ffe0cc',
    svg: `<svg viewBox="0 0 200 200" role="img" aria-hidden="true">
      <polygon points="45,70 55,20 95,50" fill="#f4a259"/>
      <polygon points="155,70 145,20 105,50" fill="#f4a259"/>
      <polygon points="55,62 58,36 80,52" fill="#ffb3c1"/>
      <polygon points="145,62 142,36 120,52" fill="#ffb3c1"/>
      <ellipse cx="100" cy="110" rx="62" ry="55" fill="#f4a259"/>
      <path d="M100 58 v18 M82 62 v14 M118 62 v14" stroke="#d9822b" stroke-width="5" stroke-linecap="round"/>
      <ellipse cx="76" cy="105" rx="10" ry="12" fill="#fff"/><ellipse cx="124" cy="105" rx="10" ry="12" fill="#fff"/>
      <ellipse cx="76" cy="107" rx="4" ry="9" fill="#222"/><ellipse cx="124" cy="107" rx="4" ry="9" fill="#222"/>
      <polygon points="93,122 107,122 100,131" fill="#ff7a8a"/>
      <path d="M100 131 q-8 10 -16 4 M100 131 q8 10 16 4" stroke="#222" stroke-width="2.5" fill="none" stroke-linecap="round"/>
      <path d="M60 126 l-34 -6 M60 134 l-34 6 M140 126 l34 -6 M140 134 l34 6" stroke="#fff" stroke-width="2.5" stroke-linecap="round"/>
    </svg>`
  },
  {
    id: 'cow', en: 'Cow', fr: 'Vache', snd_en: 'Moo!', snd_fr: 'Meuh!', color: '#e3f1ff',
    svg: `<svg viewBox="0 0 200 200" role="img" aria-hidden="true">
      <path d="M62 52 q-14 -22 -28 -12 q8 12 24 22z" fill="#f3e3b3"/>
      <path d="M138 52 q14 -22 28 -12 q-8 12 -24 22z" fill="#f3e3b3"/>
      <ellipse cx="36" cy="88" rx="24" ry="13" fill="#fff" stroke="#ddd" stroke-width="2" transform="rotate(-20 36 88)"/>
      <ellipse cx="164" cy="88" rx="24" ry="13" fill="#fff" stroke="#ddd" stroke-width="2" transform="rotate(20 164 88)"/>
      <ellipse cx="36" cy="88" rx="13" ry="6" fill="#ffb3c1" transform="rotate(-20 36 88)"/>
      <ellipse cx="164" cy="88" rx="13" ry="6" fill="#ffb3c1" transform="rotate(20 164 88)"/>
      <ellipse cx="100" cy="100" rx="58" ry="62" fill="#fff" stroke="#ddd" stroke-width="2"/>
      <path d="M62 50 q20 -14 36 -2 q-2 24 -20 26 q-20 0 -16 -24z" fill="#333"/>
      <ellipse cx="142" cy="90" rx="16" ry="20" fill="#333"/>
      <circle cx="78" cy="98" r="7" fill="#222"/><circle cx="122" cy="98" r="7" fill="#222"/>
      <circle cx="80" cy="96" r="2.5" fill="#fff"/><circle cx="124" cy="96" r="2.5" fill="#fff"/>
      <ellipse cx="100" cy="140" rx="38" ry="26" fill="#ffb3c1"/>
      <ellipse cx="88" cy="140" rx="5" ry="7" fill="#c9586c"/><ellipse cx="112" cy="140" rx="5" ry="7" fill="#c9586c"/>
    </svg>`
  },
  {
    id: 'duck', en: 'Duck', fr: 'Canard', snd_en: 'Quack quack!', snd_fr: 'Coin coin!', color: '#fff4b8',
    svg: `<svg viewBox="0 0 200 200" role="img" aria-hidden="true">
      <circle cx="100" cy="100" r="64" fill="#ffd93b"/>
      <path d="M92 40 q8 -24 18 0 q-9 7 -18 0z" fill="#ffd93b"/>
      <circle cx="58" cy="115" r="10" fill="#ffb347" opacity=".6"/><circle cx="142" cy="115" r="10" fill="#ffb347" opacity=".6"/>
      <circle cx="78" cy="88" r="8" fill="#222"/><circle cx="122" cy="88" r="8" fill="#222"/>
      <circle cx="80" cy="85" r="2.8" fill="#fff"/><circle cx="124" cy="85" r="2.8" fill="#fff"/>
      <ellipse cx="100" cy="124" rx="40" ry="20" fill="#ff9f1c"/>
      <path d="M64 124 q36 8 72 0" stroke="#c76f00" stroke-width="3" fill="none" stroke-linecap="round"/>
    </svg>`
  },
  {
    id: 'pig', en: 'Pig', fr: 'Cochon', snd_en: 'Oink oink!', snd_fr: 'Groin groin!', color: '#ffdce8',
    svg: `<svg viewBox="0 0 200 200" role="img" aria-hidden="true">
      <polygon points="52,66 38,26 88,48" fill="#ff9eb5"/>
      <polygon points="148,66 162,26 112,48" fill="#ff9eb5"/>
      <circle cx="100" cy="105" r="62" fill="#ffb3c7"/>
      <circle cx="76" cy="92" r="7" fill="#222"/><circle cx="124" cy="92" r="7" fill="#222"/>
      <circle cx="78" cy="90" r="2.5" fill="#fff"/><circle cx="126" cy="90" r="2.5" fill="#fff"/>
      <circle cx="60" cy="118" r="9" fill="#ff8fab" opacity=".5"/><circle cx="140" cy="118" r="9" fill="#ff8fab" opacity=".5"/>
      <ellipse cx="100" cy="124" rx="30" ry="22" fill="#ff8fab"/>
      <ellipse cx="90" cy="124" rx="5" ry="8" fill="#b34766"/><ellipse cx="110" cy="124" rx="5" ry="8" fill="#b34766"/>
    </svg>`
  },
  {
    id: 'sheep', en: 'Sheep', fr: 'Mouton', snd_en: 'Baa!', snd_fr: 'Bêê!', color: '#e6f4e0',
    svg: `<svg viewBox="0 0 200 200" role="img" aria-hidden="true">
      <g fill="#fff" stroke="#e3e3e3" stroke-width="2">
        <circle cx="58" cy="70" r="28"/><circle cx="142" cy="70" r="28"/>
        <circle cx="42" cy="108" r="26"/><circle cx="158" cy="108" r="26"/>
        <circle cx="68" cy="144" r="26"/><circle cx="132" cy="144" r="26"/>
        <circle cx="100" cy="100" r="50"/>
      </g>
      <ellipse cx="62" cy="116" rx="18" ry="9" fill="#4a4a4a" transform="rotate(25 62 116)"/>
      <ellipse cx="138" cy="116" rx="18" ry="9" fill="#4a4a4a" transform="rotate(-25 138 116)"/>
      <ellipse cx="100" cy="116" rx="34" ry="42" fill="#4a4a4a"/>
      <circle cx="100" cy="68" r="24" fill="#fff" stroke="#e3e3e3" stroke-width="2"/>
      <circle cx="88" cy="108" r="7" fill="#fff"/><circle cx="112" cy="108" r="7" fill="#fff"/>
      <circle cx="89" cy="109" r="3.5" fill="#222"/><circle cx="111" cy="109" r="3.5" fill="#222"/>
      <ellipse cx="100" cy="134" rx="9" ry="6" fill="#ff9eb5"/>
    </svg>`
  },
  {
    id: 'rooster', en: 'Rooster', fr: 'Coq', snd_en: 'Cock-a-doodle-doo!', snd_fr: 'Cocorico!', color: '#ffe8e0',
    svg: `<svg viewBox="0 0 200 200" role="img" aria-hidden="true">
      <circle cx="82" cy="42" r="14" fill="#e63946"/><circle cx="100" cy="32" r="16" fill="#e63946"/><circle cx="119" cy="42" r="14" fill="#e63946"/>
      <circle cx="100" cy="102" r="62" fill="#fff" stroke="#e8e8e8" stroke-width="2"/>
      <circle cx="62" cy="118" r="9" fill="#ffb3b3" opacity=".7"/><circle cx="138" cy="118" r="9" fill="#ffb3b3" opacity=".7"/>
      <circle cx="78" cy="92" r="8" fill="#222"/><circle cx="122" cy="92" r="8" fill="#222"/>
      <circle cx="80" cy="89" r="2.8" fill="#fff"/><circle cx="124" cy="89" r="2.8" fill="#fff"/>
      <ellipse cx="100" cy="148" rx="11" ry="15" fill="#e63946"/>
      <polygon points="86,106 114,106 100,136" fill="#ffb703"/>
    </svg>`
  },
  {
    id: 'frog', en: 'Frog', fr: 'Grenouille', snd_en: 'Ribbit!', snd_fr: 'Coa coa!', color: '#dff6d2',
    svg: `<svg viewBox="0 0 200 200" role="img" aria-hidden="true">
      <ellipse cx="100" cy="118" rx="72" ry="56" fill="#6cc24a"/>
      <circle cx="62" cy="62" r="28" fill="#6cc24a"/><circle cx="138" cy="62" r="28" fill="#6cc24a"/>
      <circle cx="62" cy="60" r="18" fill="#fff"/><circle cx="138" cy="60" r="18" fill="#fff"/>
      <circle cx="64" cy="62" r="9" fill="#222"/><circle cx="136" cy="62" r="9" fill="#222"/>
      <circle cx="67" cy="59" r="3" fill="#fff"/><circle cx="139" cy="59" r="3" fill="#fff"/>
      <circle cx="90" cy="100" r="3" fill="#2e7d32"/><circle cx="110" cy="100" r="3" fill="#2e7d32"/>
      <circle cx="52" cy="130" r="10" fill="#ff9eb5" opacity=".55"/><circle cx="148" cy="130" r="10" fill="#ff9eb5" opacity=".55"/>
      <path d="M44 120 q56 56 112 0" stroke="#2e7d32" stroke-width="5" fill="none" stroke-linecap="round"/>
    </svg>`
  },
  {
    id: 'lion', en: 'Lion', fr: 'Lion', snd_en: 'Roar!', snd_fr: 'Grrr!', color: '#ffeccc',
    svg: `<svg viewBox="0 0 200 200" role="img" aria-hidden="true">
      <circle cx="100" cy="102" r="90" fill="#c46a1a"/>
      <circle cx="100" cy="102" r="78" fill="#e8903a"/>
      <circle cx="58" cy="52" r="17" fill="#f6c36b"/><circle cx="142" cy="52" r="17" fill="#f6c36b"/>
      <circle cx="58" cy="52" r="8" fill="#ffb3c1"/><circle cx="142" cy="52" r="8" fill="#ffb3c1"/>
      <circle cx="100" cy="108" r="54" fill="#f6c36b"/>
      <ellipse cx="100" cy="130" rx="24" ry="16" fill="#fde3a7"/>
      <circle cx="80" cy="96" r="7" fill="#222"/><circle cx="120" cy="96" r="7" fill="#222"/>
      <circle cx="82" cy="94" r="2.5" fill="#fff"/><circle cx="122" cy="94" r="2.5" fill="#fff"/>
      <polygon points="89,114 111,114 100,127" fill="#7a3b1d"/>
      <path d="M100 127 v7 M100 134 q-10 8 -18 0 M100 134 q10 8 18 0" stroke="#7a3b1d" stroke-width="3" fill="none" stroke-linecap="round"/>
    </svg>`
  },
  {
    id: 'owl', en: 'Owl', fr: 'Hibou', snd_en: 'Hoot hoot!', snd_fr: 'Hou hou!', color: '#e8e0f5',
    svg: `<svg viewBox="0 0 200 200" role="img" aria-hidden="true">
      <polygon points="50,60 44,16 88,42" fill="#6d4c41"/>
      <polygon points="150,60 156,16 112,42" fill="#6d4c41"/>
      <ellipse cx="100" cy="112" rx="68" ry="74" fill="#8d6e63"/>
      <ellipse cx="100" cy="140" rx="40" ry="42" fill="#d7ccc8"/>
      <g fill="none" stroke="#a1887f" stroke-width="3" stroke-linecap="round">
        <path d="M82 134 q6 6 12 0 M106 134 q6 6 12 0 M94 152 q6 6 12 0"/>
      </g>
      <circle cx="72" cy="92" r="25" fill="#fff" stroke="#5d4037" stroke-width="4"/>
      <circle cx="128" cy="92" r="25" fill="#fff" stroke="#5d4037" stroke-width="4"/>
      <circle cx="74" cy="94" r="11" fill="#222"/><circle cx="126" cy="94" r="11" fill="#222"/>
      <circle cx="77" cy="90" r="3.5" fill="#fff"/><circle cx="129" cy="90" r="3.5" fill="#fff"/>
      <polygon points="91,108 109,108 100,128" fill="#ffb703"/>
    </svg>`
  }
];
