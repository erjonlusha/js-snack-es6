// L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore.

var a = Number(prompt("Inserisci il Primo numero"));
var b = Number(prompt("Inserisci il secondo numero"));

const maggiore = (a, b) => {
        if (a>b) {
        console.log(a);
    } else {
        console.log(b);
    }
};

maggiore(a, b);