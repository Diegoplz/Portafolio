console.log("Portfolio iniciado correctamente");
const textos = [

    "Desarrollador Java",

    "Desarrollador Web",

    "Amante de la Tecnología",

    "Siempre Aprendiendo"

];

let indiceTexto = 0;
let indiceCaracter = 0;

function escribir(){

    const elemento = document.getElementById("typing");

    if(indiceCaracter < textos[indiceTexto].length){

        elemento.textContent += textos[indiceTexto].charAt(indiceCaracter);

        indiceCaracter++;

        setTimeout(escribir,80);

    }else{

        setTimeout(borrar,1500);

    }

}

function borrar(){

    const elemento = document.getElementById("typing");

    if(indiceCaracter>0){

        elemento.textContent=textos[indiceTexto].substring(0,indiceCaracter-1);

        indiceCaracter--;

        setTimeout(borrar,40);

    }else{

        indiceTexto++;

        if(indiceTexto>=textos.length){

            indiceTexto=0;

        }

        escribir();

    }

}

escribir();

document.getElementById("year").textContent = new Date().getFullYear();