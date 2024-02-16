"use strict";

// const arr = [13, 2, 7, 6, 8];

// arr.forEach(function(item, i,arr) {
// 	console.log(`${i}: ${item} внутри массива ${arr}`);
// }); 



// // arr.sort();
// // console.log(arr); //сортирует как строки, поэтому в выводе 13, 2, 6, 7, 8

// arr.sort();

// function compare(a, b){
// 	return a-b;
// }

// arr.sort(compare);
// console.log(arr);

// // arr[99] = 0;
// // console.log(arr.length);
// // console.log(arr);

// //arr.pop(); //метод, удаляет последний элемент из массива
// // arr.push(10); //метод, который добавляет элемент в конец
// // console.log(arr);


// // for (let i = 0; i<arr.length; i++){
// // 	console.log(arr[i]);
// // }


// // for( let value of arr){
// // 	console.log(value);
// // } //можно использовать ключевые слова break и continue




// // const str = prompt("", "");
// // const products = str.split(", ");
// // products.sort();
// // console.log(products.join("; ")); //объединение элементов массива

// let a = 5,
// 	b = a;

// b = b+5;
// console.log(b);
// console.log(a);

// //передача по ссылке, когда работаем с объектами
// const obj = {
// 	a: 5,
// 	b: 1
// };

// const copy = obj;

// copy.a = 10;
// console.log(copy);
// console.log(obj);

//клонирование объекта(поверхностная копия)

// function copy(mainObj){
// 	let objCopy = {};

// 	let key;
// 	for(key in mainObj){
// 		objCopy[key] = mainObj[key];
// 	}
// 	return objCopy;
// }

// const numbers = {
// 	a:2,
// 	b:5,
// 	c:{
// 		x:7,
// 		y:4
// 	}
// };

// const newNumbers = copy(numbers);

// newNumbers.a = 10;
// newNumbers.c.x = 10;

// console.log(newNumbers);
// console.log(numbers);

// const add = {
// 	d: 17,
// 	e:20
// };

// console.log(Object.assign(numbers, add)); //соединение объектов
// const clone = Object.assign({}, add);

// clone.d = 20;

// console.log(add);
// console.log(clone);

const oldArray = ["a", "b", "c"];
const newArray = oldArray.slice();

newArray[1] = "dfghjk";

console.log(newArray);
console.log(oldArray);


const video = ["youtube", "vimeo", "rutube"],
	  blogs = ["wordpress", "livejournal", "blogger"],
	  internet = [...video, ...blogs, "vk", "facebook"];
console.log(internet);

function log(a, b, c){
	console.log(a);
	console.log(b);
	console.log(c);
}

const num = [2,5,7];

log(...num);

const array = ["a", "b"];

const newAarray = [...array];

const q = {
	one:1, 
	two:2
};

const newObj = {...q};



