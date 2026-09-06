// 中学受験 理科(化学・物理) 追加問題データ 第2弾
// science-questions.js の SCIENCE_CHEMISTRY_QUESTIONS / SCIENCE_PHYSICS_QUESTIONS と
// 重複しないように作成した追加分(化学40問・物理40問)。
// research-science.html の化学分野(#subject-chem)・物理分野(#subject-phys)の
// 頻出単元・計算パターンをもとに、偏差値50前後(基礎〜標準)のレベルで構成。
// 図(data)は白黒(#000 / #666)のみで作画。

const SCIENCE_ADD_2 = {

  // ============================================================
  // 化学 40問(うち計算16問・図つき9問)
  // ============================================================
  chemistry: [

    // ---- 水溶液の性質・指示薬 ----
    {
      q: "ある水溶液にBTB溶液を数てき加えたところ、黄色になった。この水溶液は何性か。",
      choices: ["酸性", "アルカリ性", "中性", "液性は判断できない"],
      answer: 0,
      explain: "BTB溶液は酸性で黄色、中性で緑色、アルカリ性で青色になる。黄色になったので酸性である。"
    },
    {
      q: "フェノールフタレイン溶液を加えたときに赤色(ももいろ)になる水溶液はどれか。",
      choices: ["うすい塩酸", "食塩水", "炭酸水", "水酸化ナトリウム水溶液"],
      answer: 3,
      explain: "フェノールフタレイン溶液はアルカリ性の水溶液だけを赤色に変える。塩酸・炭酸水は酸性、食塩水は中性なので無色のまま。"
    },
    {
      q: "うすい塩酸を蒸発皿にとって加熱し、水分をすべて蒸発させると、あとに何が残るか。",
      choices: ["何も残らない", "白い固体が残る", "黒いすすが残る", "黄色い液体が残る"],
      answer: 0,
      explain: "塩酸は気体(塩化水素)がとけた水溶液なので、加熱すると水と一緒に気体も逃げてしまい、あとには何も残らない。食塩水のように固体がとけた水溶液は白い固体が残る。"
    },
    {
      q: "石灰水にとけている物質(溶質)は何か。",
      choices: ["炭酸カルシウム", "水酸化ナトリウム", "塩化カルシウム", "水酸化カルシウム"],
      answer: 3,
      explain: "石灰水は水酸化カルシウムがとけた水溶液で、アルカリ性を示す。二酸化炭素を通すと炭酸カルシウムができて白くにごる。"
    },
    {
      q: "炭酸水にとけている気体は何か。",
      choices: ["二酸化炭素", "酸素", "水素", "アンモニア"],
      answer: 0,
      explain: "炭酸水は二酸化炭素がとけた水溶液で、弱い酸性を示す。加熱したり振ったりすると気体があわとなって出てくる。"
    },
    {
      q: "空気の約78%を占め、水にとけにくく、ものを燃やすはたらきがない気体は何か。",
      choices: ["酸素", "アルゴン", "二酸化炭素", "ちっ素"],
      answer: 3,
      explain: "空気の体積のうち約78%がちっ素、約21%が酸素である。ちっ素は水にとけにくく、ものを燃やすはたらきもない。"
    },
    {
      q: "アンモニアを発生させる方法として最も適したものはどれか。",
      choices: ["石灰石にうすい塩酸を加える", "鉄にうすい塩酸を加える", "炭酸水を加熱する", "塩化アンモニウムと水酸化カルシウムを混ぜて加熱する"],
      answer: 3,
      explain: "アンモニアは塩化アンモニウムと水酸化カルシウム(消石灰)を混ぜて加熱すると発生する。刺激臭があり、水によくとけてアルカリ性を示す。"
    },
    {
      q: "水素の性質として正しいものはどれか。",
      choices: ["すべての気体の中で最も軽く、燃えると水ができる", "空気より重く、石灰水を白くにごらせる", "刺激臭があり、水にとけるとアルカリ性を示す", "それ自身は燃えないが、ものを燃やすはたらきがある"],
      answer: 0,
      explain: "水素はすべての気体の中で最も軽く、火をつけるとポンと音を立てて燃え、水ができる。石灰水を白くにごらせるのは二酸化炭素、助燃性があるのは酸素。"
    },
    {
      q: "水上置換法で集めるのに適した気体の条件はどれか。",
      choices: ["水にとけやすく、空気より軽い", "水にとけにくい", "水にとけやすく、空気より重い", "空気とほぼ同じ重さである"],
      answer: 1,
      explain: "水上置換法は水と置きかえて集める方法なので、水にとけにくい気体(酸素・水素・ちっ素など)に適している。空気が混ざらず純すいな気体が集められる利点がある。"
    },
    {
      q: "下の図は、気体の集め方の3つの方法を表している。水にとけやすく、空気より重い気体を集めるのに適した方法はどれか。",
      data: `<svg viewBox="0 0 320 170" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="気体の集め方3種類の図">
      <text x="55" y="14" font-size="10" text-anchor="middle">ア</text>
      <rect x="14" y="88" width="86" height="46" fill="none" stroke="#000" stroke-width="1.5"/>
      <line x1="14" y1="100" x2="100" y2="100" stroke="#666" stroke-width="1" stroke-dasharray="3,2"/>
      <rect x="44" y="26" width="24" height="82" fill="none" stroke="#000" stroke-width="1.5"/>
      <line x1="44" y1="26" x2="68" y2="26" stroke="#000" stroke-width="3"/>
      <path d="M 100 118 L 78 118 L 78 104 L 56 104" fill="none" stroke="#000" stroke-width="1.5"/>
      <text x="57" y="152" font-size="8" text-anchor="middle">水そう</text>
      <text x="160" y="14" font-size="10" text-anchor="middle">イ</text>
      <rect x="146" y="30" width="26" height="70" fill="none" stroke="#000" stroke-width="1.5"/>
      <line x1="146" y1="30" x2="172" y2="30" stroke="#000" stroke-width="3"/>
      <line x1="159" y1="132" x2="159" y2="86" stroke="#000" stroke-width="1.5"/>
      <line x1="159" y1="132" x2="196" y2="132" stroke="#000" stroke-width="1.5"/>
      <text x="159" y="152" font-size="8" text-anchor="middle">管は上向き</text>
      <text x="265" y="14" font-size="10" text-anchor="middle">ウ</text>
      <rect x="252" y="30" width="26" height="70" fill="none" stroke="#000" stroke-width="1.5"/>
      <line x1="252" y1="100" x2="278" y2="100" stroke="#000" stroke-width="3"/>
      <line x1="265" y1="20" x2="265" y2="92" stroke="#000" stroke-width="1.5"/>
      <line x1="265" y1="20" x2="302" y2="20" stroke="#000" stroke-width="1.5"/>
      <text x="265" y="152" font-size="8" text-anchor="middle">管は底まで</text>
    </svg>`,
      choices: ["ア(水上置換法)", "イ(上方置換法)", "ウ(下方置換法)", "ア〜ウのどれでもよい"],
      answer: 2,
      explain: "水にとけやすい気体は水上置換法(ア)では集められない。空気より重い気体は容器の下にたまるので、容器の底まで管を入れる下方置換法(ウ)が適している。空気より軽ければ上方置換法(イ)を使う。"
    },

    // ---- 燃焼・酸化・還元 ----
    {
      q: "下の図は、ろうそくの炎を3つの部分に分けたものである。最も温度が高い部分はどれか。",
      data: `<svg viewBox="0 0 240 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="ろうそくの炎の3つの部分">
      <rect x="88" y="150" width="40" height="45" fill="none" stroke="#000" stroke-width="1.5"/>
      <line x1="108" y1="150" x2="108" y2="128" stroke="#000" stroke-width="2"/>
      <path d="M108 20 C 145 60, 148 110, 108 150 C 68 110, 71 60, 108 20 Z" fill="none" stroke="#000" stroke-width="1.5"/>
      <path d="M108 48 C 132 76, 134 118, 108 148 C 82 118, 84 76, 108 48 Z" fill="none" stroke="#000" stroke-width="1.5"/>
      <path d="M108 108 C 120 120, 120 138, 108 148 C 96 138, 96 120, 108 108 Z" fill="none" stroke="#000" stroke-width="1.5"/>
      <line x1="150" y1="45" x2="190" y2="35" stroke="#666" stroke-width="1"/>
      <text x="196" y="39" font-size="12">ア</text>
      <line x1="133" y1="80" x2="190" y2="72" stroke="#666" stroke-width="1"/>
      <text x="196" y="76" font-size="12">イ</text>
      <line x1="118" y1="130" x2="190" y2="118" stroke="#666" stroke-width="1"/>
      <text x="196" y="122" font-size="12">ウ</text>
      <text x="55" y="175" font-size="9" text-anchor="middle">ろうそく</text>
    </svg>`,
      choices: ["ア(外炎)", "イ(内炎)", "ウ(炎心)", "3つとも同じ温度"],
      answer: 0,
      explain: "外炎(ア)は空気(酸素)に最もよくふれるため完全に燃え、温度が最も高い。内炎(イ)は酸素が不足してすすができるため最も明るく光り、炎心(ウ)は気体になったろうがあるだけで温度が最も低い。"
    },
    {
      q: "スチールウール(鉄)を空気中で燃やしたあと、燃やす前と重さを比べるとどうなるか。",
      choices: ["軽くなる", "変わらない", "重くなる", "そのときによって変わる"],
      answer: 2,
      explain: "鉄が燃えると空気中の酸素と結びついて酸化鉄になるため、結びついた酸素の分だけ重くなる。木や紙が燃えると気体になって空気中へ出ていく分があるので軽くなるのとは対照的である。"
    },
    {
      q: "黒色の酸化銅と炭素の粉を混ぜて加熱すると、赤色の固体ができ、同時にある気体が発生した。この反応の説明として正しいものはどれか。",
      choices: ["酸化銅が還元されて銅になり、炭素は酸化されて二酸化炭素になった", "酸化銅が酸化されて銅になり、炭素は還元されて二酸化炭素になった", "酸化銅と炭素が結びついて赤色の新しい物質ができた", "炭素が酸化銅にとけこんだだけで、化学変化は起きていない"],
      answer: 0,
      explain: "炭素が酸化銅から酸素をうばい取るので、酸化銅は還元されて赤色の銅になり、炭素は酸化されて二酸化炭素になる。酸化と還元は同時に起こる。"
    },

    // ---- 水の三態・状態変化 ----
    {
      q: "水が水蒸気に変わると、体積は約何倍になるか。",
      choices: ["約1.1倍", "約17倍", "約100倍", "約1700倍"],
      answer: 3,
      explain: "水が水蒸気になると体積は約1700倍になる。やかんの口から出る白い湯気は水蒸気ではなく、冷えて水のつぶにもどったものである点にも注意。"
    },
    {
      q: "水が氷になるとき、体積と重さはそれぞれどうなるか。",
      choices: ["体積は減り、重さは変わらない", "体積は変わらず、重さだけ減る", "体積も重さもふえる", "体積は約1.1倍にふえ、重さは変わらない"],
      answer: 3,
      explain: "水はこおると体積が約1.1倍にふえる(ほとんどの物質は固体になると体積が減るので水は例外)。ただし重さは変わらないので、氷は水より軽くなって水に浮く。"
    },
    {
      q: "下のグラフは、-20℃の氷を一定の強さで加熱し続けたときの温度変化を表している。区間イでは、容器の中はどのような状態か。",
      data: `<svg viewBox="0 0 300 175" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="氷を加熱したときの温度変化のグラフ">
      <text x="150" y="12" font-size="10" text-anchor="middle">氷を加熱したときの温度変化</text>
      <line x1="45" y1="20" x2="45" y2="150" stroke="#000" stroke-width="1"/>
      <line x1="45" y1="150" x2="290" y2="150" stroke="#000" stroke-width="1"/>
      <text x="165" y="167" font-size="9" text-anchor="middle">加熱した時間</text>
      <text x="16" y="80" font-size="9" text-anchor="middle" transform="rotate(-90 16 80)">温度(℃)</text>
      <line x1="45" y1="110" x2="290" y2="110" stroke="#666" stroke-width="1" stroke-dasharray="3,2"/>
      <text x="41" y="113" font-size="9" text-anchor="end">0</text>
      <line x1="45" y1="45" x2="290" y2="45" stroke="#666" stroke-width="1" stroke-dasharray="3,2"/>
      <text x="41" y="48" font-size="9" text-anchor="end">100</text>
      <polyline points="45,133 85,110 140,110 205,45 275,45" fill="none" stroke="#000" stroke-width="2"/>
      <text x="63" y="128" font-size="11">ア</text>
      <text x="110" y="104" font-size="11">イ</text>
      <text x="168" y="82" font-size="11">ウ</text>
      <text x="238" y="39" font-size="11">エ</text>
    </svg>`,
      choices: ["氷だけがある", "氷と水が混ざっている", "水だけがある", "水と水蒸気が混ざっている"],
      answer: 1,
      explain: "区間イは0℃で温度が変わらない部分で、氷がとけている最中である。加えた熱はすべて氷をとかすことに使われるので、氷と水が混ざったまま温度は上がらない。区間エは100℃で沸とうしている部分。"
    },
    {
      q: "ドライアイスが、液体にならずに固体から直接気体に変化する現象を何というか。",
      choices: ["蒸発", "昇華", "凝縮", "融解"],
      answer: 1,
      explain: "固体が液体にならずに直接気体になる(またはその逆の)変化を昇華という。ドライアイス(固体の二酸化炭素)やナフタレンが代表例。"
    },

    // ---- 実験器具の使い方 ----
    {
      q: "下の図はろ過の装置である。正しいろ過のしかたとして最も適当なものはどれか。",
      data: `<svg viewBox="0 0 260 210" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="ろ過の装置の図">
      <path d="M 70 30 L 150 30 L 110 100 Z" fill="none" stroke="#000" stroke-width="1.5"/>
      <line x1="110" y1="100" x2="110" y2="140" stroke="#000" stroke-width="1.5"/>
      <line x1="104" y1="100" x2="104" y2="140" stroke="#000" stroke-width="1.5"/>
      <path d="M 80 36 L 140 36 L 110 88 Z" fill="none" stroke="#666" stroke-width="1"/>
      <text x="168" y="40" font-size="9">ろうと</text>
      <text x="168" y="60" font-size="9">ろ紙</text>
      <line x1="163" y1="57" x2="132" y2="52" stroke="#666" stroke-width="1"/>
      <rect x="70" y="140" width="80" height="60" fill="none" stroke="#000" stroke-width="1.5"/>
      <text x="185" y="180" font-size="9">ビーカー</text>
      <line x1="182" y1="176" x2="152" y2="172" stroke="#666" stroke-width="1"/>
      <line x1="40" y1="8" x2="96" y2="60" stroke="#000" stroke-width="2"/>
      <text x="24" y="12" font-size="9" text-anchor="middle">ガラス棒</text>
      <line x1="20" y1="30" x2="46" y2="18" stroke="#000" stroke-width="1.5"/>
      <path d="M 14 26 q -8 6 0 12 l 10 -4 z" fill="none" stroke="#000" stroke-width="1.5"/>
      <text x="30" y="52" font-size="9" text-anchor="middle">液</text>
    </svg>`,
      choices: [
        "液はガラス棒を伝わらせて静かに注ぎ、ろうとのあしのとがった方をビーカーの内側のかべにつける",
        "液はろうとの中央に勢いよく注ぎ、ろうとのあしはビーカーにふれないようにする",
        "ろ紙はろうとより大きいものを使い、水でぬらさずに乗せる",
        "早くろ過するために、ガラス棒でろ紙の上をこすりながら注ぐ"
      ],
      answer: 0,
      explain: "ろ過では、液が飛び散らないようにガラス棒を伝わらせて静かに注ぎ、ろうとのあしのとがった方をビーカーの内側のかべにつけて液が伝って流れるようにする。ろ紙は水でぬらしてろうとに密着させ、ガラス棒でこすって破ってはいけない。"
    },
    {
      q: "下の図のように、メスシリンダーで液体の体積をはかる。目もりの正しい読み方はどれか。",
      data: `<svg viewBox="0 0 260 190" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="メスシリンダーの目もりの読み方">
      <rect x="90" y="20" width="52" height="150" fill="none" stroke="#000" stroke-width="1.5"/>
      <path d="M 90 90 q 26 14 52 0" fill="none" stroke="#000" stroke-width="2"/>
      <line x1="90" y1="50" x2="104" y2="50" stroke="#000" stroke-width="1"/>
      <line x1="90" y1="70" x2="104" y2="70" stroke="#000" stroke-width="1"/>
      <line x1="90" y1="90" x2="110" y2="90" stroke="#000" stroke-width="1"/>
      <line x1="90" y1="110" x2="104" y2="110" stroke="#000" stroke-width="1"/>
      <line x1="90" y1="130" x2="104" y2="130" stroke="#000" stroke-width="1"/>
      <circle cx="205" cy="55" r="9" fill="none" stroke="#000" stroke-width="1.3"/>
      <text x="222" y="59" font-size="11">ア</text>
      <circle cx="205" cy="92" r="9" fill="none" stroke="#000" stroke-width="1.3"/>
      <text x="222" y="96" font-size="11">イ</text>
      <circle cx="205" cy="130" r="9" fill="none" stroke="#000" stroke-width="1.3"/>
      <text x="222" y="134" font-size="11">ウ</text>
      <line x1="196" y1="55" x2="150" y2="80" stroke="#666" stroke-width="1"/>
      <line x1="196" y1="92" x2="150" y2="92" stroke="#666" stroke-width="1"/>
      <line x1="196" y1="130" x2="150" y2="104" stroke="#666" stroke-width="1"/>
      <text x="60" y="94" font-size="9" text-anchor="middle">液面</text>
    </svg>`,
      choices: [
        "アの位置から見て、液面のもり上がった上のふちを読む",
        "ウの位置から見て、液面のもり上がった上のふちを読む",
        "イの位置(真横)から見て、液面のへこんだ中央の平らなところを読む",
        "どの位置から見ても同じなので、読みやすい位置で読めばよい"
      ],
      answer: 2,
      explain: "メスシリンダーは水平な台に置き、目を液面と同じ高さ(真横=イ)にして、へこんだ中央の平らなところを最小目もりの10分の1まで目分量で読む。ななめから見ると実際とちがう値を読んでしまう。"
    },
    {
      q: "ガスバーナーに火をつけたところ、炎がオレンジ色でゆらゆらしていた。青色の安定した炎にするにはどうすればよいか。",
      choices: ["ガス調節ねじをしめてガスの量を減らす", "元せんをいったん閉じてからつけ直す", "空気調節ねじを開いて空気の量をふやす", "空気調節ねじをしめて空気の量を減らす"],
      answer: 2,
      explain: "オレンジ色の炎は空気(酸素)が不足しているしるし。ガス調節ねじをおさえたまま空気調節ねじだけを開いて空気をふやすと、青色の安定した炎になる。"
    },
    {
      q: "下の図の装置で気体を発生させて集めるとき、はじめに出てくる気体は集めずに捨てる。その理由として正しいものはどれか。",
      data: `<svg viewBox="0 0 320 190" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="気体の発生装置と水上置換法の図">
      <path d="M 60 60 L 44 130 L 116 130 L 100 60 Z" fill="none" stroke="#000" stroke-width="1.5"/>
      <line x1="44" y1="112" x2="116" y2="112" stroke="#666" stroke-width="1" stroke-dasharray="3,2"/>
      <text x="80" y="126" font-size="8" text-anchor="middle">うすい塩酸</text>
      <circle cx="66" cy="122" r="3" fill="none" stroke="#000" stroke-width="1"/>
      <circle cx="76" cy="124" r="3" fill="none" stroke="#000" stroke-width="1"/>
      <circle cx="88" cy="122" r="3" fill="none" stroke="#000" stroke-width="1"/>
      <line x1="60" y1="60" x2="100" y2="60" stroke="#000" stroke-width="2"/>
      <line x1="72" y1="60" x2="72" y2="20" stroke="#000" stroke-width="1.5"/>
      <path d="M 64 20 L 80 20 L 76 12 L 68 12 Z" fill="none" stroke="#000" stroke-width="1.5"/>
      <text x="40" y="20" font-size="8" text-anchor="middle">ろうと管</text>
      <path d="M 94 60 L 94 44 L 190 44 L 190 118 L 214 118" fill="none" stroke="#000" stroke-width="1.5"/>
      <rect x="180" y="130" width="120" height="52" fill="none" stroke="#000" stroke-width="1.5"/>
      <line x1="180" y1="142" x2="300" y2="142" stroke="#666" stroke-width="1" stroke-dasharray="3,2"/>
      <rect x="226" y="70" width="30" height="98" fill="none" stroke="#000" stroke-width="1.5"/>
      <line x1="226" y1="70" x2="256" y2="70" stroke="#000" stroke-width="3"/>
      <path d="M 214 118 L 232 118 L 232 108" fill="none" stroke="#000" stroke-width="1.5"/>
      <text x="290" y="176" font-size="8" text-anchor="end">水そう</text>
    </svg>`,
      choices: [
        "はじめに出てくる気体は温度が高くて危険だから",
        "はじめに出てくる気体には、装置の中にもともとあった空気が多く混ざっているから",
        "はじめに出てくる気体は水にとけてしまい集められないから",
        "はじめに出てくる気体は重すぎて試験管に入らないから"
      ],
      answer: 1,
      explain: "反応を始めた直後に出てくるのは、フラスコやガラス管の中にもともとあった空気が押し出されたものが大部分である。純すいな気体を集めるため、はじめの分は集めずに捨てる。"
    },

    // ---- 中和・金属 ----
    {
      q: "うすい塩酸とうすい水酸化ナトリウム水溶液を過不足なく中和させたとき、できる物質の組み合わせとして正しいものはどれか。",
      choices: ["水素と水", "食塩(塩化ナトリウム)と水", "二酸化炭素と水", "水酸化ナトリウムと塩化水素"],
      answer: 1,
      explain: "塩酸+水酸化ナトリウム水溶液の中和では、食塩(塩化ナトリウム)と水ができる。この液を蒸発させると白い食塩の結晶が残る。"
    },
    {
      q: "うすい塩酸にも水酸化ナトリウム水溶液にも入れると、あわ(水素)を出しながらとける金属はどれか。",
      choices: ["銅", "金", "アルミニウム", "銀"],
      answer: 2,
      explain: "アルミニウムは酸(塩酸)にも強いアルカリ(水酸化ナトリウム水溶液)にも水素を発生しながらとける。どちらにもとけるのはアルミニウムと亜鉛が代表的。"
    },
    {
      q: "銅の板をうすい塩酸に入れた。このときの結果として正しいものはどれか。",
      choices: ["あわを出しながらとけて、水素が発生する", "白いにごりが生じる", "はげしく燃えて黒くなる", "見た目にはほとんど変化がなく、気体も発生しない"],
      answer: 3,
      explain: "銅は塩酸には反応しないため、入れてもほとんど変化がなく気体も出ない。塩酸に入れて水素を発生するのは鉄・亜鉛・アルミニウムなど。"
    },

    // ---- 計算問題(濃度) ----
    {
      q: "濃度8%の食塩水250gには、食塩が何gとけているか。",
      choices: ["18g", "20g", "25g", "31.25g"],
      answer: 1,
      explain: "とけている食塩の重さ=食塩水全体の重さ×濃度。250g×0.08=20g。"
    },
    {
      q: "食塩30gを水にとかして、濃度15%の食塩水をつくりたい。必要な水は何gか。",
      choices: ["170g", "200g", "185g", "450g"],
      answer: 0,
      explain: "食塩水全体の重さは30÷0.15=200g。水の重さは全体から食塩を引いて200-30=170g。200gは「全体の重さ」であって水の重さではない点に注意。"
    },
    {
      q: "濃度8%の食塩水200gから水を100g蒸発させた。残った食塩水の濃度は何%か。",
      choices: ["10%", "12%", "20%", "16%"],
      answer: 3,
      explain: "とけている食塩は200×0.08=16gで、水を蒸発させても食塩の量は変わらない。残った食塩水は200-100=100gなので、濃度は16÷100×100=16%。"
    },
    {
      q: "濃度10%の食塩水100gと、濃度5%の食塩水100gを混ぜ合わせた。できた食塩水の濃度は何%か。",
      choices: ["15%", "7.5%", "5%", "12.5%"],
      answer: 1,
      explain: "食塩は10+5=15g、食塩水全体は100+100=200g。濃度は15÷200×100=7.5%。濃度どうしを足して15%としないよう注意。"
    },
    {
      q: "濃度20%の食塩水100gに水を100g加えた。できた食塩水の濃度は何%か。",
      choices: ["20%", "15%", "5%", "10%"],
      answer: 3,
      explain: "食塩は100×0.2=20gで、水を加えても食塩の量は変わらない。全体は100+100=200gになるので、20÷200×100=10%。"
    },

    // ---- 計算問題(溶解度・再結晶) ----
    {
      q: "40℃の水100gには食塩が36gまでとける。40℃の水150gには、食塩は何gまでとけるか。",
      choices: ["36g", "48g", "54g", "72g"],
      answer: 2,
      explain: "とける量は水の量に比例する。水150gは100gの1.5倍なので、36g×1.5=54g。"
    },
    {
      q: "20℃の水100gには硝酸カリウムが32gまでとける。20℃の硝酸カリウムの飽和水溶液の濃度は、約何%か。",
      choices: ["約32%", "約24%", "約68%", "約76%"],
      answer: 1,
      explain: "飽和水溶液は水100g+硝酸カリウム32g=132gである。濃度は32÷132×100=24.2…で約24%。「水に対する割合」の32%と混同しないこと。"
    },
    {
      q: "下のグラフは、水100gにとける硝酸カリウムと食塩の量を温度ごとに表した溶解度曲線である。60℃の硝酸カリウムの飽和水溶液210gを20℃まで冷やすと、結晶は約何g出てくるか。",
      data: `<svg viewBox="0 0 310 175" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="硝酸カリウムと食塩の溶解度曲線">
      <text x="155" y="12" font-size="10" text-anchor="middle">水100gにとける量(溶解度)</text>
      <line x1="40" y1="20" x2="40" y2="130" stroke="#000" stroke-width="1"/>
      <line x1="40" y1="130" x2="290" y2="130" stroke="#000" stroke-width="1"/>
      <text x="165" y="168" font-size="9" text-anchor="middle">温度(℃)</text>
      <text x="12" y="75" font-size="9" text-anchor="middle" transform="rotate(-90 12 75)">とける量(g)</text>
      <text x="36" y="133" font-size="8" text-anchor="end">0</text>
      <line x1="40" y1="93" x2="290" y2="93" stroke="#666" stroke-width="1" stroke-dasharray="2,2"/>
      <text x="36" y="96" font-size="8" text-anchor="end">40</text>
      <line x1="40" y1="57" x2="290" y2="57" stroke="#666" stroke-width="1" stroke-dasharray="2,2"/>
      <text x="36" y="60" font-size="8" text-anchor="end">80</text>
      <text x="36" y="23" font-size="8" text-anchor="end">120</text>
      <text x="40" y="144" font-size="8" text-anchor="middle">0</text>
      <text x="120" y="144" font-size="8" text-anchor="middle">20</text>
      <text x="200" y="144" font-size="8" text-anchor="middle">40</text>
      <text x="280" y="144" font-size="8" text-anchor="middle">60</text>
      <polyline points="40,112 120,101 200,71 280,29" fill="none" stroke="#000" stroke-width="2"/>
      <circle cx="120" cy="101" r="3" fill="#000"/>
      <circle cx="280" cy="29" r="3" fill="#000"/>
      <text x="238" y="30" font-size="8" text-anchor="end">硝酸カリウム</text>
      <text x="128" y="116" font-size="8">20℃で32g</text>
      <text x="222" y="45" font-size="8">60℃で110g</text>
      <polyline points="40,97 120,97 200,96 280,96" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="6,3"/>
      <text x="200" y="110" font-size="8" text-anchor="middle">食塩(20℃で36g・60℃で37g)</text>
    </svg>`,
      choices: ["78g", "68g", "110g", "32g"],
      answer: 0,
      explain: "60℃の飽和水溶液210gは、水100g+硝酸カリウム110g。20℃では32gしかとけていられないので、110-32=78gが結晶として出てくる。"
    },
    {
      q: "60℃の水200gに硝酸カリウムをとけるだけとかし、20℃まで冷やした。出てくる結晶は何gか。ただし、硝酸カリウムは水100gに60℃で110g、20℃で32gまでとけるものとする。",
      choices: ["78g", "128g", "156g", "220g"],
      answer: 2,
      explain: "水200gは100gの2倍。60℃では110×2=220g、20℃では32×2=64gまでとける。出てくる結晶は220-64=156g。(78g×2=156gと考えてもよい)"
    },
    {
      q: "20℃の水100gには食塩が36gまでとける。20℃の食塩の飽和水溶液136gから、温度を20℃に保ったまま水を50g蒸発させた。出てくる食塩の結晶は何gか。",
      choices: ["9g", "18g", "36g", "50g"],
      answer: 1,
      explain: "飽和水溶液136gは水100g+食塩36g。水を50g蒸発させると水は50gになり、20℃の水50gにとけられる食塩は36×(50/100)=18g。よって36-18=18gが結晶として出てくる。"
    },

    // ---- 計算問題(中和) ----
    {
      q: "下の表は、あるうすい塩酸と、ある水酸化ナトリウム水溶液が過不足なく中和する体積の関係を表している。この塩酸50mLを過不足なく中和するには、水酸化ナトリウム水溶液は何mL必要か。",
      data: `<svg viewBox="0 0 320 110" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="塩酸と水酸化ナトリウム水溶液が過不足なく中和する体積の表">
      <text x="160" y="14" font-size="10" text-anchor="middle">過不足なく中和する体積</text>
      <rect x="20" y="24" width="280" height="70" fill="none" stroke="#000" stroke-width="1.2"/>
      <line x1="20" y1="59" x2="300" y2="59" stroke="#000" stroke-width="1.2"/>
      <line x1="130" y1="24" x2="130" y2="94" stroke="#000" stroke-width="1.2"/>
      <line x1="187" y1="24" x2="187" y2="94" stroke="#666" stroke-width="1"/>
      <line x1="244" y1="24" x2="244" y2="94" stroke="#666" stroke-width="1"/>
      <text x="75" y="46" font-size="10" text-anchor="middle">うすい塩酸</text>
      <text x="75" y="81" font-size="9" text-anchor="middle">水酸化ナトリウム</text>
      <text x="75" y="91" font-size="9" text-anchor="middle">水溶液</text>
      <text x="158" y="46" font-size="10" text-anchor="middle">20mL</text>
      <text x="215" y="46" font-size="10" text-anchor="middle">40mL</text>
      <text x="272" y="46" font-size="10" text-anchor="middle">60mL</text>
      <text x="158" y="81" font-size="10" text-anchor="middle">25mL</text>
      <text x="215" y="81" font-size="10" text-anchor="middle">50mL</text>
      <text x="272" y="81" font-size="10" text-anchor="middle">75mL</text>
    </svg>`,
      choices: ["40mL", "55mL", "62.5mL", "75mL"],
      answer: 2,
      explain: "塩酸:水酸化ナトリウム水溶液=20:25=4:5で中和する。塩酸50mLに必要な量は50×(25/20)=62.5mL。比を逆にすると50×(20/25)=40mLとなってしまうので注意。"
    },
    {
      q: "あるうすい塩酸60mLと、ある水酸化ナトリウム水溶液48mLが過不足なく中和する。この塩酸100mLに、同じ水酸化ナトリウム水溶液80mLを加えた液にBTB溶液を加えると、何色になるか。",
      choices: ["黄色", "青色", "赤色", "緑色"],
      answer: 3,
      explain: "塩酸:水酸化ナトリウム水溶液=60:48=5:4。塩酸100mLを中和するのに必要な量は100×(4/5)=80mLで、加えた量とちょうど同じ。過不足なく中和して中性になるので、BTB溶液は緑色になる。"
    },
    {
      q: "あるうすい塩酸30mLと水酸化ナトリウム水溶液20mLを過不足なく中和させ、液を蒸発させると食塩が3g残った。同じ塩酸45mLを過不足なく中和させて蒸発させると、食塩は何g残るか。",
      choices: ["2g", "3g", "4.5g", "6g"],
      answer: 2,
      explain: "できる食塩の量は反応した塩酸の量に比例する。塩酸45mLは30mLの1.5倍なので、3g×1.5=4.5g。"
    },

    // ---- 計算問題(気体発生・金属の酸化) ----
    {
      q: "下のグラフは、あるうすい塩酸50mLに石灰石を少しずつ加えたときの、石灰石の重さと発生した二酸化炭素の体積の関係を表している。この塩酸50mLに石灰石3gを加えると、二酸化炭素は何mL発生するか。",
      data: `<svg viewBox="0 0 310 165" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="石灰石の重さと発生した二酸化炭素の体積のグラフ">
      <text x="155" y="12" font-size="10" text-anchor="middle">塩酸50mLに加えた石灰石と発生した二酸化炭素</text>
      <line x1="40" y1="20" x2="40" y2="130" stroke="#000" stroke-width="1"/>
      <line x1="40" y1="130" x2="290" y2="130" stroke="#000" stroke-width="1"/>
      <text x="165" y="158" font-size="9" text-anchor="middle">加えた石灰石の重さ(g)</text>
      <text x="12" y="72" font-size="9" text-anchor="middle" transform="rotate(-90 12 72)">気体(mL)</text>
      <text x="36" y="133" font-size="8" text-anchor="end">0</text>
      <line x1="40" y1="88" x2="290" y2="88" stroke="#666" stroke-width="1" stroke-dasharray="2,2"/>
      <text x="36" y="91" font-size="8" text-anchor="end">240</text>
      <line x1="40" y1="46" x2="290" y2="46" stroke="#666" stroke-width="1" stroke-dasharray="2,2"/>
      <text x="36" y="49" font-size="8" text-anchor="end">480</text>
      <text x="40" y="144" font-size="8" text-anchor="middle">0</text>
      <text x="100" y="144" font-size="8" text-anchor="middle">1</text>
      <text x="160" y="144" font-size="8" text-anchor="middle">2</text>
      <text x="220" y="144" font-size="8" text-anchor="middle">3</text>
      <text x="280" y="144" font-size="8" text-anchor="middle">4</text>
      <polyline points="40,130 100,88 160,46 280,46" fill="none" stroke="#000" stroke-width="2"/>
      <circle cx="100" cy="88" r="3" fill="#000"/>
      <circle cx="160" cy="46" r="3" fill="#000"/>
      <line x1="160" y1="46" x2="160" y2="130" stroke="#666" stroke-width="1" stroke-dasharray="2,2"/>
    </svg>`,
      choices: ["720mL", "480mL", "240mL", "600mL"],
      answer: 1,
      explain: "グラフは石灰石2gのところで折れ曲がり、それ以上加えても気体はふえていない。これは塩酸50mLが石灰石2gでちょうど使い切られたことを表す。石灰石3gを加えても反応するのは2g分までなので、発生する気体は480mLのままである。"
    },
    {
      q: "マグネシウム3gを空気中で完全に燃焼させると、酸化マグネシウムが5gできる。マグネシウム12gを完全に燃焼させたとき、マグネシウムと結びついた酸素は何gか。",
      choices: ["8g", "12g", "20g", "5g"],
      answer: 0,
      explain: "マグネシウム3gに結びつく酸素は5-3=2g。マグネシウム12gは3gの4倍なので、結びつく酸素は2×4=8g。(できる酸化マグネシウムは5×4=20g)"
    },
    {
      q: "亜鉛0.5gに十分な量のうすい塩酸を加えると、水素が200mL発生した。同じ塩酸を十分に用意して亜鉛2gを加えると、水素は何mL発生するか。",
      choices: ["400mL", "600mL", "800mL", "1000mL"],
      answer: 2,
      explain: "塩酸が十分にあるので、発生する水素の体積は亜鉛の重さに比例する。亜鉛2gは0.5gの4倍なので、200×4=800mL。"
    }
  ],

  // ============================================================
  // 物理 40問(うち計算19問・図つき12問)
  // ============================================================
  physics: [

    // ---- てこ・道具・重心 ----
    {
      q: "「支点が力点と作用点の間にある」てこを利用した道具はどれか。",
      choices: ["ピンセット", "せんぬき", "はさみ", "ホチキス"],
      answer: 2,
      explain: "はさみは支点(ねじの部分)が、力を加える力点(持ち手)と切る作用点(刃先)の間にある。せんぬきは作用点が間にあり、ピンセットは力点が間にあるてこである。"
    },
    {
      q: "太さが一様(どこも同じ)な棒の重心は、どこにあると考えればよいか。",
      choices: ["棒のちょうど中央", "棒の左端", "棒の右端", "棒の重さによって場所が変わる"],
      answer: 0,
      explain: "太さが一様な棒では、重さが棒全体に均等にかかっているので、重心は棒のちょうど中央にあると考えて計算する。てこの問題では「棒の重さが中央に1点でかかっている」とみなす。"
    },
    {
      q: "てこや滑車などの道具を使ったときの「仕事の原理」の説明として正しいものはどれか。",
      choices: [
        "道具を使うと、加える力も動かす距離も同時に小さくできる",
        "道具を使っても、加える力も動かす距離もまったく変わらない",
        "道具を使うと必ず仕事の量が半分になる",
        "道具を使って加える力を小さくすると、そのぶん動かす距離が長くなり、仕事の量(力×距離)は変わらない"
      ],
      answer: 3,
      explain: "これを仕事の原理という。動滑車で力が半分になるとひもを引く距離は2倍になり、力×距離で求める仕事の量は道具を使わないときと変わらない。"
    },

    // ---- 電気・磁石 ----
    {
      q: "回路に流れる電流の大きさをはかるとき、電流計はどのようにつなぐか。",
      choices: ["はかりたい部分に直列につなぐ", "はかりたい部分に並列につなぐ", "電池だけに直接つなぐ", "回路から外して使う"],
      answer: 0,
      explain: "電流計は回路を流れる電流をそのままはかるので、はかりたい部分に直列につなぐ。電圧計は並列につなぐ点とセットで覚える。"
    },
    {
      q: "豆電球にかかる電圧をはかるとき、電圧計はどのようにつなぐか。",
      choices: ["豆電球に並列につなぐ", "豆電球に直列につなぐ", "電池に直列につなぐ", "回路のどこにつないでも同じ"],
      answer: 0,
      explain: "電圧計は2点間の電圧の差をはかる器具なので、はかりたい部分(豆電球など)に並列につなぐ。電流計を並列につなぐと大きな電流が流れて故障するので注意。"
    },
    {
      q: "電磁石の力を強くする方法として、正しくないものはどれか。",
      choices: ["コイルの巻き数をふやす", "流す電流を大きくする", "コイルの中に鉄しんを入れる", "コイルの導線をより細く長いものに変える"],
      answer: 3,
      explain: "電磁石を強くするには、巻き数をふやす・電流を大きくする・鉄しんを入れるの3つが基本。導線を細く長くすると抵抗が大きくなって電流が小さくなり、かえって弱くなる。"
    },
    {
      q: "電磁石のN極とS極を入れかえるには、どうすればよいか。",
      choices: ["電流の向きを逆にする", "電流を大きくする", "コイルの巻き数を半分にする", "鉄しんを太いものに変える"],
      answer: 0,
      explain: "電磁石の極は電流の向きで決まる。かん電池の+極と-極を入れかえて電流の向きを逆にすると、N極とS極が入れかわる。"
    },
    {
      q: "方位磁針のN極がいつも北を指すのはなぜか。",
      choices: ["北の方が気温が低いから", "地球全体が大きな磁石になっていて、北極付近がS極になっているから", "地球全体が大きな磁石になっていて、北極付近がN極になっているから", "太陽が東からのぼるから"],
      answer: 1,
      explain: "地球は大きな磁石とみなすことができ、北極付近がS極、南極付近がN極にあたる。異なる極どうしは引き合うので、方位磁針のN極が北を向く。"
    },
    {
      q: "かん電池2個を並列につないで豆電球1個を光らせた。かん電池1個のときと比べてどうなるか。",
      choices: ["明るさはほとんど変わらないが、電池は長持ちする", "明るさは約2倍になり、電池も長持ちする", "明るさは約半分になる", "明るさは約2倍になるが、電池は早く切れる"],
      answer: 0,
      explain: "並列つなぎでは回路にかかる電圧が電池1個分のままなので、明るさはほとんど変わらない。しかし電流を2個の電池で分担するため、電池は長持ちする。直列につなぐと明るくなるが電池は早く切れる。"
    },
    {
      q: "同じ豆電球2個を直列につないだ回路は、豆電球1個だけの回路と比べて、1個あたりの明るさはどうなるか。",
      choices: ["明るくなる", "変わらない", "点灯しない", "暗くなる"],
      answer: 3,
      explain: "直列に豆電球をふやすと回路全体の抵抗が大きくなり、流れる電流が小さくなるので1個あたりは暗くなる。並列にふやした場合は、それぞれの明るさは変わらない。"
    },

    // ---- 光・音 ----
    {
      q: "光が鏡に当たってはね返るとき、成り立つ関係はどれか。",
      choices: ["入射角と反射角は等しい", "入射角より反射角のほうが大きい", "入射角より反射角のほうが小さい", "光の色によって反射角が変わる"],
      answer: 0,
      explain: "光の反射の法則により、入射角と反射角は必ず等しくなる。角度は鏡の面ではなく、鏡に垂直な線(法線)から測ることに注意。"
    },
    {
      q: "水の中にあるものが、実際よりも浅い位置に浮き上がって見えるのは、光のどのような性質によるか。",
      choices: ["反射", "分散", "直進", "屈折"],
      answer: 3,
      explain: "光が水中から空気中へ出るときに境界面で折れ曲がる(屈折する)ため、水中のものは実際より浅い位置にあるように見える。水そうの中のはしが折れて見えるのも同じ理由。"
    },
    {
      q: "凸レンズの焦点よりも内側(レンズに近い側)に物体を置いて、レンズを通して物体を見た。見える像について正しいものはどれか。",
      choices: [
        "物体と同じ向きで、物体より大きい虚像が見える",
        "物体と上下逆さまで、物体より大きい実像がスクリーンにうつる",
        "物体と同じ向きで、物体より小さい虚像が見える",
        "像はまったく見えない"
      ],
      answer: 0,
      explain: "焦点の内側に物体を置くと光は集まらず、レンズをのぞくと物体と同じ向き(正立)で拡大された虚像が見える。虫めがねのはたらきがこれである。スクリーンにはうつせない。"
    },
    {
      q: "凸レンズでスクリーンに実像をうつしているとき、レンズの上半分を黒い紙でおおうと、像はどうなるか。",
      choices: ["像の上半分が消える", "像の下半分が消える", "像の形は変わらないが、暗くなる", "像がぼやけて形が分からなくなる"],
      answer: 2,
      explain: "像の1点にはレンズ全体を通ったたくさんの光が集まっている。半分をおおうと集まる光の量が減るだけなので、像の形はそのままで全体が暗くなる。"
    },
    {
      q: "モノコードの弦をはじいたときに、より高い音を出す方法として正しいものはどれか。",
      choices: ["弦を長くする", "弦を太いものに変える", "弦を強く張る", "弦を弱くはじく"],
      answer: 2,
      explain: "弦を短くする・細くする・強く張る、の3つで振動数が多くなり音は高くなる。はじく強さは音の大きさを変えるだけで、高さは変わらない。"
    },
    {
      q: "音の伝わり方について正しいものはどれか。",
      choices: ["音は真空中でも伝わる", "音は空気などの物質がないと伝わらない", "音は光と同じ速さで伝わる", "音は固体の中では伝わらない"],
      answer: 1,
      explain: "音は空気などの物質がふるえることで伝わる波なので、物質のない真空中では伝わらない。光は真空中でも伝わる点がちがう。"
    },
    {
      q: "音の伝わる速さを、空気中・水中・鉄の中で比べたとき、最も速いのはどれか。",
      choices: ["空気中", "水中", "どれも同じ", "鉄の中"],
      answer: 3,
      explain: "音は物質のつぶがぎっしりつまっているほど速く伝わるので、気体<液体<固体の順に速くなる。鉄の中では空気中の10倍以上の速さで伝わる。"
    },

    // ---- ふりこ・運動 ----
    {
      q: "下の図のようなふりこがある。1往復にかかる時間(周期)を決めるものはどれか。",
      data: `<svg viewBox="0 0 260 180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="ふりこの図">
      <line x1="40" y1="20" x2="220" y2="20" stroke="#000" stroke-width="2"/>
      <line x1="130" y1="20" x2="130" y2="130" stroke="#000" stroke-width="1.3"/>
      <circle cx="130" cy="140" r="11" fill="none" stroke="#000" stroke-width="2"/>
      <line x1="130" y1="20" x2="72" y2="118" stroke="#666" stroke-width="1" stroke-dasharray="4,3"/>
      <circle cx="70" cy="121" r="11" fill="none" stroke="#666" stroke-width="1.3"/>
      <line x1="130" y1="20" x2="188" y2="118" stroke="#666" stroke-width="1" stroke-dasharray="4,3"/>
      <circle cx="190" cy="121" r="11" fill="none" stroke="#666" stroke-width="1.3"/>
      <path d="M 100 42 a 40 40 0 0 1 60 0" fill="none" stroke="#666" stroke-width="1"/>
      <text x="130" y="56" font-size="9" text-anchor="middle">ふれはば</text>
      <line x1="152" y1="20" x2="152" y2="140" stroke="#666" stroke-width="1"/>
      <text x="168" y="84" font-size="9">ふりこの長さ</text>
      <text x="130" y="170" font-size="9" text-anchor="middle">おもりの重さ</text>
    </svg>`,
      choices: ["おもりの重さ", "ふれはば(振れる角度)", "ふりこの長さ", "おもりの重さとふれはばの両方"],
      answer: 2,
      explain: "ふりこが1往復する時間は「ふりこの長さ」だけで決まり、おもりの重さやふれはばを変えても変わらない(ふりこの等時性)。ふりこの長さは支点からおもりの中心までの長さである。"
    },
    {
      q: "ふりこが往復するとき、おもりの動く速さが最も速くなるのはどこか。",
      choices: ["ふれはばのいちばん端", "いちばん低い位置(最下点)", "端と最下点のちょうど中間", "どの位置でも速さは同じ"],
      answer: 1,
      explain: "おもりは高い位置から下るにつれて速くなり、いちばん低い位置(最下点)で最も速くなる。ふれはばの端では一瞬静止して向きを変える。"
    },
    {
      q: "なめらかな斜面をボールが転がり落ちるとき、ボールの速さはどうなるか。",
      choices: ["一定の速さのまま変わらない", "一定の割合でだんだん速くなる", "だんだんおそくなる", "はじめだけ速く、あとは一定になる"],
      answer: 1,
      explain: "斜面上のボールには、斜面に沿って下向きの一定の力がはたらき続けるので、速さは一定の割合で増え続ける。斜面の角度を大きくするほど速さのふえ方も大きくなる。"
    },
    {
      q: "金属の棒の一方のはしを熱すると、やがて反対のはしまで熱くなる。このような熱の伝わり方を何というか。",
      choices: ["対流", "放射(ふく射)", "伝導", "蒸発"],
      answer: 2,
      explain: "物体の中を熱が順に伝わっていく伝わり方を伝導という。水や空気が動いて熱を運ぶのが対流、太陽の熱のように離れていても直接伝わるのが放射である。"
    },

    // ---- 計算問題(てこ・輪軸・滑車) ----
    {
      q: "下の図のように、重さの無視できる棒の支点から左に30cmのところに20gのおもり、左に10cmのところに60gのおもりをつるした。支点から右に20cmのところに何gのおもりをつるすとつり合うか。",
      data: `<svg viewBox="0 0 300 165" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="複数のおもりをつるしたてこの図">
      <line x1="30" y1="70" x2="275" y2="70" stroke="#000" stroke-width="4"/>
      <polygon points="150,70 138,96 162,96" fill="#000"/>
      <text x="150" y="112" font-size="9" text-anchor="middle">支点</text>
      <line x1="60" y1="70" x2="60" y2="100" stroke="#000" stroke-width="1.5"/>
      <circle cx="60" cy="109" r="10" fill="none" stroke="#000" stroke-width="2"/>
      <text x="60" y="132" font-size="10" text-anchor="middle">20g</text>
      <line x1="120" y1="70" x2="120" y2="100" stroke="#000" stroke-width="1.5"/>
      <circle cx="120" cy="109" r="10" fill="none" stroke="#000" stroke-width="2"/>
      <text x="120" y="132" font-size="10" text-anchor="middle">60g</text>
      <line x1="210" y1="70" x2="210" y2="100" stroke="#000" stroke-width="1.5"/>
      <circle cx="210" cy="109" r="10" fill="none" stroke="#000" stroke-width="2"/>
      <text x="210" y="132" font-size="10" text-anchor="middle">?g</text>
      <line x1="60" y1="52" x2="150" y2="52" stroke="#666" stroke-width="1"/>
      <text x="105" y="47" font-size="10" text-anchor="middle">30cm</text>
      <line x1="120" y1="34" x2="150" y2="34" stroke="#666" stroke-width="1"/>
      <text x="128" y="29" font-size="10" text-anchor="middle">10cm</text>
      <line x1="150" y1="52" x2="210" y2="52" stroke="#666" stroke-width="1"/>
      <text x="180" y="47" font-size="10" text-anchor="middle">20cm</text>
    </svg>`,
      choices: ["40g", "50g", "60g", "80g"],
      answer: 2,
      explain: "左まわりのモーメントは20g×30cm+60g×10cm=600+600=1200。右も1200になればよいので、1200÷20cm=60g。"
    },
    {
      q: "下の図のように、長さ60cm・重さ120gの太さが一様な棒がある。左端Aを支点として棒を水平に保つには、右端Bを上向きに何gの力で支えればよいか。",
      data: `<svg viewBox="0 0 300 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="太さが一様な棒のつり合いの図">
      <line x1="40" y1="80" x2="280" y2="80" stroke="#000" stroke-width="5"/>
      <text x="34" y="74" font-size="11" text-anchor="end">A</text>
      <text x="288" y="74" font-size="11" text-anchor="start">B</text>
      <polygon points="40,84 30,108 50,108" fill="#000"/>
      <text x="40" y="124" font-size="9" text-anchor="middle">支点</text>
      <line x1="160" y1="84" x2="160" y2="120" stroke="#000" stroke-width="1.5"/>
      <polygon points="160,130 153,118 167,118" fill="#000"/>
      <text x="160" y="145" font-size="10" text-anchor="middle">120g(重心)</text>
      <line x1="280" y1="76" x2="280" y2="34" stroke="#000" stroke-width="1.5"/>
      <polygon points="280,26 273,38 287,38" fill="#000"/>
      <text x="280" y="18" font-size="10" text-anchor="middle">?g</text>
      <line x1="40" y1="62" x2="160" y2="62" stroke="#666" stroke-width="1"/>
      <text x="100" y="57" font-size="9" text-anchor="middle">30cm</text>
      <line x1="160" y1="62" x2="280" y2="62" stroke="#666" stroke-width="1"/>
      <text x="220" y="57" font-size="9" text-anchor="middle">30cm</text>
    </svg>`,
      choices: ["60g", "30g", "120g", "240g"],
      answer: 0,
      explain: "太さが一様な棒なので、重さ120gは中央(Aから30cm)に1点でかかっていると考える。Aを支点としたモーメントのつり合いより、□×60cm=120g×30cm。□=3600÷60=60g。"
    },
    {
      q: "重さの無視できる棒を使ったてこで、支点から左に20cmのところに30g、右に15cmのところに40gのおもりをつるしたところ、水平につり合った。このとき、支点が棒を支えている力は何gか。",
      choices: ["10g", "35g", "70g", "600g"],
      answer: 2,
      explain: "まずつり合いを確認すると30×20=600、40×15=600で確かにつり合っている。支点は棒にかかる下向きの重さをすべて支えるので、30+40=70g。"
    },
    {
      q: "下の図のように、半径15cmの輪と半径5cmの軸を組み合わせた輪軸がある。輪にかけたひもを20gの力で引いたとき、軸につるすことができるおもりは何gか。",
      data: `<svg viewBox="0 0 300 175" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="輪軸の図(輪の半径15cm・軸の半径5cm)">
      <circle cx="150" cy="70" r="55" fill="none" stroke="#000" stroke-width="3"/>
      <circle cx="150" cy="70" r="18" fill="none" stroke="#000" stroke-width="3"/>
      <circle cx="150" cy="70" r="2.5" fill="#000"/>
      <line x1="95" y1="70" x2="95" y2="130" stroke="#000" stroke-width="1.5"/>
      <polygon points="95,138 88,126 102,126" fill="#000"/>
      <text x="95" y="155" font-size="11" text-anchor="middle">20g</text>
      <line x1="168" y1="70" x2="168" y2="122" stroke="#000" stroke-width="1.5"/>
      <rect x="154" y="122" width="28" height="22" fill="none" stroke="#000" stroke-width="1.5"/>
      <text x="168" y="160" font-size="11" text-anchor="middle">?g</text>
      <line x1="150" y1="70" x2="150" y2="15" stroke="#666" stroke-width="1"/>
      <text x="150" y="10" font-size="9" text-anchor="middle">輪:半径15cm</text>
      <line x1="150" y1="70" x2="205" y2="52" stroke="#666" stroke-width="1"/>
      <text x="248" y="50" font-size="9" text-anchor="middle">軸:半径5cm</text>
    </svg>`,
      choices: ["6g", "20g", "45g", "60g"],
      answer: 3,
      explain: "輪軸は「輪の力×輪の半径=軸の力×軸の半径」でつり合う。20g×15cm=300なので、軸につるせるおもりは300÷5cm=60g。半径の大きい輪側で引くほど小さい力ですむ。"
    },
    {
      q: "半径15cmの輪と半径5cmの軸を組み合わせた輪軸で、輪にかけたひもを30cm引き下げた。このとき、軸につけたひもは何cm動くか。",
      choices: ["10cm", "30cm", "45cm", "90cm"],
      answer: 0,
      explain: "輪と軸は同じ角度だけ回るので、動く距離は半径の比と同じになる。30cm×(5/15)=10cm。力は輪の側が小さくてすむ代わりに、動かす距離は長くなる(仕事の原理)。"
    },
    {
      q: "動滑車1個を使って、200gのおもりを50cm持ち上げた。ひもを引く力と、ひもを引く長さの組み合わせとして正しいものはどれか。ただし滑車とひもの重さは考えないものとする。",
      choices: ["100gで25cm", "400gで25cm", "200gで50cm", "100gで100cm"],
      answer: 3,
      explain: "動滑車1個では、おもりを2本のひもで支えるので引く力は半分の100gですむ。そのかわり引く長さは2倍の100cmになる。仕事の量は100g×100cm=200g×50cmで変わらない。"
    },
    {
      q: "下の図のように、動滑車2個と定滑車1個を組み合わせて800gのおもりをつり下げた。ひもを引く力は何gか。ただし滑車とひもの重さは考えないものとする。",
      data: `<svg viewBox="0 0 260 215" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="動滑車2個と定滑車を組み合わせた装置の図">
      <line x1="20" y1="18" x2="240" y2="18" stroke="#000" stroke-width="3"/>
      <line x1="24" y1="18" x2="16" y2="10" stroke="#666" stroke-width="1"/>
      <line x1="48" y1="18" x2="40" y2="10" stroke="#666" stroke-width="1"/>
      <line x1="72" y1="18" x2="64" y2="10" stroke="#666" stroke-width="1"/>
      <line x1="96" y1="18" x2="88" y2="10" stroke="#666" stroke-width="1"/>
      <line x1="120" y1="18" x2="112" y2="10" stroke="#666" stroke-width="1"/>
      <line x1="144" y1="18" x2="136" y2="10" stroke="#666" stroke-width="1"/>
      <line x1="168" y1="18" x2="160" y2="10" stroke="#666" stroke-width="1"/>
      <line x1="192" y1="18" x2="184" y2="10" stroke="#666" stroke-width="1"/>
      <line x1="216" y1="18" x2="208" y2="10" stroke="#666" stroke-width="1"/>
      <circle cx="80" cy="150" r="16" fill="none" stroke="#000" stroke-width="2"/>
      <circle cx="80" cy="150" r="2.5" fill="#000"/>
      <text x="46" y="154" font-size="9" text-anchor="end">動滑車1</text>
      <circle cx="96" cy="80" r="16" fill="none" stroke="#000" stroke-width="2"/>
      <circle cx="96" cy="80" r="2.5" fill="#000"/>
      <text x="62" y="72" font-size="9" text-anchor="end">動滑車2</text>
      <circle cx="150" cy="34" r="15" fill="none" stroke="#000" stroke-width="2"/>
      <circle cx="150" cy="34" r="2.5" fill="#000"/>
      <line x1="150" y1="19" x2="150" y2="24" stroke="#000" stroke-width="1.5"/>
      <text x="188" y="34" font-size="9" text-anchor="start">定滑車</text>
      <path d="M 64 18 L 64 150" fill="none" stroke="#000" stroke-width="1.3"/>
      <path d="M 64 150 a 16 16 0 0 0 32 0" fill="none" stroke="#000" stroke-width="1.3"/>
      <path d="M 96 150 L 96 96" fill="none" stroke="#000" stroke-width="1.3"/>
      <path d="M 80 18 L 80 80" fill="none" stroke="#000" stroke-width="1.3"/>
      <path d="M 80 80 a 16 16 0 0 0 32 0" fill="none" stroke="#000" stroke-width="1.3"/>
      <path d="M 112 80 L 112 34" fill="none" stroke="#000" stroke-width="1.3"/>
      <path d="M 135 34 a 15 15 0 1 1 30 0" fill="none" stroke="#000" stroke-width="1.3"/>
      <line x1="165" y1="34" x2="165" y2="150" stroke="#000" stroke-width="1.3"/>
      <polygon points="165,160 158,148 172,148" fill="#000"/>
      <text x="165" y="176" font-size="11" text-anchor="middle">?g</text>
      <line x1="80" y1="166" x2="80" y2="180" stroke="#000" stroke-width="1.5"/>
      <rect x="56" y="180" width="48" height="26" fill="none" stroke="#000" stroke-width="1.8"/>
      <text x="80" y="198" font-size="11" text-anchor="middle">800g</text>
    </svg>`,
      choices: ["100g", "200g", "400g", "800g"],
      answer: 1,
      explain: "動滑車1個ごとに必要な力は半分になる。動滑車1で800g→400g、動滑車2でさらに400g→200gとなり、定滑車は力の向きを変えるだけなので引く力は200g。"
    },

    // ---- 計算問題(ばね) ----
    {
      q: "自然長(何もつるさないときの長さ)が10cmで、30gのおもりをつるすと6cm伸びるばねがある。このばねに50gのおもりをつるすと、ばね全体の長さは何cmになるか。",
      choices: ["10cm", "16cm", "20cm", "22cm"],
      answer: 2,
      explain: "30gで6cm伸びるので1gあたり0.2cm。50gでは0.2×50=10cm伸びる。ばね全体の長さは自然長10cm+伸び10cm=20cm。伸びの10cmだけを答えないよう注意。"
    },
    {
      q: "下の図のように、20gのおもりで4cm伸びる同じばね2本を縦にひとつなぎ(直列)にして、下端に40gのおもりをつるした。ばね全体の伸びは何cmか。ただしばね自身の重さは考えないものとする。",
      data: `<svg viewBox="0 0 220 230" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="ばね2本を直列につないでおもりをつるした図">
      <line x1="40" y1="16" x2="180" y2="16" stroke="#000" stroke-width="3"/>
      <line x1="48" y1="16" x2="40" y2="8" stroke="#666" stroke-width="1"/>
      <line x1="72" y1="16" x2="64" y2="8" stroke="#666" stroke-width="1"/>
      <line x1="96" y1="16" x2="88" y2="8" stroke="#666" stroke-width="1"/>
      <line x1="120" y1="16" x2="112" y2="8" stroke="#666" stroke-width="1"/>
      <line x1="144" y1="16" x2="136" y2="8" stroke="#666" stroke-width="1"/>
      <line x1="168" y1="16" x2="160" y2="8" stroke="#666" stroke-width="1"/>
      <line x1="110" y1="16" x2="110" y2="30" stroke="#000" stroke-width="1.5"/>
      <polyline points="110,30 92,38 128,50 92,62 128,74 92,86 110,94" fill="none" stroke="#000" stroke-width="1.6"/>
      <text x="150" y="64" font-size="10">ばねA</text>
      <line x1="110" y1="94" x2="110" y2="106" stroke="#000" stroke-width="1.5"/>
      <polyline points="110,106 92,114 128,126 92,138 128,150 92,162 110,170" fill="none" stroke="#000" stroke-width="1.6"/>
      <text x="150" y="140" font-size="10">ばねB</text>
      <line x1="110" y1="170" x2="110" y2="182" stroke="#000" stroke-width="1.5"/>
      <rect x="86" y="182" width="48" height="26" fill="none" stroke="#000" stroke-width="1.8"/>
      <text x="110" y="200" font-size="11" text-anchor="middle">40g</text>
      <text x="110" y="224" font-size="9" text-anchor="middle">同じばね2本を直列につないだ</text>
    </svg>`,
      choices: ["4cm", "8cm", "16cm", "32cm"],
      answer: 2,
      explain: "直列につないだばねには、どちらにも40gの力がそのままかかる。20gで4cm伸びるので40gでは8cm伸び、それが2本分あるので全体の伸びは8×2=16cm。"
    },
    {
      q: "下の図のように、20gのおもりで4cm伸びる同じばね2本を横に並べて(並列に)軽い棒をつるし、その中央に40gのおもりをつるした。ばね1本の伸びは何cmか。ただしばねと棒の重さは考えないものとする。",
      data: `<svg viewBox="0 0 240 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="ばね2本を並列にしておもりをつるした図">
      <line x1="30" y1="16" x2="210" y2="16" stroke="#000" stroke-width="3"/>
      <line x1="42" y1="16" x2="34" y2="8" stroke="#666" stroke-width="1"/>
      <line x1="72" y1="16" x2="64" y2="8" stroke="#666" stroke-width="1"/>
      <line x1="102" y1="16" x2="94" y2="8" stroke="#666" stroke-width="1"/>
      <line x1="132" y1="16" x2="124" y2="8" stroke="#666" stroke-width="1"/>
      <line x1="162" y1="16" x2="154" y2="8" stroke="#666" stroke-width="1"/>
      <line x1="192" y1="16" x2="184" y2="8" stroke="#666" stroke-width="1"/>
      <line x1="80" y1="16" x2="80" y2="30" stroke="#000" stroke-width="1.5"/>
      <polyline points="80,30 62,38 98,50 62,62 98,74 62,86 80,94" fill="none" stroke="#000" stroke-width="1.6"/>
      <line x1="80" y1="94" x2="80" y2="120" stroke="#000" stroke-width="1.5"/>
      <line x1="160" y1="16" x2="160" y2="30" stroke="#000" stroke-width="1.5"/>
      <polyline points="160,30 142,38 178,50 142,62 178,74 142,86 160,94" fill="none" stroke="#000" stroke-width="1.6"/>
      <line x1="160" y1="94" x2="160" y2="120" stroke="#000" stroke-width="1.5"/>
      <line x1="60" y1="120" x2="180" y2="120" stroke="#000" stroke-width="3"/>
      <text x="120" y="112" font-size="9" text-anchor="middle">軽い棒</text>
      <line x1="120" y1="120" x2="120" y2="150" stroke="#000" stroke-width="1.5"/>
      <rect x="96" y="150" width="48" height="26" fill="none" stroke="#000" stroke-width="1.8"/>
      <text x="120" y="168" font-size="11" text-anchor="middle">40g</text>
      <text x="120" y="196" font-size="9" text-anchor="middle">同じばね2本を並列にした</text>
    </svg>`,
      choices: ["2cm", "16cm", "8cm", "4cm"],
      answer: 3,
      explain: "並列にすると40gの重さを2本のばねで分け合うので、ばね1本にかかる力は20g。20gで4cm伸びるばねなので、1本の伸びは4cm(棒も4cm下がる)。"
    },

    // ---- 計算問題(浮力・密度) ----
    {
      q: "下の図のように、重さ150g・体積100cm³の物体をばねばかりにつるし、全体を水中に完全に沈めた。ばねばかりは何gを示すか。ただし水1cm³の重さを1gとする。",
      data: `<svg viewBox="0 0 250 230" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="水中に沈めた物体をばねばかりでつるした図">
      <line x1="60" y1="12" x2="190" y2="12" stroke="#000" stroke-width="3"/>
      <line x1="125" y1="12" x2="125" y2="26" stroke="#000" stroke-width="1.5"/>
      <rect x="106" y="26" width="38" height="58" fill="none" stroke="#000" stroke-width="1.8"/>
      <line x1="106" y1="42" x2="118" y2="42" stroke="#666" stroke-width="1"/>
      <line x1="106" y1="52" x2="118" y2="52" stroke="#666" stroke-width="1"/>
      <line x1="106" y1="62" x2="118" y2="62" stroke="#666" stroke-width="1"/>
      <text x="163" y="58" font-size="9">ばねばかり</text>
      <line x1="125" y1="84" x2="125" y2="118" stroke="#000" stroke-width="1.5"/>
      <rect x="40" y="100" width="170" height="110" fill="none" stroke="#000" stroke-width="1.8"/>
      <line x1="40" y1="118" x2="210" y2="118" stroke="#666" stroke-width="1" stroke-dasharray="4,3"/>
      <text x="203" y="113" font-size="9" text-anchor="end">水面</text>
      <rect x="100" y="140" width="50" height="42" fill="none" stroke="#000" stroke-width="2"/>
      <line x1="125" y1="118" x2="125" y2="140" stroke="#000" stroke-width="1.5"/>
      <text x="125" y="157" font-size="9" text-anchor="middle">150g</text>
      <text x="125" y="172" font-size="9" text-anchor="middle">100cm³</text>
    </svg>`,
      choices: ["50g", "100g", "150g", "250g"],
      answer: 0,
      explain: "浮力=押しのけた水の重さ=100cm³×1g/cm³=100g。ばねばかりが示す値は「物体の重さ-浮力」なので、150-100=50g。"
    },
    {
      q: "下の図のように、体積200cm³の木片が水に浮いていて、体積の5分の3が水面より下にしずんでいた。この木片の重さは何gか。ただし水1cm³の重さを1gとする。",
      data: `<svg viewBox="0 0 260 190" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="水に浮いた木片の図">
      <rect x="25" y="40" width="210" height="130" fill="none" stroke="#000" stroke-width="1.8"/>
      <line x1="25" y1="80" x2="235" y2="80" stroke="#000" stroke-width="1.2" stroke-dasharray="5,3"/>
      <text x="228" y="74" font-size="9" text-anchor="end">水面</text>
      <rect x="95" y="60" width="80" height="50" fill="none" stroke="#000" stroke-width="2"/>
      <line x1="95" y1="80" x2="175" y2="80" stroke="#666" stroke-width="1"/>
      <text x="135" y="74" font-size="9" text-anchor="middle">水面より上:2/5</text>
      <text x="135" y="98" font-size="9" text-anchor="middle">水中:3/5</text>
      <text x="135" y="130" font-size="10" text-anchor="middle">木片(全体で200cm³)</text>
    </svg>`,
      choices: ["80g", "120g", "200g", "333g"],
      answer: 1,
      explain: "浮いている物体では「浮力=物体の重さ」。水中にある部分の体積は200×3/5=120cm³なので、浮力は120g。よって木片の重さも120g。"
    },
    {
      q: "アルミニウムの密度は2.7g/cm³である。重さ54gのアルミニウムのかたまりの体積は何cm³か。",
      choices: ["2cm³", "20cm³", "27cm³", "145.8cm³"],
      answer: 1,
      explain: "体積=重さ÷密度で求める。54g÷2.7g/cm³=20cm³。かけ算にして54×2.7=145.8としないよう注意。"
    },

    // ---- 計算問題(電気) ----
    {
      q: "下の図のように、9Vの電源に3Ωの抵抗Aと6Ωの抵抗Bを直列につないだ。抵抗Bにかかる電圧は何Vか。",
      data: `<svg viewBox="0 0 300 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="3Ωと6Ωを直列につないだ回路図">
      <polyline points="40,110 40,40 100,40" fill="none" stroke="#000" stroke-width="2"/>
      <polyline points="140,40 190,40" fill="none" stroke="#000" stroke-width="2"/>
      <polyline points="230,40 260,40 260,110 40,110" fill="none" stroke="#000" stroke-width="2"/>
      <rect x="100" y="30" width="40" height="20" fill="none" stroke="#000" stroke-width="2"/>
      <text x="120" y="22" font-size="10" text-anchor="middle">A:3Ω</text>
      <rect x="190" y="30" width="40" height="20" fill="none" stroke="#000" stroke-width="2"/>
      <text x="210" y="22" font-size="10" text-anchor="middle">B:6Ω</text>
      <line x1="140" y1="110" x2="140" y2="110" stroke="#000" stroke-width="2"/>
      <line x1="132" y1="98" x2="132" y2="122" stroke="#000" stroke-width="3"/>
      <line x1="146" y1="104" x2="146" y2="116" stroke="#000" stroke-width="2"/>
      <text x="139" y="140" font-size="10" text-anchor="middle">9V</text>
    </svg>`,
      choices: ["3V", "4.5V", "9V", "6V"],
      answer: 3,
      explain: "直列回路の合成抵抗は3+6=9Ω。流れる電流は9V÷9Ω=1A。直列では回路のどこでも電流が同じなので、Bにかかる電圧は1A×6Ω=6V。(Aには1A×3Ω=3Vかかり、合計9Vになる)"
    },
    {
      q: "6Vの電源に、3Ωの抵抗と6Ωの抵抗を並列につないだ。回路全体に流れる電流は何Aか。",
      choices: ["0.67A", "1A", "2A", "3A"],
      answer: 3,
      explain: "並列ではどちらの抵抗にも6Vがかかる。3Ωには6÷3=2A、6Ωには6÷6=1A流れるので、全体では2+1=3A。(合成抵抗3×6÷(3+6)=2Ωから6÷2=3Aと求めてもよい)"
    },

    // ---- 計算問題(音・光) ----
    {
      q: "がけに向かって大きな声を出したところ、2秒後に山びこが聞こえた。音の速さを秒速340mとすると、がけまでのきょりは何mか。",
      choices: ["170m", "340m", "680m", "1360m"],
      answer: 1,
      explain: "音はがけまで行って返ってくるので、2秒間に進んだ道のりは340×2=680m。これは往復の距離なので、がけまでは680÷2=340m。"
    },
    {
      q: "ふりこの長さが25cmのとき、1往復する時間は1秒であった。同じおもりを使ってふりこの長さを100cmにすると、1往復する時間は何秒になるか。",
      choices: ["0.5秒", "1.5秒", "2秒", "4秒"],
      answer: 2,
      explain: "ふりこの1往復する時間は、ふりこの長さが4倍になると2倍、9倍になると3倍になる。100cmは25cmの4倍なので、時間は1秒×2=2秒。長さの倍率をそのままかけて4秒としないよう注意。"
    },
    {
      q: "下の図のように、身長150cmの人がかべにかけた鏡で自分の全身を映すには、鏡の縦の長さは最低何cm必要か。",
      data: `<svg viewBox="0 0 280 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="鏡で全身を映すときの光の道すじの図">
      <line x1="230" y1="20" x2="230" y2="200" stroke="#000" stroke-width="3"/>
      <text x="248" y="112" font-size="10" text-anchor="middle">かべ</text>
      <line x1="222" y1="60" x2="222" y2="150" stroke="#000" stroke-width="5"/>
      <text x="196" y="106" font-size="10" text-anchor="end">鏡</text>
      <circle cx="80" cy="40" r="12" fill="none" stroke="#000" stroke-width="1.8"/>
      <line x1="80" y1="52" x2="80" y2="130" stroke="#000" stroke-width="1.8"/>
      <line x1="80" y1="70" x2="58" y2="100" stroke="#000" stroke-width="1.5"/>
      <line x1="80" y1="70" x2="102" y2="100" stroke="#000" stroke-width="1.5"/>
      <line x1="80" y1="130" x2="60" y2="180" stroke="#000" stroke-width="1.8"/>
      <line x1="80" y1="130" x2="100" y2="180" stroke="#000" stroke-width="1.8"/>
      <line x1="30" y1="185" x2="250" y2="185" stroke="#666" stroke-width="1"/>
      <line x1="80" y1="34" x2="222" y2="62" stroke="#666" stroke-width="1" stroke-dasharray="4,3"/>
      <line x1="222" y1="62" x2="80" y2="40" stroke="#666" stroke-width="1" stroke-dasharray="4,3"/>
      <line x1="80" y1="180" x2="222" y2="148" stroke="#666" stroke-width="1" stroke-dasharray="4,3"/>
      <line x1="222" y1="148" x2="80" y2="176" stroke="#666" stroke-width="1" stroke-dasharray="4,3"/>
      <line x1="18" y1="34" x2="18" y2="182" stroke="#666" stroke-width="1"/>
      <text x="12" y="112" font-size="10" text-anchor="middle" transform="rotate(-90 12 112)">150cm</text>
      <text x="140" y="212" font-size="9" text-anchor="middle">頭のてっぺんと足先からの光が鏡ではね返って目に届く</text>
    </svg>`,
      choices: ["50cm", "75cm", "100cm", "150cm"],
      answer: 1,
      explain: "光は入射角と反射角が等しくなるようにはね返るので、頭のてっぺんからの光は「頭と目の中間の高さ」、足先からの光は「足と目の中間の高さ」で鏡に当たる。必要な鏡の長さはその差、つまり身長のちょうど半分になる。150÷2=75cm。"
    },
    {
      q: "下の図のように、焦点きょりが10cmの凸レンズの前(左側)20cmの位置に物体を置いた。スクリーンにはっきりした像がうつるのはレンズから何cmの位置で、その像の大きさはどうなるか。",
      data: `<svg viewBox="0 0 330 175" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="凸レンズと物体・焦点の位置関係の図">
      <line x1="20" y1="88" x2="315" y2="88" stroke="#666" stroke-width="1" stroke-dasharray="4,3"/>
      <path d="M 165 26 q 16 62 0 124 q -16 -62 0 -124 Z" fill="none" stroke="#000" stroke-width="2"/>
      <text x="165" y="18" font-size="9" text-anchor="middle">凸レンズ</text>
      <line x1="65" y1="88" x2="65" y2="48" stroke="#000" stroke-width="2"/>
      <polygon points="65,42 60,54 70,54" fill="#000"/>
      <text x="65" y="36" font-size="9" text-anchor="middle">物体</text>
      <circle cx="115" cy="88" r="3" fill="#000"/>
      <text x="115" y="104" font-size="8" text-anchor="middle">焦点</text>
      <circle cx="215" cy="88" r="3" fill="#000"/>
      <text x="215" y="104" font-size="8" text-anchor="middle">焦点</text>
      <line x1="115" y1="122" x2="165" y2="122" stroke="#666" stroke-width="1"/>
      <text x="140" y="134" font-size="8" text-anchor="middle">10cm</text>
      <line x1="65" y1="146" x2="165" y2="146" stroke="#666" stroke-width="1"/>
      <text x="115" y="158" font-size="8" text-anchor="middle">20cm</text>
      <line x1="265" y1="26" x2="265" y2="150" stroke="#000" stroke-width="2" stroke-dasharray="3,3"/>
      <text x="288" y="40" font-size="9" text-anchor="middle">スクリーン</text>
    </svg>`,
      choices: [
        "レンズから10cmの位置に、物体より小さい像",
        "レンズから20cmの位置に、物体と同じ大きさの像",
        "レンズから30cmの位置に、物体より大きい像",
        "スクリーンには像はうつらない"
      ],
      answer: 1,
      explain: "物体を焦点きょりのちょうど2倍(10×2=20cm)の位置に置くと、像も反対側の焦点きょりの2倍(20cm)の位置にでき、大きさは物体と同じになる(上下は逆さまの倒立実像)。"
    }
  ]
};

// 既存データ(SCIENCE_CHEMISTRY_QUESTIONS / SCIENCE_PHYSICS_QUESTIONS)への
// 取り込みは呼び出し側で行う。
if (typeof module !== "undefined" && module.exports) {
  module.exports = SCIENCE_ADD_2;
}
