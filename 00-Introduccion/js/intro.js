// pedimos dstos  por navegador  se parsean en Number para hacer operaciones matematicas

let ant= Number(prompt("ingrese el numero de campers antiguos"))
let nue= Number(prompt("ingrese el numero de campers nurvos"))

/* estamos mostrando por alertas en el navegador
    alert(mostrar)
    let mostrar = `el numero de sistemas operativos a instalar es: ${ant+nue}`
*/

// pintamos en  el html
document.getElementById("mostrar").innerHTML = `<p> el numero de sistemas operativos a instalar es: ${ant+nue}</p>`

