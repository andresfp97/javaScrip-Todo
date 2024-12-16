function myDisplayer(some){
    console.log(some)
}

function esPrimo(num){
    console.log(num, " es primo")
}

function esPar(num){
   return num % 2 == 0;
}
// simmulemos que se consulata la pagina de antecedentes de la policia. esta requiere el numero
// de identiicacion y nos devuelve si la persona con ese numero tiene antecedentes o no

const consultarPolicia = (callback)=>{
    setTimeout(()=>{
        const segDesde1970 = Math.floor(Date.now()/ 1000);
        if (!callback(segDesde1970)) {
            console.log(segDesde1970, "no tiene antecedentes")
        }
        else{
            console.log(segDesde1970, "tiene antecedentes")
        }
    }, 2000)
}

function calculadora( a , b, funCallback){
    let sum = a + b;
    funCallback(sum);
}

calculadora(5,5, myDisplayer);
calculadora(5,5, esPrimo);


consultarPolicia(myDisplayer);
consultarPolicia(esPrimo);
// consultarPolicia(esPar);
let tiempo = 3;
for (let i = 0; i < 7; i++) {
    setTimeout( i=> {
        console.log("Ejecucion"+i)
        consultarPolicia(esPar);

    }, tiempo++)
}