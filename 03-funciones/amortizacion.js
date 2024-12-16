// let valor= Number(prompt("Valor del credito a solicitar?", 150_000));
let valor1 = 150_000;
const INTERES = 0.12;
const TIEMPO = 12;


function valorTotalMensual(valor, interes, tiempo) {
    let valori = valor
    let valorTotal = valori + (valori * interes);
    let valorMensual = valorTotal / tiempo;
    mostrarWEB(valori, valorTotal, valorMensual)
}

function mostrarWEB(valor, vTotal, vMensual) {
    document.write(`
        <table  class="table">
        <tr>
            <th class="border border-slate-600" >Monto de Credito</th>
            <th class="border border-slate-600"> ${valor}</th>
        </tr>
        <tr>
            <th class="border border-slate-600" >Tasa de interes (anual) </th>
            <th class="border border-slate-600"> 12% </th>
        </tr>
        <tr>
            <th class="border border-slate-600" >Numero de pagos mensuales </th>
            <th class="border border-slate-600">12</th>
        </tr>
        <tr>
            <th class="border border-slate-600" >Valor Total</th>
            <th class="border border-slate-600" >$${vTotal}</th>
        </tr>
        <tr>
            <th class="border border-slate-600">Valor Mensual</th>
            <th class="border border-slate-600">$${vMensual}</th>
        </tr>
        </table>
        
        `);
};
function encabezadoWEB() {

    document.write(`<table class="table " >
        <tr>
            <th class="border border-slate-600" >mes</th>
            <th class="border border-slate-600" >valor</th>
            <th class="border border-slate-600" >Valor Total </th>
            <th class="border border-slate-600" >Capital</th>
            <th class="border border-slate-600">Interes Total </th>
            <th class="border border-slate-600">Total</th>
        </tr>
        `);
}

function cuerpoWEB(mes, valor, valorTotal, capital, interes, total) {

    let fila = `<tr>
                    <td class="border border-slate-700">${mes}</td>
                    <td class="border border-slate-700">$${valor}</td>
                    <td class="border border-slate-700">${valorTotal}</td>
                    <td class="border border-slate-700">$${capital}</td>
                    <td class="border border-slate-700">${interes}</td>
                    <td class="border border-slate-700">$${total}</td>
                </tr>`;

    document.write(fila);

};

const pieWEB = () => document.write("</table>");

function DetallesPrestamo(valor, interes, tiempo) {

    let valor1 = valor
    let valorTotal = valor + (valor * interes);
    let valorMensual = valorTotal / tiempo;
    const abonoCapital = 12_500
    const abonoInteres = 1_500
    let total = abonoCapital + abonoInteres
    encabezadoWEB()

    for (let mes = 1; mes <= tiempo; mes++) {
        valor1 = valor1 - abonoCapital;
        valorTotal = valorTotal - valorMensual

        console.log(`${mes}  ${valor1} ${valorTotal}`)
        cuerpoWEB(mes, valor1, valorTotal, abonoCapital, abonoInteres, total)

    }

    pieWEB()
}


valorTotalMensual(valor1, INTERES, TIEMPO);
DetallesPrestamo(valor1, INTERES, TIEMPO);


