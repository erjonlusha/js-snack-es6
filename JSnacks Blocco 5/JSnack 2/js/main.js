// Scrivi una funzione che accetti una stringa come argomento e la ritorni girata 
// (es. Ciao -> oaiC)

/************ Arrow function **************/
// const myFunction3 = () => 'pippo';
// console.log(myFunction3());

var parola = prompt("inserisci una parola");


// function girata(parola) {
//     return parola.split("").reverse().join("")
// }

const girata = (parola) => parola.split("").reverse().join("");
console.log(girata(parola));

// parolaGirata = girata(parola);

// console.log(parolaGirata);