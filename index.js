const textoIngresado = document.getElementById("textoIngresado");

const botonEncriptar = document.getElementById("botonEncriptar");

const botonDesencriptar = document.getElementById("botonDesencriptar");

const mensajeFinal = document.getElementById("mensajeFinal");

const imagenPersona = document.getElementById("personaImagen");

const textoInfo = document.getElementById("ingresaTextoInfo");

const botonCopiar = document.getElementById("botonCopiar");


//a ai
//e enter
//i imes
//o ober
//u ufat

let reemplazaTexto = [

    
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
    

]
botonEncriptar.addEventListener("click", () => {

    const texto = textoIngresado.value.toLowerCase();
    function encriptarTexto (textoReemplazado) {
        for (let i = 0; i < reemplazaTexto.length; i++) {
            if (textoReemplazado.includes(reemplazaTexto[i][0])) {
                textoReemplazado = textoReemplazado.replaceAll(reemplazaTexto[i][0], reemplazaTexto[i][1])
            };
            
        };
        return textoReemplazado;


    }
    const textoEncriptado = encriptarTexto(texto);
    mensajeFinal.innerHTML = textoEncriptado;
    imagenPersona.style.display ="none";
    textoInfo.style.display= "none";
    botonCopiar.style.display="block";
    textoInfo.classList.add("ajustar");
    mensajeFinal.classList.add("ajustar");
    

    

    

})

botonDesencriptar.addEventListener("click", () => {

    const texto = textoIngresado.value.toLowerCase();
    function DesencriptarTexto (textoReemplazado) {
        for (let i = 0; i < reemplazaTexto.length; i++) {
            if (textoReemplazado.includes(reemplazaTexto[i][1])) {
                textoReemplazado = textoReemplazado.replaceAll(reemplazaTexto[i][1], reemplazaTexto[i][0])
            };
            
        };
        return textoReemplazado;


    }
    const textoDesencriptado = DesencriptarTexto(texto);
    mensajeFinal.innerHTML = textoDesencriptado;
    
    imagenPersona.style.display ="none";
    textoInfo.style.display= "none";
    botonCopiar.style.display="block";
    textoInfo.classList.add("ajustar");
    mensajeFinal.classList.add("ajustar");
    
})

botonCopiar.addEventListener("click", () => {

    let texto = mensajeFinal;
    navigator.clipboard.writeText(texto.value);


    
})


