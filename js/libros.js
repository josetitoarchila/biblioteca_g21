/*let a=prompt("ingresar numero 1");
let b=prompt("ingresar numero 2");

let sumatoria= parseInt(a)+parseInt(b);
alert("el valor de a es "+sumatoria);
*/
document.write("<h3 class='texto_h5'>titulo h5 cambios</h3>");
document.write("<p class='fs-4 estilo_h2'>titulo h5 cambios</p>");
let variable1="prueba";
console.log("mensaje en consola"+variable1);                                                                                        

let valor1=5;
console.log("valor 1 es "+valor1);

let materias = ["Quimica", "Fisica", "Español", 4, false, 786, "EF"];

materias[materias.length] = "Matematicas";
//adicionar valores a un arreglo
materias.push(54, "prueba");

for(i=0; i<materias.length; i++){
    document.write("<p class='fs-4 estilo_h2'>"+materias[i]+"</p>");
}
//borrar valores a un arreglo
materias.pop();

//llamar la funcion suma
Suma(15, 45);
Suma(12, 34);
Suma(23, 15);


//crear la funcion sumar
function Suma(numero1, numero2){
    let resultado = numero1 + numero2;
    document.write("<h4 class='estilo_h2'>el resultado de la suma es " +resultado +"</h4>");
}

let j=5;
while(j<100){
    document.write("<p>la i va en "+j+"</p>");
    j=j+5;

}




