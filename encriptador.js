const texArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

/*La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"*/


function btnEncriptar(){
    const textoEncriptado = encriptar(texArea.value);
    mensaje.value = textoEncriptado
    texArea.value = "";
    mensaje.style.backgroundImage = "none";

}

function btmdesencriptar(){
    const textoDesencriptado = desencriptar(texArea.value);
    mensaje.value = "";
    mensaje.value = textoDesencriptado;

}



function encriptar(stringEncriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"],["o", "ober"], ["u", "ufat"]];

    stringEncriptada = stringEncriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){

            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])

        }
    }
    return stringEncriptada
}

function desencriptar(stringDesencriptada) {
    let matrizCodigo = [["enter", "e"], ["imes", "i"], ["ai", "a"], ["ober", "o"], ["ufat", "u"]];
  
    stringDesencriptada = stringDesencriptada.toLowerCase();
  
    for (let i = 0; i < matrizCodigo.length; i++) {
      if (stringDesencriptada.includes(matrizCodigo[i][0])) {
        stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
      }
    }
  
    return stringDesencriptada;
  }
  
  function copiarTexto() {
    /* Selecciona el elemento que contiene el texto a copiar */
    const elemento = document.querySelector(".mensaje");
  
    /* Selecciona el texto dentro del elemento */
    elemento.select();
  
    /* Copia el texto al portapapeles */
    document.execCommand("copy");
  
    /* Deselecciona el texto */
    window.getSelection().removeAllRanges();
  
    /* Puedes mostrar una notificación o realizar alguna acción adicional */
    alert("Texto copiado: " + elemento.value);
  }
  