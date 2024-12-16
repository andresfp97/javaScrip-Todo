// Averiguar si una cadena es palindorme.
// Debe usar ciclos. NO USAR FUNCIONES DE CADENA

// FUNCIONES NOMBRADAS
function esPalidrome(cad) {
    let lcad = cad.length - 1;
    for (let i = 0; i <= lcad / 2; i++) {
        // Manera hecha en clase
        // Se compara la primera letra con la última, la segunda con la penúltima, etc
        let lini = cad[i];
        let lfin = cad[lcad - i];

        if (lini !== lfin) {
            return false;
        }
    }
    return true;
}
// funcion expresiva o anonima
const anonima = function (cad) {
    let lcad = cad.length - 1;
    for (let i = 0; i <= lcad / 2; i++) {
        // Manera hecha en clase
        // Se compara la primera letra con la última, la segunda con la penúltima, etc
        let lini = cad[i];
        let lfin = cad[lcad - i];

        if (lini !== lfin) {
            return false;
        }
    }
    return true;
}

// funciones flecha
 const funflecha = (cad)=> {
    let lcad = cad.length - 1;
    for (let i = 0; i <= lcad / 2; i++) {
        // Manera hecha en clase
        // Se compara la primera letra con la última, la segunda con la penúltima, etc
        let lini = cad[i];
        let lfin = cad[lcad - i];

        if (lini !== lfin) {
            return false;
        }
    }
    return true;
 }

let cad = "anilina"; //par
// let cad = "reconocer" //impar

 const msgEsPalindrome = (cad)=> {
    console.log(funflecha(cad)? "es palindromee" : "no es paldrindrome.");
    
 }
console.log(esPalidrome(cad) ? "Es palindrome." : "No es palindrome.");

console.log(anonima("reconocer")? "es palindrome" : "no es paldrindrome.");

console.log(msgEsPalindrome("reconocer"));