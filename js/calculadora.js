function calcular(){
    console.log("ingreso a calcular");
    //buscar valores de una etiqueta por id
    let numero1 = document.getElementById("numero1").value;
    let numero2 = document.getElementById("numero2").value;

    let sumatoria = parseInt(numero1) + parseInt(numero2);
    alert("la suma es "+sumatoria);

    //buscar valores de una etiqueta por la etiqueta (plan b)
    let buscar_input = document.getElementsByTagName("input");
    let cantidad_input = buscar_input.length;
    //alert("la cantidad de inputs son "+cantidad_input);
    let numero3=0;
    let numero4=0;
    for(i=0; i<cantidad_input; i++){
        //alert("el input "+i+" tiene como valor "+buscar_input[i].value);   
        if(i==0){
            numero3=buscar_input[i].value;
        }else if(i==1){
            numero4=buscar_input[i].value;
        }


    }
    let resultado = parseInt(numero3)+parseInt(numero4);
    //alert("el resultado por plan b es "+resultado);

    //buscar todos los parrafos que existan en la pagina
    let buscar_parrafos = document.getElementsByTagName("p");
    let cantidad_parrafos = buscar_parrafos.length;

   // alert("parrafos encontrados "+cantidad_parrafos);

    var parrafo_prueba =  buscar_parrafos[1].innerHTML;

//    alert("el valor del parrafo 2 con innerhtml es "+parrafo_prueba);

    var parrafo_prueba2 =  buscar_parrafos[1].value;
  //  alert("el valor del parrafo 2 con value es "+parrafo_prueba);

  //cambiar el texto parrafo 2 pero solo se puede realizar por innerhtml
    buscar_parrafos[1].innerHTML ="el valor nuevo de este parrafo uno es ..";

    let buscar_vinculos = document.getElementsByTagName("a");

    let parrafo3 =document.getElementById("parrafo3");
    parrafo3.innerHTML="el nuevo texto para el parrafo 3 es ..";
    //investigar clic en dom
    //buscar_vinculos[1].click();





}

function calcular_suma(){
    let numero1 = document.getElementById("numero1").value;
    let numero2 = document.getElementById("numero2").value;

    if(numero1==''){
        document.getElementById("numero1").setAttribute("class", "form-control is-invalid");
/*        let validar_parrafo = document.getElementById("validar_parrafo1");
        validar_parrafo.innerHTML="El numero 1 es obligatorio";*/
        document.getElementById("validar_parrafo1").innerHTML="El numero 1 es obligatorio";


    }else{
        document.getElementById("numero1").setAttribute("class", "form-control is-valid");
        document.getElementById("validar_parrafo2").setAttribute("class", "form-control is-valid");
        document.getElementById("validar_parrafo2").innerHTML="valor ingresado";

    }


    if(numero2==''){
        document.getElementById("numero2").setAttribute("class", "form-control is-invalid");
        document.getElementById("validar_parrafo2").innerHTML="El numero 2 es obligatorio";
    }


}