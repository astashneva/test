"use strict";

//call-back-функции 
//функция, которая должна быть выполнена после того, 
//как другая ф-ция завершила выполнение

function first(){
	//do something
	setTimeout(function(){
		console.log(1);
	}, 500);
}

function second(){
	console.log(2);
}

first();
second();


function learnJS(lang, callback){
	console.log(`Я учу ${lang}`);
	callback();
}


learnJS("JavaScript", function(){
	console.log("Я прошла этот урок!");
}); // пример передачи анонимной функции

//другой вариант с созданной функцией

function done(){
	console.log("Я прошла этот урок!");
}

learnJS("JS", done); //!передаем функцию без (), потому что мы её не вызываем

