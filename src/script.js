import { obtenerApi, carrito_guardar_producto, carrito_obtener_productos, carrito_numero_productos } from './jsons.js';

// async palabra reservada para funciones que trabajan de forma asincrona
(async () => {
  let tarjetas = document.getElementById("tarjetas");
  console.log(tarjetas);
  const response = await obtenerApi("https://fakestoreapi.com/products");

  response.forEach(data => {
      let col = document.createElement("div");
      col.className = "col mb-5";

      let card = document.createElement("div");
      card.className = "card h-100";

      let img = document.createElement("img");
      img.className = "card-img-top product-img";
      img.alt = data.title;
      img.src = data.image;

      let card_body = document.createElement("div");
      card_body.className = "card-body p-4";

      let text_center = document.createElement("div");
      text_center.className = "text-center";

      let h5 = document.createElement("h5");
      h5.className = "fw-bolder ";
      h5.textContent = data.title;

      let p_price = document.createElement("p");
      p_price.className = "card-text";
      p_price.textContent = '$' + data.price;

      let card_footer = document.createElement("div");
      card_footer.className = "card-footer p-4 pt-0 border-top-0 bg-transparent";

      let text_center_footer = document.createElement("div");
      text_center_footer.className = "text-center";

      let button_product = document.createElement("button");
      button_product.className = "btn btn-outline-dark mt-auto";
      button_product.textContent = "Agregar al carrito";
      //guardar el producto en el carrito y actualizar el numero de productos en el carrito
      button_product.onclick = function() {
         carrito_guardar_producto(data); 
         carrito_numero_productos();
         Swal.fire({
            position: "center",
            icon: "success",
            title: "Producto agregado al carrito",
            showConfirmButton: false,
            timer: 1500
            });
         };

      tarjetas.appendChild(col);
      col.appendChild(card);
      card.appendChild(img);
      card.appendChild(card_body);
      card_body.appendChild(text_center);
      text_center.appendChild(h5);
      text_center.appendChild(p_price);
      card.appendChild(card_footer);
      card_footer.appendChild(text_center_footer);
      text_center_footer.appendChild(button_product);

   });

   carrito_numero_productos();

})();































































































































//Al hacer click en el logo, mostrar un mensaje de bienvenida
   let logo = document.getElementById("logoGato");
   logo.onclick = function() {
      Swal.fire({
         title: "Hola, bienvenido a la Michi-tienda",
         width: 600,
         padding: "3em",
         color: "#716add",
         background: "#fff url(https://sweetalert2.github.io/images/trees.png)",
         confirmButtonText: "Cuack",
         backdrop: `
            rgba(0,0,123,0.4)
            url("https://sweetalert2.github.io//images/nyan-cat.gif")
            left top
            repeat
         `
         });
   }