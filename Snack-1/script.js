//*Snack 1
//*1. Creare un oggetto che rappresenti un giocatore di basket, con le seguenti proprietà:
//- Codice giocatore
//- Nome
//- Cognome
//- Età
//- Media punti fatti per partita
//- Percentuale di successo per tiri da 3 punti
//*2. Generare tramite delle funzioni le statistiche di gioco, secondo queste regole:
//- il codice giocatore deve essere formato da 3 lettere maiuscole casuali e 3 cifre casuali
//- la media punti fatti per partita deve essere compresa tra 0 e 50
//- la percentuale di successo per tiri da 3 punti deve essere compresa tra 0 e 100
//*3. Stampare Nome, cognome, età e codice giocatore.
//*4. Creare un array di 10 giocatori di basket, con le regole sopra indicate
//*5. Creare un nuovo array con i giocatori che hanno una media di punti superiore a 35 e la percentuale di successo per i tiri da 3 punti superiore all’80%.
const letters = 'ABCDEFGHILMNOPQRSUTVZ';
const numbers = '0123456789';


//*1.
const playerCard = {
    idNumber: randomGen (3, letters).concat(randomGen (3, numbers)),
    fistName: 'Mario',
    lastName: 'Rossi',
    age: 27,
    pointsPerMatch: randomNum (0, 50),
    rateShotX3: randomNum (0, 100),
};
console.table(playerCard);




/***********************************************************
 * *FUNCTION
************************************************************/

//Random resoult
function randomGen (numXGen, source) {
    let resoult= '';

    for (let i=0; i<numXGen; i++) {
        resoult += source.charAt(Math.floor(Math.random()* source.length));
    }

    return resoult;
}

//Random number generator
function randomNum (min, max) {
    let resoult= ( Math.floor( Math.random()*( max-min ) +1 )-min );
    return resoult;
}