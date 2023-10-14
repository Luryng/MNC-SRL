//MINERALES NUEVO CUYO S.R.L//
let Password = 'MinNuevoCuyo';
let UnidadRoN = 10500;
let UnidadAzul = 10200;

function Ingreso (){
    let login = false;
    let Try = 5;
    for (let i = Try; i > 0; i--){
        let UserPass = prompt('Ingrese su Contraseña');
        if (UserPass === Password){
            alert('Ingresaste correctamente. Bienvenido');
            login = true;
            break;
        } else {
            alert('Contraseña erronea. Intentos restantes: ' + (i - 1));
        }
    }
    return login;
}

function Calculo (Cantidad){
    let Unidad = 10500;
    let Total = Unidad * Cantidad;
    return Total;
}

function Calculo2 (Cant){
    let Unidad = 10200;
    let Total = Unidad * Cant;
    return Total;
}

if (Ingreso()){
    let opcion = prompt('Elija una opción: \n1 - Comprar Bolsa Negra/Roja (20Kg) \n2 - Comprar Bolsa Azul (24Kg) \nPresione X para finalizar.');
    while (opcion !== 'X' && opcion !== 'x'){
        switch (opcion){
            case '1':
                alert('Precio Unidad de Pallets: ' + UnidadRoN);
                let Cantidad = parseInt(prompt('Ingrese la cantidad de tarimas a comprar'));
                let color = prompt('Eliga un color: Rojo - Negro');
                if (Cantidad > 0 && (color === 'Rojo' || color === 'Negro')){
                    const resultado = Calculo(Cantidad);
                    alert('Detalles de su producto: Cal en bolsón ' + color + '\nPrecio Total: ' + resultado);
                } else {
                    alert('Error. Revise el color o cantidad elegida.');
                }
                break;
            case '2':
                alert('Precio Unidad de Pallets: ' + UnidadAzul);
                let cant = parseInt(prompt('Ingrese la cantidad de tarimas a comprar'));
                if (cant > 10){
                    const resultado2 = Calculo2(cant);
                    alert('Detalles de su producto: Cal en bolsa Azul \nPrecio Total: ' + resultado2);
                }
                break;
            default:
                alert('Opción Inválida. Intente nuevamente');
                break;
        }
        opcion = prompt('Elija una opción: \n1 - Comprar Bolsa Negra/Roja (20Kg) \n2 - Comprar Bolsa Azul (24Kg) \nPresione X para finalizar.');
    }
} else {
    alert('Contraseña incorrecta. No puede acceder al sitio');
}
alert('Hasta luego');

// Objetos //

class Bolsas {
    constructor(nombre, detalle, precio, tarima) {
        this.nombre = nombre;
        this.detalle = detalle;
        this.precio = precio;
        this.tarima = tarima;
    }
}

const Negra = new Bolsas ("Cal Bolsa Negra", "Cal aérea hidratada en bolsas de 20 Kg", "Unidad: 750$, Tarima: 10500$","14(Filas) x 5(Columnas)");
const Roja = new Bolsas ("Cal Bolsa Roja", "Cal aérea hidratada en bolsas de 20 Kg", "Unidad: 750$, Tarima: 10500$","14(Filas) x 5(Columnas)");
const Azul = new Bolsas ("Cal Bolsa Azul", "Cal aérea hidratada en bolsas de 24 Kg", "Unidad: 850$, Tarima: 10500$","12(Filas) x 5(Columnas)");
// Array //
const Producto = [Negra, Roja, Azul];

//Muestreo//
console.log("Primer producto: \n"+Producto[0].nombre,"\n"+Producto[0].detalle,"\n"+Producto[0].precio,"\n"+Producto[0].tarima);
console.log("Segundo producto: \n"+Producto[1].nombre,"\n"+Producto[2].detalle,"\n"+Producto[2].precio,"\n"+Producto[2].tarima);
console.log("Tercer producto: \n"+Producto[2].nombre,"\n"+Producto[2].detalle,"\n"+Producto[2].precio,"\n"+Producto[2].tarima);
console.log(Producto);
