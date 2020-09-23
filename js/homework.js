"use strict";


const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
// console.log(numberOfFilms);

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

// const a = prompt('Один из последних просмотренных фильмов?', '');
// const b = prompt('На сколько оцените его?', "");
// const c = prompt('Один из последних просмотренных фильмов?', '');
// const d = prompt('На сколько оцените его?', "");
// personalMovieDB.movies.logan = 


// personalMovieDB.movies[c] = d;


for (let i = 0; i < 2; i++) {
  const a = prompt('Один из последних просмотренных фильмов?', '');
  const b = prompt('На сколько оцените его?', "");

  if (a != null && b != null && a != '' && b != '' && a.length < 50) {
    personalMovieDB.movies[a] = b;
    console.log('done');
  } else {
    console.log('error');
    i--;
  }
}
if (personalMovieDB.count < 10) {
  console.log("Просмотренно довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
  console.log("Вы классический зритель");
} else if (personalMovieDB.count >= 30) {
  console.log("Вы киноман");
} else {
  console.log('Произошла ошибка');
}


// console.log(personalMovieDB);