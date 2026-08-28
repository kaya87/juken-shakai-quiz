// 科目レジストリ: 各科目のデータをここでまとめて登録する
const SUBJECTS = [
  { id: "history", label: "歴史", data: typeof HISTORY_DATA !== "undefined" ? HISTORY_DATA : [] },
  { id: "geography", label: "地理", data: typeof GEOGRAPHY_DATA !== "undefined" ? GEOGRAPHY_DATA : [] },
  { id: "civics", label: "公民", data: typeof CIVICS_DATA !== "undefined" ? CIVICS_DATA : [] },
  { id: "science", label: "理科", data: typeof SCIENCE_DATA !== "undefined" ? SCIENCE_DATA : [] },
];
