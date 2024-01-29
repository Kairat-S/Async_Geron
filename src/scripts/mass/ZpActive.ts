type TEmployee = {
    name: string,
    age: number,
    salary: number,
    active: boolean
}

let newStaff: TEmployee[] = [
    {name: "Alisher", age: 25, salary: 200000, active: true},
    {name: "Margulan", age: 35, salary: 200000, active: true},
    {name: "Satbai", age: 19, salary: 200000, active: true},
    {name: "Jasybay", age: 25, salary: 200000, active: false},
    {name: "Malaisary", age: 45, salary: 200000, active: true},
    {name: "Abylai", age: 50, salary: 200000, active: false}
]

let activeNewStaff = newStaff.filter((e) => e.active)

console.log(activeNewStaff);

for(let i=0; i<activeNewStaff.length; i++){
    if (activeNewStaff[i].age<20) activeNewStaff[i].salary+=50000;
    else if (activeNewStaff[i].age<30) activeNewStaff[i].salary+=100000;
    else if (activeNewStaff[i].age<40) activeNewStaff[i].salary+=150000;
    else activeNewStaff[i].salary+=200000;
}

activeNewStaff.sort((a,b) => {
    return a.age-b.age;
})

console.log(activeNewStaff);