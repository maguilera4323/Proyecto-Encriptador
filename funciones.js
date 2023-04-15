
//Funcion para evitar que el usuario ingrese datos que no sean letras y espacios
// creamos el evento para cada tecla pulsada
document.getElementById("input-encriptar").addEventListener("keypress",verificar);
function verificar(e) {

    // comprovamos con una expresion regular que el caracter pulsado sea
    // una letra, numero o un espacio
    if(e.key.match(/[A-Za-z \s]/i)===null) {

        // Si la tecla pulsada no es la correcta, eliminado la pulsación
        e.preventDefault();
    }
}

//arreglos que contienen las vocales y las cadenas de reemplazo
let vocales=['a','e','i','o','u'];
let cadenaEncriptacion=['ai','enter','imes','ober','ufat'];



function Encriptar(){
    let textoAEncriptar=document.getElementById('input-encriptar').value;
    let textoEncriptado= '';

    //validar que el textarea no esté vacio
    if (textoAEncriptar == "") {
        document.getElementById("mensajeError").innerHTML = "El campo del mensaje a encriptar no puede estar vacío";
    }else{
        document.getElementById("mensajeError").innerHTML = "";
    }  
    
    //recorrido de la cadena recibida
    for(let i=0;i<textoAEncriptar.length;i++){

        //validacion que verifica si el caracter que está obteniendo actualmente el ciclo es una vocal
        //de ser cierto se pasa al ciclo interno
        if(vocales.includes(textoAEncriptar[i])){
        
        //ciclo que compara el caracter seleccionado con el arreglo de vocales
        //para poder hacer la encriptacion dependiendo de la vocal
            for(let j=0;j<vocales.length;j++){

                if(vocales[j]==textoAEncriptar[i]){
                    let nuevoTexto=cadenaEncriptacion[j];
                    textoEncriptado+=nuevoTexto;
                    i++;
                }
            }
        }

        //para evitar tener datos indefinidos
        if(i>textoAEncriptar.length-1){
            break;
        }

        textoEncriptado+=textoAEncriptar[i];
        console.log(i)
    }

     document.getElementById("input-encriptado").value = textoEncriptado; 
     document.getElementById("input-encriptar").value = '';
}



function Desencriptar(){
    var textoADesencriptar=document.getElementById('input-encriptado').value;
    let textoDesencriptado= '';

    if (textoADesencriptar == "") {
        document.getElementById("otroMensajeError").innerHTML = "El campo del mensaje a desencriptar no puede estar vacío";
    }else{
        document.getElementById("otroMensajeError").innerHTML = "";
    }
    
    textoDesencriptado=textoADesencriptar.replaceAll(cadenaEncriptacion[0],vocales[0]).
    replaceAll(cadenaEncriptacion[1],vocales[1]).replaceAll(cadenaEncriptacion[2],vocales[2]).
    replaceAll(cadenaEncriptacion[3],vocales[3]).replaceAll(cadenaEncriptacion[4],vocales[4]);

    document.getElementById("input-encriptar").value = textoDesencriptado; 
    document.getElementById("input-encriptado").value = '';
}


//funcion para copiar texto de los textarea 
function CopiarTexto() {
    let textarea1 = document.getElementById('input-encriptar');
    let textarea2 = document.getElementById('input-encriptado');

    if(textarea1!=''){
        textarea1.select();
        document.execCommand('copy');
    }else if(textarea2!=''){
        textarea2.select();
        document.execCommand('copy');
    }else{
        alert('no se pueden copiar cuadros vacios');
    }

}


//funcion para limpiar el texto que haya en los textarea
function limpiar(){
    document.getElementById("input-encriptar").value = ''; 
    document.getElementById("input-encriptado").value = '';
}
