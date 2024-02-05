"use strict"; //режим строгово современного кода 

// //Классификация типо данных  в JS

// let num = 4;

// console.log(4/0);

// console.log("string" * 9);

// const persone = "Alex";

// const bool = true;

// // console.log(something);

// let und;

// console.log(und);

// //объект
// const obj = {
// 	name: "John",
// 	age: 25,
// 	isMarried: false

// };


// // console.log(obj.name);

// // console.log(obj["name"]);

// // let arr = ["plum,png", "orange.jpg", 6, "apple,bpm", {}, []];
// // console.log(arr[1]);


const arr = ["a", "b", "c"]; //массив - перечень информации по порядку, порядок имеет значение
const arrObj = {
	0: "a",
	1: "b",
	2: "c",
	abc: {
		df: [{},{}],
		def:{

		}
	}
};
const b = "b";

// arrObj.b = "1234",
// arrObj["b"] = "1234",

arrObj[b] = "1234",
console.log(arrObj["b"]); //создание нового свойства внутри объекта
console.log(arrObj.b);

// console.log(arr[1]);
// console.log(arrObj[1]);

// const obj = {a, b , c}; // объект - структра хранения данных в паарном формате(ключ, значение)

const obj ={
	Anna: 500,
	"Alice" : 800
};


const storeName = "AutoShop";
const storeDescription = {
	budget: 10000,
	employees: ["Sasha", "Migo", "Andru"],
	products: {
		car1: 2000000,
		car2: 1500000
	},
	open: true
};
