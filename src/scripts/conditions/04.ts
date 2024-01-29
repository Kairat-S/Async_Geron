// Оценка качества отделов
let techDepZP: number = 30;
let techDepUZP: number = 75;
let hardwereDepZP: number = 15;
let hardwereDepUZP: number = 85;
let designersZP: number = 20;
let designersUZP: number = 20;

let qualityIndicatorTech: number = (techDepZP+techDepUZP)/100*techDepUZP;
let qualityIndicatorHard: number = (hardwereDepZP+hardwereDepUZP)/100 * hardwereDepUZP;
let qualityIndicatorDesign: number = (designersZP+designersUZP)/100 * designersUZP;

if (qualityIndicatorTech > 70) {
    console.log("Отдел технический получает премию 10%");
}
else if (qualityIndicatorTech < 40) {
    console.log("Отдел технический закрыт");
}

if (qualityIndicatorHard > 70) {
    console.log("Отдел аппаратный получает премию 10%");
}
else if (qualityIndicatorHard < 40) {
    console.log("Отдел аппаратный закрыт");
}

if (qualityIndicatorDesign > 70) {
    console.log("Отдел проектировщики получает премию 10%");
}
else if (qualityIndicatorDesign < 40) {
    console.log("Отдел проектировщики закрыт");
}