"use strict";
var Status;
(function (Status) {
    Status["CREATED"] = "CREATED";
    Status["SENT"] = "SENT";
    Status["RECEIVED"] = "RECEIVED";
    Status["COMPLETED"] = "COMPLETED";
})(Status || (Status = {}));
function getApplicationStatus(statusName) {
    switch (statusName) {
        case Status.CREATED:
            return "заявка создана сотрудником и передана руководителю";
        case Status.SENT:
            return "руководитель отправил заявку на исполнение";
        case Status.RECEIVED:
            return "сотрудник подтверждает заявку";
        case Status.COMPLETED:
            return "бухгалтер подтверждает завершение заявки";
    }
}
let statusName = Status.COMPLETED;
console.log(`Статус заяки ${statusName} - ${getApplicationStatus(statusName)}`);
