
let parcial = "";


let operRealizada = document.getElementById("operacionRealizada");

let txtResul = document.getElementById("txtResultado");


let operadorSeleccionado = "";


let numero = "";


let ultimoDigitoPresionado = "";


//Presiono una tecla de operación
function operacion(oper){
    //guardo la operación que eleigio
    operadorSeleccionado = oper;
    ultimoDigitoPresionado = "operacion";
    parcial = parcial + oper;
    numero = "";
    operRealizada.innerHTML = parcial;
}

//Presiono un número
function operador(num){
    //contateno el numero
    numero = numero + num;
    //contateno la operacion hasta el momento
    parcial = parcial + num;
    //muestro
    operRealizada.innerHTML = parcial;

    //Controlamos la división por 0
    if(numero=='0' && operadorSeleccionado=='/'){
        limpiar();
        txtResul.innerHTML = "Cagaste" +
            "";
        return;
    }

    if(ultimoDigitoPresionado == "operacion"){
        ultimoDigitoPresionado = "numero";
    }

}

//función para limpiar variables  y campos
function limpiar(){
    operadorSeleccionado="";
    parcial="";
    txtResul.innerHTML = "";
    numero = "";
    operRealizada.innerHTML = "0";
}

//Función que realiza el calculo de parcial
function calculo(){
    //eval es funcion que devuelve el calculo de un string
    parcial = eval(parcial);
    //muestro el resultado
    txtResul.innerHTML = parcial;
    //vuelvo a convetir parcial en string
    parcial = parcial.toString();
    //blanqueo el numero
    numero ="";

    operRealizada.innerHTML = parcial;
}