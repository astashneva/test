let numberOfFilms;

function start(){
	 numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели", "");

	 while(numberOfFilms == "" || numberOfFilms ==null || isNaN(numberOfFilms)){
		numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели", "");
	 }
}

start();

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



function rememberMyFilms(){
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
}

rememberMyFilms();




function detectPersonalLevel(){
	if (personalMovievDB.count < 10){
		console.log ("Просмотрено мало фильмов");
	} else if(personalMovievDB.count >= 10 && personalMovievDB.count < 30){
		console.log("Вы классический зритель");
	} else if(personalMovievDB.count >= 30){
		console.log("Вы киноман");
	
	}else{
		console.log("Произошла ошибка");
	}
}

detectPersonalLevel();

function showMyDb(hidden){
	if(!hidden){
		console.log(personalMovievDB);
	}
}

showMyDb(personalMovievDB.privat);

function writeYourGenres(){
	for(let i = 1 ; i<=3; i++){
		personalMovievDB.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}`);;
	}
}writeYourGenres();