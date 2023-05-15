function opBasicas(){
let A=0;
let B=0;
let S=0;
let Q=0;
let R=0;
let N=0;
let O=0;
let Y=0;
let U=0;

alert("por favor ingrese el primer valor");
Y =parseInt(prompt(""));
alert( "por favor ingrese el segundo valor");
U =parseInt(prompt(""));
S = Y + U;
alert("el resultado de la suma es :"+ S);
A =parseInt(prompt(""));
B =parseInt(prompt(""));

S = A * B;
alert("el resultado es:" + S)

Q=parseInt(prompt(""));

R=parseInt(prompt(""));

S= Q / R;
alert("el resultado es:" +S);

N=parseInt(prompt(""));

O=parseInt(prompt(""));

S= N - O;
alert("EL RESULTADO ES:" + S);
}

function mayorD(){
let A=0;
let B=0;
A=parseInt(prompt(""));
B= parseInt(prompt(""));

if (A==B){
    alert("lOS NUMEROS SON IGUALES");
}
else if (A>B){
    alert(A +"es mayor que" +B);
}
else {
    alert(B+ "Es mayor que"+ A);
} 
}
function menorD(){
let A=0;
let B=0;
let C=0;
 A=parseInt(prompt(""));
 B=parseInt(prompt(""));
 C=parseInt(prompt(""));

 if(A==B && A==C){
    alert("los numeros son iguales");
 }
 else if (A<B &&  A<C && B<C){
    alert(A + "ES MENOR QUE " + B);
 }
 else{
    alert(B + "ES MENOR QUE" +A);
}  
}
function AñoDeNacimiento(){
let A=0;
let B=0;
let S=0;
alert("Escriba su edad");
A=parseInt(prompt(""));
alert("Escriba el año actual")
B=parseInt(prompt(""));
S= B - A;
alert("Su año de nacimiento es "+S )
}
function Inversion(){
let A=0;
let B=0;
let C=0;
let D=0;

A=parseInt(prompt("Ingrese capital a invertir"));
B=parseInt(prompt("Escriba años de inversion"));
C= ((A*1.7/100)*12)*B;
alert ("Su inversion es de:  "+ C);
D= A+C;
alert("El total de inversion es: "+D+ "Pesos");
}
function Colegio(){
let NOM=0;
let MATE=0;
let N1=0;
let N2=0;
let N3=0;
let N4=0;
let N5=0;
let N6=0;
let N7=0;
let DEFINITIVA=0;
let estado=0;
NOM = prompt("Ingrese el nombre de estudiante");
MATE= prompt("Ingrese materia");
alert("Ingrese notas");
N1=parseFloat(prompt(""));
N2=parseFloat(prompt(""))
N3=parseFloat(prompt(""))
N4=parseFloat(prompt(""))
N5=parseFloat(prompt(""))
N6=parseFloat(prompt(""))
N7=parseFloat(prompt(""))
DEFINITIVA= (N1+N2+N3+N4+N5+N6+N7)/7;
if (parseFloat(DEFINITIVA>=6.1)){
    estado=prompt("El estudiante aprobo con: "+DEFINITIVA);
}
else{
    estado=prompt("El estudiante reprobo con: "+DEFINITIVA);
}
alert=(NOM+MATE+estado);
}
function mercado ()
{
    var kg;
    var precio;
    var producto;
    var descuento;
    var operacion;

    producto = prompt("Ingrese el nombre del producto =");
    precio = parseInt(prompt("Ingrese el precio del producto por kilogramo ="));
    kg = parseFloat(prompt("Ingrese cuanto pesa el producto (Kg) ="));

    if (kg <= 2)
    {
        descuento = 0;
    }
    else if ((kg >2) && (kg <=5 ))
    {
        descuento = 10;
    }
    else if ((kg > 5)&&(kg <= 10))
    {
        descuento = 15;
    }
    else if (kg >10)
    {
        descuento = 20;
    }

    operacion = (precio - ((precio * descuento) / 100)) * kg;

    alert ("El descuento del producto es de " + descuento);
    alert ("El total es de = " + operacion);
}

function salario()
{
    var nombre;
    var horas;
    var extras;
    var operacion;

    nombre = prompt("Ingrese su nombre completo =");
    horas = parseFloat(prompt("Ingrese las horas trabajadas ="));

    if (horas <= 40)
    {
        extras = 0;
        operacion = (horas * 10000) + extras;
    }
    else 
    {
        extras = horas - 40;
        operacion = 1600000 + (extras * 20000)
    }

    alert ("Señor/a " + nombre + " su salario semanal es de " + operacion + ", con " + extras + " horas extras")
}
function par() {
    var A = 0;

    A = parseInt(prompt("Ingrese un valor:"));
    if(A % 2 === 0) {
    alert("El número ingresado es par");

    } 
    else {
        alert("El número es impar");
    }
    
}
function cuadrado(){
    const numero = prompt("Ingrese un número para calcular su cuadrado:");

    const cuadrado = numero * numero;
    
    alert("El cuadrado del número es: " + cuadrado);
}
function triangulo(){
        let base = parseInt(prompt("Ingrese la base del triangulo:"));
        let altura = parseInt(prompt("Ingrese la altura del triangulo:"));
        let area;
        area = (base * altura) / 2;
        alert("El area del triangulo es: " + area + " cm2");    
}
function cmAmts(){
var centimetros = prompt("Introduce un valor en centímetros:");
var metros = centimetros / 100;

alert(centimetros + " cm son " + metros + " m");

}

    
