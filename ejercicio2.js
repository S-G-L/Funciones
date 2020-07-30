var a = 0;
var b = 0;
var c = 0;
var d = 0;
var calcularPromedio = 0;
a = parseInt(prompt('Digita un número a'));
b = parseInt(prompt('Digita un número b'));
c = parseInt(prompt('Digita un número c'));
d = parseInt(prompt('Digita un número d'));

calcularPromedio = promedio (a,b,c,d);
    
function promedio(nA,nB,nC,nD){
    const resultado = (nA+nB+nC+nD)/4;
    console.log('El resultado del promedio es: ' + resultado)
}