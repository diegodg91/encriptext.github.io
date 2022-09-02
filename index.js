const inputEntrada = document.querySelector('.input__entrada');
const mensaje = document.querySelector('.text-copy');
const msjeVacio = document.querySelector('#barra-lateral_imagen');
const msjeCopiar = document.querySelector('#msje-lateral')

function btnEncriptar(){
    let textoEncriptado = encriptar(inputEntrada.value);
    mensaje.value = textoEncriptado;
  
   msjeVacio.remove();
    inputEntrada.value = ""; 
    
}

function btnDesencriptar(){
    let textoEncriptado = desencriptar(inputEntrada.value);
    mensaje.value = textoEncriptado;
    inputEntrada.value = ""; 
    
}

function copiarMsje(){
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value);
    mensaje.value = "";
    alert('Mensaje Copiado');
}

function encriptar(msjeEncriptado){
    let letras = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    msjeEncriptado = msjeEncriptado.toLowerCase();

    for(let i =0; i < letras.length; i++){
        if(msjeEncriptado.includes(letras[i][0])) {
            msjeEncriptado = msjeEncriptado.replaceAll(letras[i][0], letras[i][1])
        }
    }
    return msjeEncriptado;
}

function desencriptar(msjeDesencriptado){
    let letras = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    msjeDesencriptado = msjeDesencriptado.toLowerCase();

    for(let i =0; i < letras.length; i++){
        if(msjeDesencriptado.includes(letras[i][1])) {
            msjeDesencriptado = msjeDesencriptado.replaceAll(letras[i][1], letras[i][0])
        }
    }
    return msjeDesencriptado;
}