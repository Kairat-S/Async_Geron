"use strict";
// Оценка качества отделов
let techDepZP = 30;
let techDepUZP = 75;
let hardwereDepZP = 15;
let hardwereDepUZP = 85;
let designersZP = 20;
let designersUZP = 20;
let qualityIndicatorTech = (techDepZP + techDepUZP) / 100 * techDepUZP;
let qualityIndicatorHard = (hardwereDepZP + hardwereDepUZP) / 100 * hardwereDepUZP;
let qualityIndicatorDesign = (designersZP + designersUZP) / 100 * designersUZP;
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
