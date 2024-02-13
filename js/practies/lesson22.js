"use strict";

//let num = 50;

// while (num <= 55){
// 	console.log(num);
// 	num++;
// }

// do {
// 	console.log(num);
// 	num++;
// }
// while (num < 55);


// for (let i = 1; i< 10; i++){
// 	if(i ==6){
// 		// break;
// 		continue;
// 	}
// 	console.log(i);
// }

// for (let i = 0; i < 3; i++){
// 	console.log(i);
// 	for (let j = 0; j < 3; j++){
// 		console.log(j);
// 	}
// }

// *
// **
// ***
// ****
// *****
// ******

// let result = "";
// const length = 7;

// for ( let i = 1; i< length; i++){
// 	for (let j = 0; j< i; j++){
// 		result += "*"; 
// 	}
// 	result += "\n";
// }


// console.log(result);


// first: for (let i = 0; i < 3; i++){
// 	console.log(`First level: ${i}`);
// 	for (let j = 0; j < 3; j++){
// 		console.log(`Second level: ${j}`);
// 		for (let k = 0; k < 3; k++){
// 			if(k === 2) continue first;
// 			console.log(`Third level: ${k}`);
// 		}
// 	}
// }

// for(let i = 20; i >= 10; i--){
// 	if(i ===13) break;
// 	console.log(i);
// }

// for( let i = 2; i<=10; i+=2){
// 	console.log(i);
// }


// for (let i = 2; i <= 16; i++) {
// 	if (i % 2 === 0) {
// 		continue;
// 	} else {
// 		console.log(i);
// 	}
// }


// let num4 = 2;

// while(num4<=16){
// 	if(num4 % 2 === 0){
// 		num4++;
// 		continue;
// 	}
// 	else {
// 		console.log(num4);
// 	}
// 	num4++;
// }

// while (num <= 55){
// 	console.log(num);
// 	num++;
// }

const arrayOfNumbers = [];

for (let i = 0; i<=5; i++){
	arrayOfNumbers[i] = i+5;
}

console.log(arrayOfNumbers);

//ИЛИ


for (let i = 5; i < 11; i++) {
	arrayOfNumbers[i - 5] = i;
}

console.log(arrayOfNumbers);
