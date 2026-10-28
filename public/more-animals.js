/* More animals (same format as animals.js). Their sounds are the real recordings in sounds/<id>.mp3,
   produced at build time from sounds.txt. */
(function () {
  'use strict';

  function svg(parts) {
    return '<svg viewBox="0 0 200 200" role="img" aria-hidden="true">' + parts.join('') + '</svg>';
  }

  var MORE = [
    {
      id: 'horse', en: 'Horse', fr: 'Cheval', snd_en: 'Neigh!', snd_fr: 'Hiiii!', color: '#f3e6d8',
      svg: svg([
        '<polygon points="62,52 70,14 90,46" fill="#8b5a2b"/>',
        '<polygon points="138,52 130,14 110,46" fill="#8b5a2b"/>',
        '<ellipse cx="100" cy="100" rx="50" ry="62" fill="#a0522d"/>',
        '<path d="M84 34 q16 -10 32 0 q-4 16 -16 22 q-12 -6 -16 -22z" fill="#3e2723"/>',
        '<ellipse cx="100" cy="146" rx="40" ry="30" fill="#d7a77c"/>',
        '<ellipse cx="86" cy="146" rx="6" ry="8" fill="#5d3a1a"/><ellipse cx="114" cy="146" rx="6" ry="8" fill="#5d3a1a"/>',
        '<circle cx="76" cy="92" r="8" fill="#222"/><circle cx="124" cy="92" r="8" fill="#222"/>',
        '<circle cx="78" cy="89" r="2.8" fill="#fff"/><circle cx="126" cy="89" r="2.8" fill="#fff"/>',
        '<path d="M88 164 q12 7 24 0" stroke="#5d3a1a" stroke-width="3" fill="none" stroke-linecap="round"/>'
      ])
    },
    {
      id: 'elephant', en: 'Elephant', fr: 'Éléphant', snd_en: 'Pawoo!', snd_fr: 'Pouuuu!', color: '#e4ecf3',
      svg: svg([
        '<ellipse cx="42" cy="95" rx="38" ry="48" fill="#90a4ae"/><ellipse cx="158" cy="95" rx="38" ry="48" fill="#90a4ae"/>',
        '<ellipse cx="46" cy="95" rx="24" ry="34" fill="#f8bbd0"/><ellipse cx="154" cy="95" rx="24" ry="34" fill="#f8bbd0"/>',
        '<circle cx="100" cy="90" r="52" fill="#b0bec5"/>',
        '<path d="M80 120 q-6 16 4 24" stroke="#fff" stroke-width="6" fill="none" stroke-linecap="round"/>',
        '<path d="M120 120 q6 16 -4 24" stroke="#fff" stroke-width="6" fill="none" stroke-linecap="round"/>',
        '<path d="M88 118 q-4 40 10 62 q8 8 16 -2 q-10 -20 -6 -60z" fill="#b0bec5"/>',
        '<path d="M95 140 h14 M98 156 h12" stroke="#90a4ae" stroke-width="2.5" stroke-linecap="round"/>',
        '<circle cx="80" cy="82" r="7" fill="#222"/><circle cx="120" cy="82" r="7" fill="#222"/>',
        '<circle cx="82" cy="80" r="2.5" fill="#fff"/><circle cx="122" cy="80" r="2.5" fill="#fff"/>'
      ])
    },
    {
      id: 'monkey', en: 'Monkey', fr: 'Singe', snd_en: 'Ooh ooh ah ah!', snd_fr: 'Hou hou ha ha!', color: '#f1e3d3',
      svg: svg([
        '<circle cx="40" cy="100" r="22" fill="#795548"/><circle cx="160" cy="100" r="22" fill="#795548"/>',
        '<circle cx="40" cy="100" r="12" fill="#d7b899"/><circle cx="160" cy="100" r="12" fill="#d7b899"/>',
        '<circle cx="100" cy="100" r="62" fill="#795548"/>',
        '<path d="M92 40 q8 -14 16 0" stroke="#5d4037" stroke-width="4" fill="none" stroke-linecap="round"/>',
        '<path d="M100 70 q-20 -22 -40 -2 q-14 16 -2 38 q-12 30 42 46 q54 -16 42 -46 q12 -22 -2 -38 q-20 -20 -40 2z" fill="#d7b899"/>',
        '<circle cx="82" cy="92" r="8" fill="#222"/><circle cx="118" cy="92" r="8" fill="#222"/>',
        '<circle cx="84" cy="89" r="2.8" fill="#fff"/><circle cx="120" cy="89" r="2.8" fill="#fff"/>',
        '<circle cx="94" cy="116" r="3" fill="#5d4037"/><circle cx="106" cy="116" r="3" fill="#5d4037"/>',
        '<path d="M82 130 q18 14 36 0" stroke="#5d4037" stroke-width="3" fill="none" stroke-linecap="round"/>'
      ])
    },
    {
      id: 'goat', en: 'Goat', fr: 'Chèvre', snd_en: 'Meh-eh-eh!', snd_fr: 'Mêêê!', color: '#eef3e2',
      svg: svg([
        '<path d="M70 52 q-16 -30 -2 -42 q4 20 16 36z" fill="#bcaaa4"/><path d="M130 52 q16 -30 2 -42 q-4 20 -16 36z" fill="#bcaaa4"/>',
        '<ellipse cx="44" cy="86" rx="26" ry="10" fill="#f5f5f5" stroke="#ddd" stroke-width="2" transform="rotate(20 44 86)"/>',
        '<ellipse cx="156" cy="86" rx="26" ry="10" fill="#f5f5f5" stroke="#ddd" stroke-width="2" transform="rotate(-20 156 86)"/>',
        '<ellipse cx="100" cy="98" rx="48" ry="58" fill="#fafafa" stroke="#e0e0e0" stroke-width="2"/>',
        '<ellipse cx="80" cy="88" rx="10" ry="8" fill="#ffcc80"/><ellipse cx="120" cy="88" rx="10" ry="8" fill="#ffcc80"/>',
        '<rect x="73" y="86" width="14" height="4" rx="2" fill="#222"/><rect x="113" y="86" width="14" height="4" rx="2" fill="#222"/>',
        '<ellipse cx="100" cy="128" rx="16" ry="10" fill="#f8bbd0"/>',
        '<path d="M88 152 q12 40 24 0z" fill="#e0e0e0"/>'
      ])
    },
    {
      id: 'bee', en: 'Bee', fr: 'Abeille', snd_en: 'Buzz!', snd_fr: 'Bzzz!', color: '#fff8d6',
      svg: svg([
        '<ellipse cx="112" cy="58" rx="22" ry="32" fill="#e3f2fd" stroke="#90caf9" stroke-width="3" transform="rotate(-20 112 58)"/>',
        '<ellipse cx="146" cy="60" rx="22" ry="32" fill="#e3f2fd" stroke="#90caf9" stroke-width="3" transform="rotate(20 146 60)"/>',
        '<polygon points="166,108 194,114 166,122" fill="#3e2723"/>',
        '<clipPath id="beeBody"><ellipse cx="100" cy="114" rx="70" ry="54"/></clipPath>',
        '<ellipse cx="100" cy="114" rx="70" ry="54" fill="#ffd54f"/>',
        '<g clip-path="url(#beeBody)" fill="#3e2723"><rect x="114" y="50" width="16" height="130"/><rect x="146" y="50" width="16" height="130"/></g>',
        '<path d="M64 66 q-10 -30 -24 -36 M86 62 q4 -30 16 -40" stroke="#3e2723" stroke-width="4" fill="none" stroke-linecap="round"/>',
        '<circle cx="40" cy="30" r="6" fill="#3e2723"/><circle cx="102" cy="22" r="6" fill="#3e2723"/>',
        '<circle cx="62" cy="104" r="8" fill="#222"/><circle cx="92" cy="104" r="8" fill="#222"/>',
        '<circle cx="64" cy="101" r="2.8" fill="#fff"/><circle cx="94" cy="101" r="2.8" fill="#fff"/>',
        '<circle cx="50" cy="124" r="7" fill="#ff8a65" opacity=".5"/><circle cx="102" cy="124" r="7" fill="#ff8a65" opacity=".5"/>',
        '<path d="M64 124 q13 12 26 0" stroke="#3e2723" stroke-width="3" fill="none" stroke-linecap="round"/>'
      ])
    },
    {
      id: 'wolf', en: 'Wolf', fr: 'Loup', snd_en: 'Awoooo!', snd_fr: 'Ahouuuu!', color: '#e3e8ef',
      svg: svg([
        '<polygon points="44,74 52,16 92,48" fill="#78909c"/><polygon points="156,74 148,16 108,48" fill="#78909c"/>',
        '<polygon points="56,62 58,32 80,50" fill="#cfd8dc"/><polygon points="144,62 142,32 120,50" fill="#cfd8dc"/>',
        '<path d="M100 40 q60 0 64 60 q2 40 -28 58 l-36 26 l-36 -26 q-30 -18 -28 -58 q4 -60 64 -60z" fill="#90a4ae"/>',
        '<path d="M100 90 q30 10 34 44 l-34 34 l-34 -34 q4 -34 34 -44z" fill="#eceff1"/>',
        '<ellipse cx="76" cy="92" rx="9" ry="7" fill="#ffca28"/><ellipse cx="124" cy="92" rx="9" ry="7" fill="#ffca28"/>',
        '<circle cx="76" cy="92" r="4" fill="#222"/><circle cx="124" cy="92" r="4" fill="#222"/>',
        '<ellipse cx="100" cy="138" rx="12" ry="8" fill="#263238"/>',
        '<path d="M100 146 v8 M100 154 q-8 6 -14 0 M100 154 q8 6 14 0" stroke="#263238" stroke-width="3" fill="none" stroke-linecap="round"/>'
      ])
    },
    {
      id: 'bird', en: 'Bird', fr: 'Oiseau', snd_en: 'Tweet tweet!', snd_fr: 'Cui-cui!', color: '#e1f1ff',
      svg: svg([
        '<ellipse cx="46" cy="118" rx="16" ry="30" fill="#1e88e5" transform="rotate(20 46 118)"/>',
        '<ellipse cx="154" cy="118" rx="16" ry="30" fill="#1e88e5" transform="rotate(-20 154 118)"/>',
        '<path d="M96 50 q-6 -24 8 -32 q-2 14 6 30z" fill="#1e88e5"/>',
        '<circle cx="100" cy="108" r="60" fill="#42a5f5"/>',
        '<ellipse cx="100" cy="138" rx="40" ry="30" fill="#bbdefb"/>',
        '<circle cx="80" cy="96" r="9" fill="#fff"/><circle cx="120" cy="96" r="9" fill="#fff"/>',
        '<circle cx="81" cy="97" r="5" fill="#222"/><circle cx="119" cy="97" r="5" fill="#222"/>',
        '<polygon points="88,110 112,110 100,126" fill="#ffb300"/>',
        '<circle cx="66" cy="118" r="7" fill="#ff8a80" opacity=".55"/><circle cx="134" cy="118" r="7" fill="#ff8a80" opacity=".55"/>'
      ])
    },
    {
      id: 'mouse', en: 'Mouse', fr: 'Souris', snd_en: 'Squeak!', snd_fr: 'Couic couic!', color: '#f0eef5',
      svg: svg([
        '<circle cx="46" cy="58" r="36" fill="#b0bec5"/><circle cx="154" cy="58" r="36" fill="#b0bec5"/>',
        '<circle cx="46" cy="58" r="22" fill="#f8bbd0"/><circle cx="154" cy="58" r="22" fill="#f8bbd0"/>',
        '<ellipse cx="100" cy="112" rx="58" ry="54" fill="#cfd8dc"/>',
        '<circle cx="80" cy="104" r="8" fill="#222"/><circle cx="120" cy="104" r="8" fill="#222"/>',
        '<circle cx="82" cy="101" r="2.8" fill="#fff"/><circle cx="122" cy="101" r="2.8" fill="#fff"/>',
        '<path d="M84 134 l-40 -8 M84 140 l-40 6 M116 134 l40 -8 M116 140 l40 6" stroke="#78909c" stroke-width="2.5" stroke-linecap="round"/>',
        '<path d="M88 144 q12 6 24 0" stroke="#78909c" stroke-width="2.5" fill="none" stroke-linecap="round"/>',
        '<rect x="94" y="146" width="12" height="10" rx="2" fill="#fff" stroke="#b0bec5"/>',
        '<circle cx="100" cy="132" r="8" fill="#f06292"/>'
      ])
    },
    {
      id: 'bear', en: 'Bear', fr: 'Ours', snd_en: 'Growl!', snd_fr: 'Grrrou!', color: '#f3e5d8',
      svg: svg([
        '<circle cx="50" cy="52" r="24" fill="#6d4c41"/><circle cx="150" cy="52" r="24" fill="#6d4c41"/>',
        '<circle cx="50" cy="52" r="12" fill="#a1887f"/><circle cx="150" cy="52" r="12" fill="#a1887f"/>',
        '<circle cx="100" cy="106" r="64" fill="#795548"/>',
        '<ellipse cx="100" cy="134" rx="32" ry="24" fill="#d7ccc8"/>',
        '<ellipse cx="100" cy="124" rx="12" ry="8" fill="#3e2723"/>',
        '<path d="M100 132 v8 M100 140 q-8 7 -15 0 M100 140 q8 7 15 0" stroke="#3e2723" stroke-width="3" fill="none" stroke-linecap="round"/>',
        '<circle cx="78" cy="94" r="7" fill="#222"/><circle cx="122" cy="94" r="7" fill="#222"/>',
        '<circle cx="80" cy="92" r="2.5" fill="#fff"/><circle cx="124" cy="92" r="2.5" fill="#fff"/>'
      ])
    },
    {
      id: 'donkey', en: 'Donkey', fr: 'Âne', snd_en: 'Hee-haw!', snd_fr: 'Hi-han!', color: '#ece9f2',
      svg: svg([
        '<ellipse cx="62" cy="40" rx="14" ry="40" fill="#90a4ae" transform="rotate(-18 62 40)"/>',
        '<ellipse cx="138" cy="40" rx="14" ry="40" fill="#90a4ae" transform="rotate(18 138 40)"/>',
        '<ellipse cx="62" cy="42" rx="7" ry="28" fill="#f8bbd0" transform="rotate(-18 62 42)"/>',
        '<ellipse cx="138" cy="42" rx="7" ry="28" fill="#f8bbd0" transform="rotate(18 138 42)"/>',
        '<ellipse cx="100" cy="104" rx="48" ry="60" fill="#a7b4bc"/>',
        '<path d="M88 48 q12 -16 24 0 q-12 10 -24 0z" fill="#455a64"/>',
        '<ellipse cx="100" cy="148" rx="40" ry="28" fill="#eceff1"/>',
        '<ellipse cx="88" cy="146" rx="5" ry="7" fill="#546e7a"/><ellipse cx="112" cy="146" rx="5" ry="7" fill="#546e7a"/>',
        '<circle cx="78" cy="96" r="7" fill="#222"/><circle cx="122" cy="96" r="7" fill="#222"/>',
        '<circle cx="80" cy="94" r="2.5" fill="#fff"/><circle cx="124" cy="94" r="2.5" fill="#fff"/>',
        '<path d="M88 164 q12 7 24 0" stroke="#546e7a" stroke-width="3" fill="none" stroke-linecap="round"/>'
      ])
    },
    {
      id: 'chick', en: 'Chick', fr: 'Poussin', snd_en: 'Peep peep!', snd_fr: 'Piou piou!', color: '#fff7d1',
      svg: svg([
        '<path d="M96 46 q-4 -18 8 -22 q-2 12 4 22z" fill="#fdd835"/>',
        '<circle cx="100" cy="98" r="56" fill="#ffeb3b"/>',
        '<circle cx="82" cy="90" r="7" fill="#222"/><circle cx="118" cy="90" r="7" fill="#222"/>',
        '<circle cx="84" cy="88" r="2.5" fill="#fff"/><circle cx="120" cy="88" r="2.5" fill="#fff"/>',
        '<polygon points="90,104 110,104 100,116" fill="#ff9800"/>',
        '<circle cx="68" cy="108" r="7" fill="#ffab91" opacity=".6"/><circle cx="132" cy="108" r="7" fill="#ffab91" opacity=".6"/>',
        '<path d="M38 130 L52 116 L66 130 L80 116 L94 130 L108 116 L122 130 L136 116 L150 130 L162 118 L162 130 Q162 188 100 188 Q38 188 38 130 Z" fill="#fffaf0" stroke="#e0d6c2" stroke-width="3" stroke-linejoin="round"/>'
      ])
    },
    {
      id: 'tiger', en: 'Tiger', fr: 'Tigre', snd_en: 'Rrrroar!', snd_fr: 'Grrraaar!', color: '#ffe9d1',
      svg: svg([
        '<circle cx="50" cy="56" r="22" fill="#f57c00"/><circle cx="150" cy="56" r="22" fill="#f57c00"/>',
        '<circle cx="50" cy="56" r="11" fill="#fff3e0"/><circle cx="150" cy="56" r="11" fill="#fff3e0"/>',
        '<circle cx="100" cy="106" r="66" fill="#fb8c00"/>',
        '<path d="M100 42 v22 M84 46 l4 18 M116 46 l-4 18" stroke="#3e2723" stroke-width="6" stroke-linecap="round"/>',
        '<path d="M36 100 h22 M38 118 h20 M164 100 h-22 M162 118 h-20" stroke="#3e2723" stroke-width="6" stroke-linecap="round"/>',
        '<ellipse cx="86" cy="134" rx="22" ry="18" fill="#fff"/><ellipse cx="114" cy="134" rx="22" ry="18" fill="#fff"/>',
        '<ellipse cx="100" cy="152" rx="16" ry="10" fill="#fff"/>',
        '<ellipse cx="76" cy="94" rx="10" ry="8" fill="#c5e1a5"/><ellipse cx="124" cy="94" rx="10" ry="8" fill="#c5e1a5"/>',
        '<ellipse cx="76" cy="94" rx="3" ry="6" fill="#222"/><ellipse cx="124" cy="94" rx="3" ry="6" fill="#222"/>',
        '<polygon points="90,120 110,120 100,132" fill="#e91e63"/>',
        '<path d="M100 132 v6 M100 138 q-8 7 -15 0 M100 138 q8 7 15 0" stroke="#3e2723" stroke-width="3" fill="none" stroke-linecap="round"/>',
        '<circle cx="80" cy="136" r="2" fill="#8d6e63"/><circle cx="86" cy="142" r="2" fill="#8d6e63"/><circle cx="114" cy="142" r="2" fill="#8d6e63"/><circle cx="120" cy="136" r="2" fill="#8d6e63"/>'
      ])
    },
    {
      id: 'gorilla', en: 'Gorilla', fr: 'Gorille', snd_en: 'Hoo hoo hoo!', snd_fr: 'Hou hou hou!', color: '#e8eaef',
      svg: svg([
        '<circle cx="40" cy="104" r="18" fill="#424242"/><circle cx="160" cy="104" r="18" fill="#424242"/>',
        '<ellipse cx="100" cy="98" rx="64" ry="70" fill="#424242"/>',
        '<path d="M100 66 q-34 -8 -44 18 q-8 26 6 50 q14 30 38 30 q24 0 38 -30 q14 -24 6 -50 q-10 -26 -44 -18z" fill="#8d8d8d"/>',
        '<path d="M58 86 q42 -20 84 0" stroke="#2b2b2b" stroke-width="10" fill="none" stroke-linecap="round"/>',
        '<circle cx="80" cy="99" r="6" fill="#222"/><circle cx="120" cy="99" r="6" fill="#222"/>',
        '<circle cx="82" cy="97" r="2" fill="#fff"/><circle cx="122" cy="97" r="2" fill="#fff"/>',
        '<ellipse cx="100" cy="122" rx="20" ry="12" fill="#5f5f5f"/>',
        '<ellipse cx="92" cy="123" rx="5" ry="4" fill="#222"/><ellipse cx="108" cy="123" rx="5" ry="4" fill="#222"/>',
        '<path d="M84 146 q16 10 32 0" stroke="#2b2b2b" stroke-width="4" fill="none" stroke-linecap="round"/>'
      ])
    },
    {
      id: 'dragon', en: 'Dragon', fr: 'Dragon', snd_en: 'Grrraaawr!', snd_fr: 'Grrraaawr!', color: '#e3f5e1',
      svg: svg([
        '<path d="M62 56 q-14 -30 -30 -40 q8 30 18 50z" fill="#fdd835"/><path d="M138 56 q14 -30 30 -40 q-8 30 -18 50z" fill="#fdd835"/>',
        '<path d="M84 40 l8 -18 l8 16 l8 -16 l8 18z" fill="#2e7d32"/>',
        '<ellipse cx="100" cy="96" rx="62" ry="58" fill="#43a047"/>',
        '<ellipse cx="100" cy="142" rx="46" ry="32" fill="#66bb6a"/>',
        '<ellipse cx="86" cy="134" rx="5" ry="7" fill="#1b5e20"/><ellipse cx="114" cy="134" rx="5" ry="7" fill="#1b5e20"/>',
        '<ellipse cx="76" cy="88" rx="13" ry="11" fill="#ffeb3b"/><ellipse cx="124" cy="88" rx="13" ry="11" fill="#ffeb3b"/>',
        '<ellipse cx="76" cy="88" rx="3.5" ry="8" fill="#222"/><ellipse cx="124" cy="88" rx="3.5" ry="8" fill="#222"/>',
        '<path d="M62 74 l26 6 M138 74 l-26 6" stroke="#1b5e20" stroke-width="5" stroke-linecap="round"/>',
        '<path d="M74 156 q26 14 52 0" stroke="#1b5e20" stroke-width="4" fill="none" stroke-linecap="round"/>',
        '<polygon points="84,158 90,168 96,160" fill="#fff"/><polygon points="104,160 110,168 116,158" fill="#fff"/>',
        '<path d="M150 150 q20 -6 30 -22 q-2 16 12 20 q-14 8 -10 22 q-14 -12 -32 -20z" fill="#ff7043"/>',
        '<path d="M156 150 q12 -4 18 -12 q0 10 8 12 q-8 4 -6 12 q-8 -8 -20 -12z" fill="#ffca28"/>'
      ])
    }
  ];

  MORE.forEach(function (a) { window.ANIMALS.push(a); });
})();
