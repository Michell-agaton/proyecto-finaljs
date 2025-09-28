import { carrito_obtener_productos, carrito_calcular_total, carrito_eliminar_producto, carrito_vaciar } from './jsons.js';

//funcion que se ejecuta al cargar la pagina
(async () => {
    let productos = await carrito_obtener_productos();
    console.log(productos);

    let cart_tarjetas = document.getElementById("cart_tarjetas");

    productos.forEach(data => {
        let card = document.createElement("div");
        card.className = "card mb-3 mb-lg-0";

        let card_body = document.createElement("div");
        card_body.className = "card-body";

        let d_flex_justify = document.createElement("div");
        d_flex_justify.className = "d-flex justify-content-between";

        let d_flex_align = document.createElement("div");
        d_flex_align.className = "d-flex flex-row align-items-center";

        let img = document.createElement("img");
        img.className = "img-fluid rounded-3";
        img.style.width = "65px";
        img.src = data.image;
        img.alt = data.title;

        let ms_3 = document.createElement("div");
        ms_3.className = "ms-3";

        let h5 = document.createElement("h5");
        h5.textContent = data.title;    

        let d_flex_price = document.createElement("div");
        d_flex_price.className = "d-flex flex-row align-items-center";

        let div_style = document.createElement("div");
        div_style.style.width = "80px";

        let h5_price = document.createElement("h5");
        h5_price.className = "mb-0";
        h5_price.textContent = '$' + data.price;

        let button_remove = document.createElement("button");
        button_remove.className = "btn btn-danger btn-sm me-1 m-2";
        button_remove.textContent = "Eliminar";
        button_remove.onclick = function() {
            Swal.fire({
                title: "¿Estas seguro?",
                text: "Esto eliminara el producto de tu carrito!",
                icon: "danger",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Si, eliminalo!"
                }).then((result) => {
                    if (result.isConfirmed) {
                        //eliminar el producto del carrito y recargar la pagina
                        carrito_eliminar_producto(data.id);
                        location.reload();
                    }
            });

        }


        cart_tarjetas.appendChild(card);
        card.appendChild(card_body);
        card_body.appendChild(d_flex_justify);
        d_flex_justify.appendChild(d_flex_align);
        d_flex_align.appendChild(img);
        d_flex_align.appendChild(ms_3);
        ms_3.appendChild(h5);
        d_flex_price.appendChild(div_style);
        d_flex_price.appendChild(h5_price);
        d_flex_price.appendChild(button_remove);
        d_flex_justify.appendChild(d_flex_price);

    });

    //guarda el total en el html    
    let total = carrito_calcular_total();
    let total_html = document.getElementById("total");
    total_html.textContent = '$ ' + total;
})

//indica que la funcion se ejecuta inmediatamente
();

//funcion para el boton pagar
let button_pagar = document.getElementById("pagar");
button_pagar.onclick = function(){
    Swal.fire({
        title: "Pago realizado con exito!",
        text: "Gracias por tu compra!",
        imageUrl: "../images/gato-pago.gif",
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: "Custom image"
    }).then(() => {
        //vaciar el carrito y recargar la pagina
        carrito_vaciar();
        location.href = "index.html";
    });
}