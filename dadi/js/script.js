/* STRICT MODE */
"use strict";

console.log("Script caricato correttamente!");


//ANDIAMO A GENERARE I NUMERI DA UNO A SEI PER UTENTE E PER COMPUTER
const dadoUtente = Math.floor((Math.random() * 6) + 1);

console.log('User Roll: ', dadoUtente);

const dadoComputer = Math.floor((Math.random() * 6) + 1);

console.log('Computer Roll: ', dadoComputer);

//ANDIAMO A CREARE LA CONDIZIONE PER VERIFICARE IL NUMERO VINCENTE
if (dadoUtente > dadoComputer) console.log(`L'utente ha vinto ${dadoUtente} > ${dadoComputer}`) //IN CASO IL NUMERO UTENTE E' MAGGIORE DEL COMPUTER L'UTENTE VINCE
else if (dadoUtente < dadoComputer) console.log(`Il computer ha vinto ${dadoComputer} > ${dadoUtente}`) //IN CASO IL NUMERO DEL COMPUTER E' MAGGIORE IL COMPUTER VINCE 
else console.log(`Entrambi i numeri sono uguali ${dadoUtente} = ${dadoComputer}`) //ALTRIMENTI SE SONO PARI NESSUNO VINCE