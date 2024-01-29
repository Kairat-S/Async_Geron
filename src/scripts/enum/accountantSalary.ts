//Зарплата бухгалтера
enum Companies{
    Burger,
    Bee,
    Kfc,
    Actimel,
    Small
}

function getIncome(company: Companies){
    switch(company){
        case Companies.Burger:
            return 300000;
        case Companies.Bee:
            return 500000;
        case Companies.Kfc:
            return 1000000;
        case Companies.Actimel:
            return 1200000;
        case Companies.Small:
            return 1300000;
    }
}

function calculateSalary(companyIncome: number){
    let salary=companyIncome*0.3
    if (salary<120000) salary = 120000;
    return salary;
}

let accountantSalary: number = calculateSalary(getIncome(0)); // console.log(accountantSalary);
accountantSalary += calculateSalary(getIncome(1)); // console.log(accountantSalary);
accountantSalary += calculateSalary(getIncome(2)); // console.log(accountantSalary);
accountantSalary += calculateSalary(getIncome(3)); // console.log(accountantSalary);
accountantSalary += calculateSalary(getIncome(4));
console.log(`Зарплата бухгалтера за месяц - ${accountantSalary} теңге`);