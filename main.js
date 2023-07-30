//contiene la operación o resultado parcial
let parcial = "";

//elementos donde se colcan las operacion que se esta realizando
let operRealizada = document.getElementById("operacionRealizada");
//elemento donde se colocará el resultado
let txtResul = document.getElementById("txtResultado");

//ultimo operador seleccionado
let operadorSeleccionado = "";

//numero ingresado
let numero = "";

//para determinar si lo ultimo ingresado fue un número o un operador
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
    //con eval evaluo la operacion que esta en string.
    //asi obtengo un resultado numerico
    parcial = eval(parcial);
    //muestro el resultado
    txtResul.innerHTML = parcial;
    //vuelvo a convetir parcial en string
    parcial = parcial.toString();
    //blanqueo el numero
    numero ="";

    operRealizada.innerHTML = parcial;
}