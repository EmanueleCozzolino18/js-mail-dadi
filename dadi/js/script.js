/* STRICT MODE */
"use strict";

console.log("Script caricato correttamente!");


//ANDIAMO A GENERARE I NUMERI DA UNO A SEI PER UTENTE E PER COMPUTER
const dadoUtente = Math.floor((Math.random() * 6) + 1);

console.log('User Roll: ', dadoUtente);

const dadoComputer = Math.floor((Math.random() * 6) + 1);

console.log('Computer Roll: ', dadoComputer);

