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

//First name array
const fistName = ['LeBron','Michael','Shaquille','Kobe','Kareem','Kevin','Magic','Russel','Larry','Scottie','James','Stephen','Chris'];
//Last name array
const lastName = ['James','Jordan',"O'Neal",'Bryant','Abdul-Jabbar','Durant','Johnson','Westbrook','Bird','Pippen','Harden','Curry','Paul'];

//Player team
//*1.2.3.4.
const team = [
    {
        idNumber: makeId(6),
        fistName: randomValue(fistName),
        lastName: randomValue(lastName),
        age: randomNum (18, 30),
        pointsPerMatch: randomNum (0, 50),
        rateShotX3: randomNum (0, 50),
    },
    {
        idNumber: makeId(6),
        fistName: randomValue(fistName),
        lastName: randomValue(lastName),
        age: randomNum (18, 30),
        pointsPerMatch: randomNum (0, 50),
        rateShotX3: randomNum (0, 100),
    },
    {
        idNumber: makeId(6),
        fistName: randomValue(fistName),
        lastName: randomValue(lastName),
        age: randomNum (18, 30),
        pointsPerMatch: randomNum (0, 50),
        rateShotX3: randomNum (0, 100),
    },
    {
        idNumber: makeId(6),
        fistName: 'Paolo',
        lastName: 'Duzioni',
        age: 28,
        pointsPerMatch: 45,
        rateShotX3: 99,
    },
    {
        idNumber: makeId(6),
        fistName: randomValue(fistName),
        lastName: randomValue(lastName),
        age: randomNum (18, 30),
        pointsPerMatch: randomNum (0, 50),
        rateShotX3: randomNum (0, 100),
    },
    {
        idNumber: makeId(6),
        fistName: randomValue(fistName),
        lastName: randomValue(lastName),
        age: randomNum (18, 30),
        pointsPerMatch: randomNum (0, 50),
        rateShotX3: randomNum (0, 100),
    },
    {
        idNumber: makeId(6),
        fistName: randomValue(fistName),
        lastName: randomValue(lastName),
        age: randomNum (18, 30),
        pointsPerMatch: randomNum (0, 50),
        rateShotX3: randomNum (0, 100),
    },
    {
        idNumber: makeId(6),
        fistName: randomValue(fistName),
        lastName: randomValue(lastName),
        age: randomNum (18, 30),
        pointsPerMatch: randomNum (0, 50),
        rateShotX3: randomNum (0, 100),
    },
    {
        idNumber: makeId(6),
        fistName: randomValue(fistName),
        lastName: randomValue(lastName),
        age: randomNum (18, 30),
        pointsPerMatch: randomNum (0, 50),
        rateShotX3: randomNum (0, 100),
    },
    {
        idNumber: makeId(6),
        fistName: randomValue(fistName),
        lastName: randomValue(lastName),
        age: randomNum (18, 30),
        pointsPerMatch: randomNum (0, 50),
        rateShotX3: randomNum (0, 100),
    },
]
console.table(team);

//Filter the top player with super statistics
//*5.
const topPlayers = team.filter( team => team.pointsPerMatch >= 35 && team.rateShotX3 >= 80);
console.table(topPlayers);

/***********************************************************
**FUNCTION**************************************************
************************************************************/

//Random ID
function makeId(length) {
    let resoult = '';

    const letters = 'ABCDEFGHILMNOPQRSUTVZ';
    const numbers = '0123456789';

    for (let i=0; i < length/2; i++) {
        resoult += letters.charAt(Math. floor(Math. random() * letters. length));
        resoult += numbers.charAt(Math. floor(Math. random() * numbers. length));
    }

    return resoult;
};

//Random value from array
function randomValue(arrayRef) {
    const random = Math.floor(Math.random() * arrayRef.length);
    return arrayRef[random];
};

//Random number generator
function randomNum (min, max) {
    return ( Math.floor( Math.random()* (max - min ) + min ) );
};