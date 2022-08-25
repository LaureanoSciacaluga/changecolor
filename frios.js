const colores = ["blue","darkgreen","yellowgreen","indigo"];
const boton = document.getElementById("boton");
const color = document.querySelector(".colorOfBack");

boton.addEventListener("click", function(){
    let numeroRandom = generarNumeroRandom();
    document.body.style.backgroundColor = colores[numeroRandom];
    color.textContent = colores[numeroRandom];
})

function generarNumeroRandom(){
    return Math.floor(Math.random() * colores.length)
}