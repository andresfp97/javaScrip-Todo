function obtenerIngredientes() {
    return new Promise((resolve, reject) => {
        console.log("pedir ingredientes");
        let nRamdon = Math.ceil(Math.random() * 9 + 0);

        if (nRamdon % 2 == 0) {
            setTimeout(() => {
                resolve("Ingredientes obtenidos");
            }, 2000);

        } else {
            reject("ERROR Pedir");
        }
    });
}

function mezclarIngredientes() {
    return new Promise((resolve, reject) => {
        console.log("...Mezclando");
        let nRamdon = Math.ceil(Math.random() * 9 + 0);


        if (nRamdon % 2 == 0) {
            setTimeout(() => {
                resolve("Mezclado");
            }, 1000);

        } else {
            reject(" ERROR mezclando");

        }

    });
}


function cocinarIngredientes() {
    return new Promise((resolve, reject) => {
        console.log("... cocinando");
        let nRamdon = Math.ceil(Math.random() * 9 + 0);


        if (nRamdon % 2 == 0) {
            setTimeout(() => {
                resolve("cocinado");
            }, 3000);

        } else {
            reject("ERROR cocinando");

        }

    });
}


async function prepararReseta() {
    try {
        const obtener = await obtenerIngredientes();
        console.log(obtener);

        const  mezclar = await mezclarIngredientes();
        console.log(mezclar);

        const cocinar = await  cocinarIngredientes();
        console.log(cocinar);

        console.log("¡Disfruta tu comida!");

    } catch (error) {
        console.log(error)
    }

}


prepararReseta();