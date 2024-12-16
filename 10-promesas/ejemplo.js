const miPromesa = new Promise((resolve, reject) => {
    const exito = true;
    if (exito) {
        console.log("esperando...")
        setTimeout(() => {
            resolve("valor que devuelve la promesa");
        }, 2000);
    } else {
        reject("hubo un error en la operacion")
    }
});
console.log("INICIO")

miPromesa
    .then(res => {
        console.warn("no hubo error en la promesa");
        console.log(res)
    })

    .catch(res => {
        console.error("Error en la promesa");
        console.log(res);

    });

console.log("FIN")