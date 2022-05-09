let choice = "";
let n = 0;
do{
    choice = prompt("Pari o Dispari?");
    choice = choice.toLowerCase();
} while (!(choice=="pari") && !(choice=="dispari"));

do{
    n = prompt("Inserisci un numero da 1 a 5");
} while (isNaN(n) || (n>5) || (n<1));
n += randomNumber();;
if (choice === isEven(n)){
    alert ("Hai Vinto! :D");
} else {
    alert ("Hai Perso! D:");
};

/* FUNCTIONS */
function randomNumber(){
   const randomNumber = Math.floor(Math.random() * 5) + 1;
   return randomNumber;
};

function isEven(number){
    if (number%2==0){
        return "pari";
    }
    return "dispari";
}