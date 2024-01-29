let years: number[] = [2019, 2020, 2021, 2022, 2023];
let seasons: string[] = ["Spring", "Summer", "Autumn", "Winter"]

console.log(years[3]);
console.log(seasons[2]);
console.log(seasons[3]);
console.log(years[0]);

console.log("------------------------------------------------");

type TPerson = {
    name: string,
    age: number
}
let people: TPerson[] = [{name: "Janibek", age: 21}, {name: "Argyn", age: 77}, {name: "Bekarys", age: 28}]    

console.log(people[1].age);
console.log(people[0].name);
console.log(people[2]);