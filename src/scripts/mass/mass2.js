"use strict";
let products = [
    { title: "Bosh-30", category: "Holodilnik", price: 150000 },
    { title: "Bosh-50", category: "Holodilnik", price: 200000 },
    { title: "Bosh-70", category: "Holodilnik", price: 250000 },
    { title: "Sony", category: "TV", price: 100000 },
    { title: "Asus", category: "Laptop", price: 350000 }
];
let iMax = 0;
let iMin = 0;
for (let i = 1; i < products.length; i++) {
    if (products[i].price > products[iMax].price) {
        iMax = i;
    }
    if (products[i].price < products[iMin].price)
        iMin = i;
}
console.log("Самый дорогой товар " + products[iMax].title +
    " категория: " + products[iMax].category + " цена: " + products[iMax].price + "теңге");
console.log("Самый дешевый товар " + products[iMin].title +
    " категория: " + products[iMin].category + " цена: " + products[iMin].price + "теңге");
