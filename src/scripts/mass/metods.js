"use strict";
// // let ages = ["10", "11", "15", "12", "14", "13"]
// // метод map выполняет действия над всеми элемантами массива
// // let agesToNumber = ages.map((age) => parseInt(age));
// // agesToNumber.sort((a, b) => {
// //     return b-a
// // })
// // console.log(agesToNumber)
// //обьеденение массивов
// // let newArray = [...numbers, ...numbersMoreFive] // 1 variant
// // let newArray2 = numbers.concat(numbersMoreFive, agesToNumber) // 2 variant
// type TCategory = "smartphone" | "laptop"
// type TProduct = {
//     category: TCategory,
//     price: number,
//     count: number
// }
// let products: TProduct[] = [
//     {
//         category: "smartphone",
//         price: 500000,
//         count: 3
//     },
//     {
//         category: "laptop",
//         price: 300000,
//         count: 10
//     },
//     {
//         category: "smartphone",
//         price: 250000,
//         count: 5
//     },
//     {
//         category: "smartphone",
//         price: 450000,
//         count: 7
//     },
//     {
//         category: "laptop",
//         price: 650000,
//         count: 3
//     },
// ]
// function addProduct(product: TProduct){
//     if (product.category === "smartphone") {
//         smartphones.push(product);
//     }
//     else {
//         laptops.push(product);
//     }
// }
// let smartphones = products.filter((e) => e.category === "smartphone")
// let laptops = products.filter((e) => e.category === "laptop")
// smartphones.sort((a,b) => {
//     return b.price - a.price
// });
// laptops.sort((a,b) => {
//     return b.price - a.price
// });
// console.log(smartphones);
// console.log(laptops);
// addProduct({category: "smartphone", price: 275000, count: 15});
// addProduct({category: "smartphone", price: 325000, count: 12});
// addProduct({category: "laptop", price: 700000, count: 20});
// addProduct({category: "laptop", price: 559000, count: 30});
// console.log(smartphones);
// console.log(laptops);
// smartphones.forEach((e) => {e.price += e.price*10/100} );
// laptops.forEach((e) => {e.price += e.price*0.2} );
// smartphones.sort((a,b) => {
//     return a.price - b.price
// });
// laptops.sort((a,b) => {
//     return b.price - a.price
// });
// console.log("10% | 20%");
// console.log(smartphones);
// console.log(laptops);
// let smartLap = [...smartphones, ...laptops]
// smartLap.sort((a,b) => {
//     return b.price - a.price
// });
// console.log(smartLap);
