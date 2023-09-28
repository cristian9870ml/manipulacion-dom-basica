/*

const h1= document.querySelector("h1");
const input= document.querySelector("input");
const p= document.querySelectorAll("p");
const parrafo= document.querySelector(".parrafo");
const pid= document.getElementById("pid");
const pid1= document.getElementById("pid");*/



const h1= document.querySelector("h1");
const input= document.querySelector("#calculo1");
const input2= document.querySelector("#calculo2");
const btn= document.querySelector("#btnCalcular");
const presult= document.querySelector("#resultado");
const form= document.querySelector("#form");
const txt1= document.querySelector("#txt1");
const txt2= document.querySelector("#txt2");
const btnsumar= document.querySelector("#btnSumar");
const btnrestar= document.querySelector("#btnRestar");
const btnmultiplicar= document.querySelector("#btnMultiplicar");
const btndividir= document.querySelector("#btnDividir");




//form.addEventListener("submit", sumarInputValues);

function sumarInputValues(event){
    console.log({event});
    event.preventDefault();
   let sumaInputs=input.value + input2.value;
   presult.innerText= "Resultado: " +sumaInputs;

}

function sumartxtinput(){
   
    let numero1=txt1.value;
    let numero2=txt2.value;

    let conversionnumero1=Math.floor(numero1);
    let conversionnumero2=Math.floor(numero2);

    let sumartxt= conversionnumero1 + conversionnumero2;

    presult.innerText= "El resultado de la suma es: " +sumartxt;
}

function restartxtinput(){
    let restartxt= txt1.value - txt2.value;
    presult.innerText= "El resultado de la resta es: " +restartxt;
}

function multiplicartxtinput(){
    let multiplicartxt= txt1.value * txt2.value;
    presult.innerText= "El resultado de la multiplicacion es: " +multiplicartxt;
}

function dividirtxtinput(){
    let dividirtxt= txt1.value / txt2.value;
    presult.innerText= "El resultado de la division es: " +dividirtxt;
}
function pintartexto1(col){

    document.getElementById('txt1').style.backgroundColor=col;
    //btnsumar.setAttribute("value", "calcular");
   
}
function pintartexto2(col){

    document.getElementById('txt2').style.backgroundColor=col;
  
}function pintarbtnsuma(col){
    document.getElementById('btnSumar').style.backgroundColor=col;

}function pintarbtnresta(col){

    document.getElementById('btnRestar').style.backgroundColor=col;
}
function pintarbtnmultiplicacion(col){

    document.getElementById('btnMultiplicar').style.backgroundColor=col;
}
function pintarbtndividir(col){

    document.getElementById('btnDividir').style.backgroundColor=col;
}



/*

console.log(input.value);
console.log({
h1,
p,
parrafo,
pid,
input,

});
//modifica el contenido del html

//h1.innerHTML="manipualcion del dom, introduccion"; lo convierte a html
h1.innerText="manipualcion del dom,<br> introduccion"; //este a texto

console.log(h1.getAttribute("pantalla"));// trae elementos para imprimirlos
console.log(input.getAttribute("placeholder"));

//modifica el contenido de una clase o otro objeto

//input.setAttribute("placeholder", "modificacion");

//agrega mas contenido a la clase sin afectar el anterior

input.classList.add('exito');//agregar contenido sin espacios
input.classList.remove('exito'); //quita lo que indiquemos en esa clase

input.value="456";

//crear un atributo desde 0
console.log(document.createElement("img"));
console.log(document.createElement("span"));

//para que se vea en un html
//console.log(document.createElement("img"));

//agregar una imagen dentro de un atributo existente en html
const img= document.createElement("img");

img.setAttribute("src",
"https://leagueof.hexania.com/assets/images/blog/uploads/posts-imgs/2023-04/6429ce5b3b49e.jpeg");
 console.log(img);

pid1.append(img);

*/
