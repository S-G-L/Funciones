var a = 0;
var b = 2.1;
var ConIva = 0;

a = parseInt(prompt("Ingrese el precio del producto"));

ConIva = preciototal (a,b);

function preciototal (nA,nB){
    const resultado = (nA+nB);
    console.log("Precio sin Iva: "+ a, "El Iva es: " + b, "El precio total es: " + resultado)
}