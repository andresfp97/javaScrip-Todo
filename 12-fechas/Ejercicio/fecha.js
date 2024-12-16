
let cantMulta
let sancion = true;

let calcularDias = (fechaPactada, fechaEntrega) => {
    const milliDia = 1000 * 60 * 60 * 24
    let diferencia =  Math.abs(Math.floor((fechaPactada.getTime()-fechaEntrega.getTime() ) / milliDia));
    return diferencia;
}

let multa = (dias) => {

    if (dias <= 3) {
        cantMulta = 7000 * dias
    }

    if (dias > 3) {
        cantMulta = 10000 * dias
        sancion = false
    }

    console.log(`la multa a pagar es ${cantMulta}, y el estado de prestamo es: ${sancion}`)
} 


const fePactada = new Date (2024, 11, 1);
const feentrega = new Date (2024, 11, 6);

let mostrarDias =calcularDias(fePactada, feentrega);
console.log(`los dias de retraso fueron ${mostrarDias}`);
let mostrarMulta = multa(mostrarDias);

