// Metodos utilizados con arreglos
let carros = [];
// agrega al final 
carros.push("Renault 4" , "Fiat" ,"Volvo", "Ferrari");
// elimina del final
carros.pop();
// elimina al inicio 
carros.shift();
// Agrega al inicio
carros.unshift("audi");
console.log(carros);
// Devuelve  una porcion del array
console.log(carros.slice(1,3));

carros.splice(1,2, "Mercedes", "Mazda", "Nissan");
console.log(carros);
console.log("JOIN: "+ carros.join("; "));

carros = carros.concat("Toyota", "Mitsubishi", ["Suzuki", "sabaru"]);
console.log(carros)

console.log(carros.indexOf("Toyota"));
console.log(carros.includes("Renault 4"));

let res = carros.reduce((ant, curr)=> ant += curr.length <=5 ?`, ${curr}`: "", ant = "");
console.log(res);

