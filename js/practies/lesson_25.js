"use strictt";

// //ФУНКЦИИ



// function showFirstMessage(text) {
// 	console.log(text);
// }

// showFirstMessage("Hello world!");

// // function calc (a,b){
// // 	return(a + b);
// // }

// // console.log(calc(4,3));
// // console.log(calc(5,6));

// function ret(){
// 	let num = 50;
// 	return num;
// }

// const anotherNum = ret();
// console.log(anotherNum);

// // function expression

// const logger = function(){
// 	console.log("hello!");
// };
// logger();

// //Стрелочные функции
// const calc = (a,b) => a + b;
// const calc2 = (a,b) => { return a + b;};

// const usdCurr = 28;
// const eurCurr = 32;
// const discout = 0.9;

// function convert (amount,curr){
// 	return curr*amount;
// }

// convert(500, usdCurr);
// convert(500, eurCurr);

// function promotion (result){
// 	console.log(result*discout);
// 	return function(){};
// }

// promotion(convert(500, usdCurr));


// function test (){
// 	for (let i = 0; i<5; i++){
// 		console.log(i);
// 		if(i=== 3) return;
// 	}
// 	console.log("Done");
// }
// test();


// function returnNeighboringNumbers(number) {
// 	arr = [];
// 	arr[0] = number - 1;
// 	arr[1] = number;
// 	arr[2] = number + 1;
// 	return arr;

// }

// console.log(returnNeighboringNumbers(5));

// function returnNeighboringNumbers2(num) {
// 	return [num - 1, num, num + 1];
// }
// console.log(returnNeighboringNumbers2(5));





function getMathResult(num, times) {
	if (typeof(times) !== "number" || times <= 0) {
		return num;
	}

	let str = "";

	for (let i = 1; i <= times; i++) {
		if (i === times) {
			str += `${num * i}`;
			// Тут без черточек в конце
		} else {
			str += `${num * i}---`;
			// Это тоже самое, что и
			// str = str + num * i + "---"
		}
	}

	return str;
}

console.log(getMathResult(10, 5));