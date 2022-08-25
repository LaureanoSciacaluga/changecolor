const hexa = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
const boton = document.getElementById("boton");
const color = document.querySelector(".colorOfBack");



boton.addEventListener("click", function(){
    let hexadecimal = "#"
    for(i = 0; i < 6; i++){
        let numeroRandom = generarNumeroRandom();
        hexadecimal += hexa[numeroRandom];
    }
    document.body.style.backgroundColor = hexadecimal;
    color.textContent = hexadecimal;
})




function generarNumeroRandom(){
   return Math.floor(Math.random() * hexa.length);
}