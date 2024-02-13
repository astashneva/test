// методы и свойства строк и чисел

"use strictt";

const str = "test";
const arr = [1, 2, 4];

console.log(str.length);
console.log(arr.length);

console.log(str[2] = "d");
console.log(str);


//методы изменения регистра

//при использовании метода изначальное значение не изменяется
console.log(str.toUpperCase());
console.log(str);

//поиск подстроки

const fruit = "Some fruit";

console.log(fruit.indexOf("fruit")); // с какой позиции начинается
console.log(fruit.indexOf("q")); //если такого элемента нет

//методы изменения строк


const logg = "Hello World";

console.log(logg.slice(6,11)); // во втором аргументе end включаем end+1
console.log(logg.slice(6)); // вырезаем строку до конца

console.log(logg.substring(6,11));

console.log(logg.substr(6,5)); //сколько символов необходимо вырезать

const num = 12.2;
console.log(Math.round(num));

const test = "12.2px";
console.log(parseInt(test)); //переводит число в другую систему счисления
console.log(parseFloat(test));