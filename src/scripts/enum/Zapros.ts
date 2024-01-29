enum Status{
    CREATED = "CREATED",
    SENT = "SENT",
    RECEIVED = "RECEIVED",
    COMPLETED = "COMPLETED"
}

function getApplicationStatus(statusName: Status){
    switch(statusName){
        case Status.CREATED:
            return "заявка создана сотрудником и передана руководителю";
        case Status.SENT:
            return "руководитель отправил заявку на исполнение";
        case Status.RECEIVED:
            return "сотрудник подтверждает заявку";
        case Status.COMPLETED:
            return "бухгалтер подтверждает завершение заявки"
    }
}

let statusName: Status = Status.COMPLETED;
console.log(`Статус заяки ${statusName} - ${getApplicationStatus(statusName)}`);