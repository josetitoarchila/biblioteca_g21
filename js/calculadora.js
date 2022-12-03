function calcular(){
    console.log("ingreso a calcular");
    let numero1 = document.getElementById("numero1").value;
    let numero2 = document.getElementById("numero2").value;

    let sumatoria = parseInt(numero1) + parseInt(numero2);
    alert("la suma es "+sumatoria);
}