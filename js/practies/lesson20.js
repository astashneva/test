"use srict";

const num = 51;

if (num < 49){
	console.log("error");
} else if (num > 100)
{
	console.log("много");
} else {
	console.log ("ок");
}

(num == 50) ? console.log ("ок") : console.log("error");

switch (num) {
case 49:
	console.log("Неверно");
	break;
case 100:
	console.log("Неверно");
	break;
case 50:
	console.log("Верно!");
	break;
default:
	console.log("Не в этот раз");
	break; 

}