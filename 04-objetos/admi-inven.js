let productos = [];

function validar(nombre) {
    const existe = productos.some(producto => producto.nombre === nombre);
    if (existe) {
        return false;
    }
    return true;
}

function agregarProducto(nombre, precio) {
    const producto = {
        nombre: nombre,
        precio: precio
    };

    if (validar(nombre)) {
        productos.push(producto);
        alert("Agregado exitosamente")
        mostrarProductoWeb()
    } else {
        alert("ID duplicado, no se agrego el producto.");
    }
}

function eliminarProducto(nombre) {
    let encontrado = false;

    for (let i = 0; i < productos.length; i++) {
        if (productos[i].nombre === nombre) {
            const productoEliminado = productos.splice(i, 1)[0];
            console.log(`Producto con id ${productoEliminado.id} eliminado.`);
            encontrado = true;
            break;
        }
    }

    if (!encontrado) {
        console.log("Producto no encontrado.");
    }
}

let mostrar = () => console.log(productos);

function buscarProducto(nombre) {
    const producto = productos.find(producto => producto.nombre === nombre);

    if (producto) {
        console.log(`Producto encontrado con id: ${producto.id}, nombre: ${producto.nombre}, precio: ${producto.precio}`);
    } else {
        console.log("Producto no encontrado");
    }
}


let mostrarProductoWeb = () => {
    let  pro = productos
    for (let i = 0; i < pro.length; i++) {
        document.getElementById("mostrarFilas").innerHTML = `
        <tr>
            <td>${pro[i].nombre}</td>
            <td>${pro[i].precio}</td>
        </tr>
    `    
    }
   
};

let eventoInsertar = ()=> {
    document.getElementById("btnInsertar").addEventListener("click", () => {
        let nombre = (prompt("ingresa el nombre del producto"));
        let precio = Number((prompt("ingresa el nombre del producto")));
        agregarProducto(nombre, precio)
    });
}

eventoInsertar();







