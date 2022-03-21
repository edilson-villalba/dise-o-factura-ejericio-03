const formDetalle = document.getElementById("formDetalle");

const inputCodigo = document.getElementById("inputCodigo");
const inputCantidad = document.getElementById("inputCantidad");
const selectNombreDet = document.getElementById("selectNombreDet");
const inputPrecio = document.getElementById("inputPrecio");
const inputPrecioTotal = document.getElementById("inputPrecioTotal");
const cuerpoTabla = document.getElementById("cuerpoTabla");
let arregloDetalle = [];
let arregloProductos = [
    {
        id: 1,
        nombre: "ARTICULO 1",
        precio: 10000
    },

    {
        id: 2,
        nombre: "ARTICULO 2",
        precio: 20000
    },

    {
        id: 3,
        nombre: "ARTICULO 3",
        precio: 30000
    },
    {
        id: 4,
        nombre: "ARTICULO 4",
        precio: 40000
    }
];
const llenarProductos = () => {
    arregloProductos.forEach((p) => {
        const option = document.createElement("option");
        option.value = p.id;
        option.innerText = p.nombre;
        selectNombreDet.appendChild(option);
    })
};
llenarProductos();  
const redibujarTabla = () => {
    cuerpoTabla.innerHTML = "";
    arregloDetalle.forEach((detalle) => {
        let fila = document.createElement("tr");
        fila.innerHTML =
                        `<td>${detalle.codigo}</td>
                        <td>${detalle.descripcion}</td>
                        <td>${detalle.cantidad}</td>
                        <td>${detalle.precio}</td>
                        <td>${detalle.monto_total}</td>`
        /* Boton Modificar */
        let tdModificar = document.createElement("td");
        let btnModificar = document.createElement("button");
        btnModificar.classList.add("btn", "btn-warning");
        btnModificar.innerText = "Modificar";
        tdModificar.appendChild(btnModificar);
        fila.appendChild(tdModificar);
        /* Boton Eliminar */
        let tdEliminar = document.createElement("td");
        let btnEliminar = document.createElement("button");
        btnEliminar.classList.add("btn", "btn-danger");
        btnEliminar.innerText = "Eliminar";
        tdEliminar.appendChild(btnEliminar);
        fila.appendChild(tdEliminar);
        cuerpoTabla.appendChild(fila);
    });
};

formDetalle.onsubmit = (e) => {
    e.preventDefault();//para que el formulario no se actualice
    //Creando Objeto Detalle
    const objDetalle = {
        codigo: inputCodigo.value,
        descripcion: selectNombreDet.value,
        cantidad: inputCantidad.value,
        precio: inputPrecio.value,
        monto_total: inputPrecioTotal.value
    };
    arregloDetalle.push(objDetalle);
    redibujarTabla();
};