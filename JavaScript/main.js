
let productos = [

    { Nombre: " telefono iphone 11 ", Precio: 350000 },
    { Nombre: " telefono iphone 12", Precio: 450000 },
    { Nombre: ' telefono iphone 13', Precio: 8500000 },
    { Nombre: "telefono iphone 13 pro max ", Precio: 950000 },

];

let text = ""
let total = 0
let opcion = 0

function generar() {

    let text = ''
    for (i = 0; i < productos.length; i++) {
        text += `${i + 1}. ${productos[i].Nombre} \n`;
    }

    text += `5. Salir`
    return text
}

text = generar()

while (opcion != 5) {
    opcion = parseInt(prompt(`Elije los productos que quieres comprar\n${text}`))
    switch (opcion) {
        case 1: total += productos[0].Precio; break;
        case 2: total += productos[1].Precio; break;
        case 3: total += productos[2].Precio; break;
        case 4: total += productos[3].Precio; break;
        case 5: alert(`Gracias por su compra, el total es $ ${total}`);
            break;
    }
}
