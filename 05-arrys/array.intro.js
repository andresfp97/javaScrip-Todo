// creacion de array
let frutas = ["manzana", "pera", "uva"];

// creacion de una instancia de objeto

let campers = new Array ("jinder", "marlon");
let salas = new Array(3)
salas[0] = "Sputnik"
console.log(salas[0]);

// recorrido de un array por pocisiones

for (let i = 0; i< frutas.length; i++) {
        console.log(frutas[i])
    }
console.log("=".repeat(40))
// recorrido por elementos (for of)

for (let fruta of frutas) {
    console.log(fruta)
}
console.log("*".repeat(40))

frutas.forEach((f) => console.log(f));
console.log("+".repeat(40))

// recorrido  con funciones lambdas
frutas.map((f) => console.log(f +"argentinas"));
// frutas.filter((f,pos)=> console.log(f + " - "+ pos));
console.log("-".repeat(40))
frutas.filter(f => f.length < 5).map(f => console.log(f));

