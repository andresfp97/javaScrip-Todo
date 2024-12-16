// funcion que no hace nada 
function operation() {
    console.log("anderson");
}
// funcion que no hace nada  2
function operation1() {
    console.log("andres");
}
//  funcion callback  en funcion  nombrada 
function prueba(callback, num) {
    for (let i = 0; i < num; i++) {
        callback()
    }
}
// funcion callback en funcion flecha
let prueba1 = (callback, num) => {
    setTimeout(() => {
        for (let i = 0; i < num; i++) {
            callback() 
        }
    } ,3000)
}

// llamamos las funciones  para mirar los resultados por consola.

prueba(operation, 4);
setTimeout(() => {
    console.log("*".repeat(40))
} ,5000)

prueba1(operation1, 4);


