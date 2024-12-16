const doTask = (iterations) => {
    let res 
    const numbers = [];
    for (let i = 0; i < iterations; i++) {
        const number = 1 + Math.floor(Math.random() * 6);
        numbers.push(number);
        if (number === 6) {
            res = {
                error: true,
                iter: i + 1,
                message: "Se ha sacado un 6"
            };
            break
        }
        else {
            res =  {
                error: false,
                value: numbers
            };
        }
    }

    setTimeout( async () => {
        if(res.error){
            mostrarite = await res.iter;
            mostrarmen = await res.message;
            console.log("en la iteracion: " + mostrarite);
            console.log(mostrarmen);
        }

        else{
            mostrarval = await res.value;
            console.log(mostrarval)
        }
    }, 3000);
}


    console.log("inicio");
    doTask(10);
    console.log("fin");