"use strict";

//const obj = new Object();
const options = {
	name: "test",
	width: 1024,
	height: 1024,
	colors:{
		border: "black",
		bg: "red"
	},
	makeTest: function(){
		console.log("Test");
	}
};

//options.makeTest(); //запускаем метод объекта

//Деструктуризация объекта

const {border, bg} = options.colors;
console.log(border);

//Задача 10.2

const personalPlanPeter = {
	name: "Peter",
	age: "29",
	skills: {
		languages: ["ru", "eng"],
		programmingLangs: {
			js: "20%",
			php: "10%"
		},
		exp: "1 month"
	}
};

function showProgrammingLangs(plan) {
	let str = "";
	const {programmingLangs} = plan.skills;
	for(let key in programmingLangs){
		str +=`Язык ${key} изучен на ${programmingLangs[key]} \n`;
	}

	return str;

}

console.log(showProgrammingLangs(personalPlanPeter));


function showExperience(plan) {
	const {exp} = plan.skills; //делаем деструктуризацию
	//console.log(plan.exp);
	return exp;

}

console.log(showExperience(personalPlanPeter));



//console.log(Object.keys(options).length); //получаем массив со всеми ключами и определяем количество элементов

// console.log(options.name);

// //удаление

// delete options.name;
// console.log(options);

// console.log(options["colors"]["border"]);

// let counter = 0;


// for(let key in options){
// 	if(typeof(options[key]) === "object"){
// 		for(let i in options[key]){
// 			console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
// 			counter++;
// 		}
// 	} else{
// 		console.log(`Свойство ${key} имеет значение ${options[key]}`);
// 		counter++;
// 	} 
// }
// console.log(counter);



// for(let key in options){
// 	counter++;
// }
// console.log(counter);


