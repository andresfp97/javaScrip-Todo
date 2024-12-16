// export function agregarDias(fecha, dias) {
//         let nuevaFecha = new Date(fecha);
//         nuevaFecha.setDate(nuevaFecha.getDate() + dias);
//         return nuevaFecha;
//     }

 let verificarEstado  = (fecha)=>{
        let fechaAhora = new Date();
        const milliDia = 1000 * 60 * 60 * 24
        console.log(fechaAhora);
        console.log(fecha);

        let diferencia = (Math.floor((fecha.getTime()-fechaAhora.getTime() ) / milliDia)+1);
        return diferencia;
 }

const feentrega = new Date (2024, 11, 9);

let mostrarDias =verificarEstado(feentrega);
console.log(`los dias de retraso fueron ${mostrarDias}`);






    
    


