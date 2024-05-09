/* STRICT MODE */
"use strict";

console.log("Script caricato correttamente!");

//Andiamo a leggere la mail inserita dal utente e l assegnamo alla variabile email
let email = prompt("Inserisci la tua mail: ");
//Creiamo un array con le mail che il nostro programma potrà accettare
const emailCheck = ['emanuele.cozzolino18@libero.it', 'paolo.dunzioni@libero.it', 'cristian.cosenza@gmail.com', 'gaetano.frascolla@gmail.com'];

console.log(email)

//andiamo a creare questa variabile booleana che andremo a manipolare successivamente
let mailValidate = false;

//Conforinatiamo la mail inserita dal utente se combacia con una presente nel nostro array la nostra variabile booleana diventerà vera
for (let i = 0; i < emailCheck.length; i++) {

    if (email === emailCheck[i]) {
        mailValidate = true;
        break;
    }
}

if (mailValidate === true) console.log("Mail valida accesso in corso"); //Se la nostra varabile sarà diventata vera la mail è uguale e quindi possiamo entrare
else console.log("Mail non valida!"); //Altrimenti nop


