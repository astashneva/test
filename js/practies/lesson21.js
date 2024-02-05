"use strictt";

// const hamburger = true;
// const fries = true;

// if (hamburger && fries){
// 	console.log("Я сыт!");
// }

// console.log((hamburger && fries)); //результат лог операции булево значение



const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;

//console.log(hamburger === 3 && cola && fries); // out = 0

// console.log(1 && 0);
// console.log(1 && 5);
// console.log(null && 5);
// console.log(0 && "gfdsgfd");

// if (hamburger === 3 && cola === 1 && fries){
// 	console.log("Все сыты!");
// } else {
// 	console.log("Мы уходим!");
// }

// if (hamburger || cola || fries){
// 	console.log("Все сыты!");
// } else {
// 	console.log("Мы уходим!");
// }

// console.log(hamburger || cola || fries);


// let johnReport, alexReport, samReport, mariaReport  = "done";
// console.log(johnReport || alexReport || samReport || mariaReport );

if (hamburger === 3 && cola === 2 || fries === 3 && nuggets){
	console.log("Все довольны!");
} else {
	console.log("Мы уходим!");
}