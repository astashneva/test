const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели", "");

const personalMovievDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: {},
	privat: false
};

// const a = prompt("Один из последних просмотренных фильмов?", ""),
// 	b = prompt("На сколько его оцените?", ""),
// 	c = prompt("Один из последних просмотренных фильмов?", ""),
// 	d = prompt("На сколько его оцените?", "");

// personalMovievDB.movies[a] = b;
// personalMovievDB.movies[c] = d;

for(let i=0; i< 2; i++){
	const a = prompt("Один из последних просмотренных фильмов?", ""),
		b = prompt("На сколько его оцените?", "");

	if(a != null && b!=null && a!="" && b!="" && a.length < 50){
		personalMovievDB.movies[a] = b;
		console.log("done");
	}
	else {
		console.log("error");
		i--; // если условие не выполнилось, то вернемся на 1 швг назад
	}

}

if (personalMovievDB.count < 10){
	console.log ("Просмотрено мало фильмов");
} else if(personalMovievDB.count >= 10 && personalMovievDB.count < 30){
	console.log("Вы классический зритель");
} else if(personalMovievDB.count >= 30){
	console.log("Вы киноман");

}else{
	console.log("Произошла ошибка");
}



console.log(personalMovievDB);