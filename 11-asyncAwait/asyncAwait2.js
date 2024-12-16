const datos = [
    {
        id: 1,
        title: "iron man",
        year: 2008
    },
    {
        id: 2,
        title: "Spiderman: HomeComing",
        year: 2017
    },
    {
        id: 3,
        title: "Avenger: Endgame",
        year: 2019
    },

]

// sincrono
const getDatos = () => {
    return datos;
}

// con async / await
function obtenerDatos() {
    setTimeout( async () => {
        const datos = await getDatos();
        console.log(datos)
    }, 3000);
    
}

console.log ("Inicio");
obtenerDatos()
console.log ("Fin");