let s = 0;
do {
    s = prompt("Inserisci una parola/stringa");
} while(!(isNaN(s)));
if (isPalindrome(s)){
    alert (`La parola/stringa ${s} è palindroma.`);
} else {
    alert (`La parola/stringa ${s} non è palindroma.`);
};
/* FUNCTIONS */
function isPalindrome(string){
    for (let i=0; i<string.length - 1; i++){
        if (string[i]!==(string[string.length - 1 - i])){
            return false;
        }
        return true;
    };
};