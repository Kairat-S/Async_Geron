"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const getUser = () => __awaiter(void 0, void 0, void 0, function* () {
    return fetch("https://run.mocky.io/v3/a27db518-069d-45a3-8fac-938b5c2228d1");
});
const checkResult = () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield (yield getUser()).json();
    response.forEach(element => {
        element.sallary = Number(element.sallary);
        if (element.isActive) {
            element.sallary += (element.sallary) * 0.1;
        }
    });
    response.sort((a, b) => b.sallary - a.sallary);
    return response;
});
checkResult().then((response) => {
    console.log(response);
});
