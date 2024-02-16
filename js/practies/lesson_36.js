"use strict";

let str = "some";
let strObj = new String(str);

// console.log(typeof(str));
// console.log(typeof(strObj));

//console.dir([1,2,3]);

const soldier = {
	health:400,
	armor:100,
	sayHello: function(){
		console.log("Hello");
	}
};

// const john = {
// 	health:100
// };


//устаревший вариант

//john.__proto__ = soldier;
//console.log(john.armor)

const john = Object.create(soldier); //для создания прототивных связей

Object.setPrototypeOf(john, soldier); //создаем объект с определнным прототипом
john.sayHello();


