// Scrivi una funzione che accetti tre argomenti:
// un array e due numeri (“a” più piccolo di “b” e “b” grande al massimo quanto il numero di elementi dell’array). 
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra “a” e “b”

// var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// var a = < b;
// var b = max array.length;

// const myFunction3 = () => 'pippo';
// console.log(myFunction3());

// function getRandomInt(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min)) + min; //Il max è escluso e il min è incluso
// }

const getRandom = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //Il max è escluso e il min è incluso
}

var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var b = (getRandom(1, array.length)) 
var max = b 
var min = a < b;


console.log(getRandom(min, max));