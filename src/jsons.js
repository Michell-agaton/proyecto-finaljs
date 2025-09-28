
export async function obtenerApi(url) {
  const res = await fetch(url);
  const data = await res.json();
  return data;
}

export function carrito_guardar_producto(producto) {
  // Obtener los productos actuales del carrito
  const productos = carrito_obtener_productos();
  // Agregar el nuevo producto al array
  productos.push(producto);
  // Guardar el array actualizado en el almacenamiento local 
  localStorage.setItem("carrito", JSON.stringify(productos));
  //stringify convierte un objeto de javascript a json o un string
  console.log("Producto agregado al carrito:", producto);
  console.log("Carrito actual:", productos.length);
}


export function carrito_obtener_productos() {
  // Obtener los productos del carrito desde el almacenamiento local
  const productos = localStorage.getItem("carrito");
  // Si no hay productos, devolver un array vacío, de lo contrario, devuelve el array de productos
  console.log("Productos en el carrito:", productos);
  return productos ? JSON.parse(productos) : [];
  //parse convierte el string en un objeto de javascript (json = array u objeto)
}

export function carrito_numero_productos() {
  //dibujar el numero de productos en el carrito
   const productos = carrito_obtener_productos();
   //busca en el html el primer elemento que tenga la clase badge
   let numero_carrito_span = document.querySelector(".badge");
   //escribe el numero de productos en el carrito
   numero_carrito_span.textContent = productos.length;

}

export function carrito_calcular_total() {
  //calcular el total de los productos en el carrito
  const productos = carrito_obtener_productos();
  let total = 0;
  productos.forEach(producto => {
    //sumar el precio de cada producto tomando el total anterior mas el nuevo precio
    total += producto.price;
  });
  //redondear a 2 decimales
  return total.toFixed(2);
}

//eliminar un producto del carrito
export function carrito_eliminar_producto(producto_id) {
  //obtener los productos del carrito
  let productos = carrito_obtener_productos();
  //buscar el indice del producto a eliminar
  let index = productos.findIndex(producto => producto.id === producto_id);
  //eliminar el producto del array
  productos.splice(index, 1);
  //guardar el array actualizado en el almacenamiento local
  localStorage.setItem("carrito", JSON.stringify(productos));

}

export function carrito_vaciar() {
  //vaciar el carrito
  localStorage.removeItem("carrito");
  
}