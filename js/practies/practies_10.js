// Задачи:

// 1) Напишите функцию showExperience, которая будет принимать в себя объект со всеми данными и возвращать строку с опытом.

// Пример:

// showExperience(personalPlanPeter) => '1 month'

// P.S. желательно использовать деструктуризацию, но не обязательно

// 2) Напишите функцию showProgrammingLangs, которая будет принимать в себя объект со всеми данными и возвращать строку в нужном виде.

// Пример:

// showProgrammingLangs(personalPlanPeter)  =>

// "Язык js изучен на 20% Язык php изучен на 10%"

// Причем функция должна работать вне зависимости от количества языков. Если ни один не указан, то возвращается пустая строка.


// 3) Создайте метод showAgeAndLangs внутри объекта personalPlanPeter. При его вызове метод будет принимать в себя объект и возвращать строку в нужном виде.


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
	},
	showAgeAndLangs: function(personalPlanPeter){
		str =`Мне ${personalPlanPeter.age} и я владею языками:`;
		const{languages} = personalPlanPeter.skills;

		languages.forEach(function(lang) {
			str += `${lang.toUpperCase()} `;
		});
		// for(let key in languages){
		// 	str+=` ${languages[key]}`;
		// }
		return str;
	}
};

console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));

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