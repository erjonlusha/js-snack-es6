// Creare un array di oggetti di squadre di calcio. 
// Ogni squadra avrà diverse proprietà: 
// nome, punti fatti, falli subiti.

// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.

var squadre = [
{
    nome : "Juve",
    puntiFatti : 0,
    falliSubiti : 0
},
{
    nome : "Milan",
    puntiFatti : "10",
    falliSubiti : 0
},
{
    nome : "Inter",
    puntiFatti : "10",
    falliSubiti : 0
},
{
    nome : "Roma",
    puntiFatti : "10",
    falliSubiti : 0
}
]


// Generare numeri random al posto degli 0 nelle proprietà:punti fatti e falli subiti
const getRandom = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //Il max è escluso e il min è incluso
}

console.log(squadre);

    for (var key in squadre) {
       squadre[key].puntiFatti = getRandom(0, 15);
       squadre[key].falliSubiti = getRandom(0, 30);
    }