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

//  console.log("inicio")
//  console.log(getDatos())
//  console.log("fin")

// asincrono  con Callback

const getDatosAsynCallback = (callback) => {
    setTimeout(function () {
        console.log(callback())
    }, 3000)
}

// console.log("inicio")
// getDatosAsynCallback(getDatos);
// console.log("fin")

// promesas

const getDatosPromesa = () => {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            if (datos.length > 0) {
                resolve(getDatos())
            } else {
                reject("Error sin datos");
            }
        }, 3000)
    })
}

getDatosPromesa()
.then(datos => console.table(datos))
.catch(err => console.error(err));