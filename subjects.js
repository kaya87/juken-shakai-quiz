// 科目レジストリ: 各科目のデータをここでまとめて登録する

// 追加問題データ(*-add-*.js)を、単元IDをキーにして本体データへマージする。
// 既存の単元にあれば末尾に追加し、なければ新しい単元として作る。
function mergeAdditions(baseData, additions, newUnitTitles) {
  if (!additions) return baseData;
  Object.keys(additions).forEach(function (unitId) {
    const extra = additions[unitId];
    if (!Array.isArray(extra) || extra.length === 0) return;
    const unit = baseData.find(function (u) { return u.id === unitId; });
    if (unit) {
      unit.questions = unit.questions.concat(extra);
    } else {
      baseData.push({
        id: unitId,
        title: (newUnitTitles && newUnitTitles[unitId]) || unitId,
        questions: extra,
      });
    }
  });
  return baseData;
}

// 国語: 漢字・四字熟語の追加分をマージ
if (typeof JAPANESE_DATA !== "undefined") {
  const jpNewTitles = {
    kotowaza: "ことわざ・慣用句",
    kojiseigo: "故事成語",
  };
  mergeAdditions(JAPANESE_DATA, typeof KANJI_ADD !== "undefined" ? KANJI_ADD : null, jpNewTitles);
  mergeAdditions(JAPANESE_DATA, typeof YOJI_ADD !== "undefined" ? YOJI_ADD : null, jpNewTitles);
}

// 理科: 4分野の追加分をマージ
if (typeof SCIENCE_DATA !== "undefined") {
  mergeAdditions(SCIENCE_DATA, typeof SCIENCE_ADD_1 !== "undefined" ? SCIENCE_ADD_1 : null);
  mergeAdditions(SCIENCE_DATA, typeof SCIENCE_ADD_2 !== "undefined" ? SCIENCE_ADD_2 : null);
}

const SUBJECTS = [
  { id: "history", label: "歴史", data: typeof HISTORY_DATA !== "undefined" ? HISTORY_DATA : [] },
  { id: "geography", label: "地理", data: typeof GEOGRAPHY_DATA !== "undefined" ? GEOGRAPHY_DATA : [] },
  { id: "civics", label: "公民", data: typeof CIVICS_DATA !== "undefined" ? CIVICS_DATA : [] },
  { id: "science", label: "理科", data: typeof SCIENCE_DATA !== "undefined" ? SCIENCE_DATA : [] },
  { id: "japanese", label: "国語", data: typeof JAPANESE_DATA !== "undefined" ? JAPANESE_DATA : [] },
];
