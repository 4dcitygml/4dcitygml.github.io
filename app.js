const translations = {
  en: {
    skip: "Skip to content", navCities: "Cities", navMethod: "How it works", navRepos: "Repositories",
    heroEyebrow: "Open urban data · building by building", heroTitle: "City models\nthat remember.",
    heroLede: "Tools and compact demonstration datasets for following the history of individual buildings in CityGML.",
    download: "Get the tools", explore: "Explore the demos", statCities: "demo cities",
    statBuildings: "buildings in sample data", statHistory: "continuous history", introEyebrow: "The idea",
    introTitle: "Treat change as part of the model.",
    introBody: "Keep source-compatible CityGML in Git, preserve stable identifiers, and make each reviewed building change traceable. Format migrations become reproducible releases—not breaks in history.",
    citiesEyebrow: "Three deliberately different datasets", citiesTitle: "Explore the same workflow across cities.",
    citiesBody: "Different standards, coordinate systems, identifiers, languages, and texture availability keep the tools honest.",
    tokyoBody: "A textured PLATEAU sample in central Tokyo, managed in its source-compatible CityGML edition.",
    munichBody: "Bavarian LoD2 buildings around the central station, testing metric UTM data and external identifiers.",
    newyorkBody: "A compact NYC model testing US survey feet, generic attributes, and BIN-based building identity.",
    buildings: "Buildings", format: "Format", dataset: "Dataset", idLabel: "Stable ID", openRepo: "Open repository",
    sourceNote: "Each repository contains its own source attribution, license terms, extraction record, and change notices.",
    methodEyebrow: "A small, inspectable workflow", methodTitle: "Source. Review. Release.",
    step1Title: "Keep the source edition", step1Body: "The repository starts from a documented public dataset and keeps its source-compatible form as the canonical record.",
    step2Title: "Review by building", step2Body: "Stable IDs, focused commits, evidence, and automated checks make individual changes easier to inspect.",
    step3Title: "Generate other editions", step3Body: "Validated conversions are published as immutable derived releases with manifests and checksums.",
    reposEyebrow: "Open building blocks", reposTitle: "Use the tools. Start a city. Inspect everything.",
    toolsDesc: "Editors, checks, converters, schemas, and releases", templateDesc: "A reusable starting point for an independent city repository",
    orgDesc: "Project repositories, decisions, issues, and contributions", closingEyebrow: "Urban data is never finished",
    closingTitle: "Make the next change legible.", startCity: "Start with the city template",
    footerTagline: "An independent, experimental open-source project.", contribute: "Contribute", contact: "Contact",
    disclaimer: "Not an official publication of OGC, Project PLATEAU, i-UR, or any source-data provider."
  },
  ja: {
    skip: "本文へ移動", navCities: "都市", navMethod: "仕組み", navRepos: "リポジトリ",
    heroEyebrow: "オープンな都市データを、建物ごとに", heroTitle: "履歴を持つ\n都市モデル。",
    heroLede: "CityGMLの建物一棟ごとの変化を追うためのツールと、小さな実証用データセットです。",
    download: "ツールを入手", explore: "デモを見る", statCities: "デモ都市",
    statBuildings: "サンプルの建物", statHistory: "連続した履歴", introEyebrow: "考え方",
    introTitle: "変化をモデルの一部として扱う。",
    introBody: "原典互換のCityGMLをGitで管理し、安定した建物IDを保ち、レビューされた変更を追跡可能にします。形式移行は履歴の断絶ではなく、再現可能な派生Releaseとして扱います。",
    citiesEyebrow: "意図的に異なる3つのデータ", citiesTitle: "都市が変わっても、同じ仕組みで。",
    citiesBody: "規格、座標系、識別子、言語、テクスチャの有無が異なるデータで、ツールの汎用性を確かめます。",
    tokyoBody: "東京中心部のPLATEAUテクスチャ付きサンプル。原典互換のCityGML版を正本として管理します。",
    munichBody: "中央駅周辺のバイエルンLoD2建物。UTMメートル座標と外部識別子を検証します。",
    newyorkBody: "米国測量フィート、汎用属性、BINによる建物識別を検証する小さなNYCモデルです。",
    buildings: "建物数", format: "形式", dataset: "データセット", idLabel: "安定ID", openRepo: "リポジトリを開く",
    sourceNote: "出典表示、利用条件、抽出記録、変更表示は各都市リポジトリで管理します。",
    methodEyebrow: "小さく検証できる流れ", methodTitle: "原典・レビュー・Release。",
    step1Title: "原典の版を保つ", step1Body: "出典を記録した公開データから始め、原典互換の形式を正本として保持します。",
    step2Title: "建物単位でレビュー", step2Body: "安定ID、小さなcommit、根拠、自動検査により、個々の変更を確認しやすくします。",
    step3Title: "別の版を生成", step3Body: "検証済みの変換結果を、manifestとchecksum付きの不変な派生Releaseとして公開します。",
    reposEyebrow: "開かれた構成要素", reposTitle: "使う。都市を始める。すべてを確認する。",
    toolsDesc: "エディタ、検査、変換、schema、Release", templateDesc: "独立した都市リポジトリを始めるための雛形",
    orgDesc: "プロジェクトのリポジトリ、判断、Issue、貢献", closingEyebrow: "都市データに完成はありません",
    closingTitle: "次の変更を、読める形に。", startCity: "city-templateから始める",
    footerTagline: "独立した実験的オープンソースプロジェクトです。", contribute: "参加する", contact: "連絡先",
    disclaimer: "OGC、Project PLATEAU、i-UR、各原典提供者による公式な公開物ではありません。"
  },
  de: {
    skip: "Zum Inhalt", navCities: "Städte", navMethod: "Methode", navRepos: "Repositorien",
    heroEyebrow: "Offene urbane Daten · Gebäude für Gebäude", heroTitle: "Stadtmodelle\nmit Gedächtnis.",
    heroLede: "Werkzeuge und kompakte Demonstrationsdaten, um die Geschichte einzelner Gebäude in CityGML zu verfolgen.",
    download: "Werkzeuge laden", explore: "Demos erkunden", statCities: "Demostädte",
    statBuildings: "Gebäude in Beispieldaten", statHistory: "durchgehende Historie", introEyebrow: "Die Idee",
    introTitle: "Veränderung als Teil des Modells.",
    introBody: "Quellkompatibles CityGML bleibt in Git, stabile Kennungen bleiben erhalten und jede geprüfte Änderung wird nachvollziehbar. Formatmigrationen werden reproduzierbare Releases statt Brüche in der Historie.",
    citiesEyebrow: "Drei bewusst unterschiedliche Datensätze", citiesTitle: "Ein Arbeitsablauf für verschiedene Städte.",
    citiesBody: "Unterschiedliche Standards, Koordinatensysteme, Kennungen, Sprachen und Texturen prüfen die Allgemeingültigkeit der Werkzeuge.",
    tokyoBody: "Ein texturiertes PLATEAU-Beispiel im Zentrum Tokios, verwaltet in seiner quellkompatiblen CityGML-Ausgabe.",
    munichBody: "Bayerische LoD2-Gebäude am Hauptbahnhof zum Test metrischer UTM-Daten und externer Kennungen.",
    newyorkBody: "Ein kompaktes NYC-Modell für US Survey Feet, generische Attribute und Gebäudeidentität über BIN.",
    buildings: "Gebäude", format: "Format", dataset: "Datensatz", idLabel: "Stabile ID", openRepo: "Repository öffnen",
    sourceNote: "Jedes Repository führt eigene Quellenangaben, Lizenzbedingungen, Extraktionsprotokolle und Änderungshinweise.",
    methodEyebrow: "Ein kleiner, prüfbarer Ablauf", methodTitle: "Quelle. Prüfung. Release.",
    step1Title: "Quellausgabe bewahren", step1Body: "Das Repository beginnt mit dokumentierten offenen Daten und bewahrt die quellkompatible Form als maßgeblichen Stand.",
    step2Title: "Gebäudeweise prüfen", step2Body: "Stabile IDs, fokussierte Commits, Belege und automatische Prüfungen machen Änderungen nachvollziehbar.",
    step3Title: "Andere Ausgaben erzeugen", step3Body: "Geprüfte Konvertierungen erscheinen als unveränderliche abgeleitete Releases mit Manifesten und Prüfsummen.",
    reposEyebrow: "Offene Bausteine", reposTitle: "Werkzeuge nutzen. Stadt starten. Alles prüfen.",
    toolsDesc: "Editoren, Prüfungen, Konverter, Schemas und Releases", templateDesc: "Ein wiederverwendbarer Ausgangspunkt für ein unabhängiges Stadt-Repository",
    orgDesc: "Projekt-Repositorien, Entscheidungen, Issues und Beiträge", closingEyebrow: "Urbane Daten sind nie fertig",
    closingTitle: "Die nächste Änderung lesbar machen.", startCity: "Mit dem Stadt-Template beginnen",
    footerTagline: "Ein unabhängiges, experimentelles Open-Source-Projekt.", contribute: "Mitwirken", contact: "Kontakt",
    disclaimer: "Keine offizielle Veröffentlichung von OGC, Project PLATEAU, i-UR oder einem Quelldatenanbieter."
  }
};

const params = new URLSearchParams(window.location.search);
const requested = params.get("lang");
const browserLanguage = (navigator.language || "en").slice(0, 2).toLowerCase();
const language = translations[requested] ? requested : (translations[browserLanguage] ? browserLanguage : "en");
const dictionary = translations[language];

document.documentElement.lang = language;
document.querySelectorAll("[data-i18n]").forEach((element) => {
  const value = dictionary[element.dataset.i18n];
  if (value !== undefined) {
    const lines = value.split("\n");
    element.replaceChildren(...lines.flatMap((line, index) => index ? [document.createElement("br"), line] : [line]));
  }
});

document.querySelectorAll("[data-language]").forEach((link) => {
  if (link.dataset.language === language) link.setAttribute("aria-current", "true");
});
