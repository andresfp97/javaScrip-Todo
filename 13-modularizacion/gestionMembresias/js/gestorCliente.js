import {agregarDias} from "./gestorFecha.js";
let clientes = []

 export let mostrarClientes = () => {
    let filas = ""; 

    for (let i = 0; i < clientes.length; i++) {
       filas += `
            <tr class="hover:bg-gray-100 border-t">
              <td class="px-6 py-4 text-sm">${clientes[i].nombre}</td>
              <td class="px-6 py-4 text-sm">${clientes[i].fecIncri}</td>
              <td class="px-6 py-4 text-sm">${clientes[i].membresia}</td>
              <td class="px-6 py-4 text-sm">${clientes[i].fecActivo}</td>
              <td class="px-6 py-4 text-sm">
                <span class="px-3 py-1 text-xs font-semibold text-green-800 bg-green-200 rounded-full">${clientes[i].estado}</span>
              </td>
            </tr>
            `
    }
    document.getElementById("elemTabla").innerHTML= filas
    
}

 export let registarCliente = () => {
    const form = document.getElementById('FormRegistro');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        console.log(data.fecha)
    
        let fechaFin = agregarDias( Date(data.fecha), Number(data.dias));
        fechaFin = fechaFin.toLocaleDateString('sv-SE');
    
        let cliente = {
            nombre: data.nombre,
            fecIncri: data.fecha,
            membresia: data.dias,
            fecActivo: fechaFin,
            estado: true
        }
        clientes.push(cliente);
        console.log(clientes);


        mostrarClientes();
        form.reset();
    });


}

registarCliente();









