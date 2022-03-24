import {
  Leon,
  Lobo,
  Oso,
  Serpiente,
  Aguila,
} from "./clases/ClassAnimalSound.js";

// Registro el animal en la lista
const registrar = document.getElementById("btnRegistrar");
registrar.addEventListener("click", () => {
  const animalesTemplate = document.getElementById("Animales");
  animalesTemplate.innerHTML += "<p>prueba</p>";

  const nombre = document.getElementById("animal").value;
  const edad = document.getElementById("edad").value;
  const comentarios = document.getElementById("comentarios").value;

  if (nombre && edad && comentarios ) {
        // Instancio según el animal seleccionado
        let img = "";
        let sonido = "";
        let nuevoAnimal;

        if (nombre == "Aguila" || nombre == "Leon") img = `assets/imgs/${nombre}.png`;
        else img = `assets/imgs/${nombre}.jpg`;

        switch (nombre) {
            case "Leon":
            sonido = "rugido.mp3";
            nuevoAnimal = new Leon(nombre, edad, img, comentarios, sonido);
            break;
            case "Lobo":
            sonido = "Aullido.mp3";
            nuevoAnimal = new Lobo(nombre, edad, img, comentarios, sonido);
            break;
            case "Oso":
            sonido = "gruñido.mp3";
            nuevoAnimal = new Oso(nombre, edad, img, comentarios, sonido);
            break;
            case "Serpiente":
            sonido = "siseo.mp3";
            nuevoAnimal = new Serpiente(nombre, edad, img, comentarios, sonido);
            break;
            case "Aguila":
            sonido = "chillido.mp3";
            nuevoAnimal = new Aguila(nombre, edad, img, comentarios, sonido);
            break;
        }

        animalesTemplate.innerHTML += `
        <div class="card">
        <img src="${nuevoAnimal.img()}" class="card-img-top" onclick="activarModal('${nuevoAnimal.nombre()}', '${nuevoAnimal.edad()}','${nuevoAnimal.img()}','${nuevoAnimal.comentarios()}')" />
        <audio controls>
        <source src="assets/sounds/${nuevoAnimal.sonido()}" type="audio/mpeg">
                Your browser does not support the audio element.
        </audio>
        </div>
        `;
       // limpio los datos
       document.getElementById("animal").selectedIndex = 0; 
       document.getElementById("edad").selectedIndex = 0; 
       document.getElementById("comentarios").value = ""; 
       document.getElementById("preview").style.backgroundImage = ""
    } else {
        alert("Falta nombre, edad o comentarios !!!");
    }
});


window.activarModal = (name,age,img,coment) => {
    const modalBody = document.getElementById("tarjeta");
    modalBody.innerHTML=`<div class="card">
                            <img src="${img}" class="card-img-top" />
                            <h4 class="card-title center">${name}</h4>
                            <h6 class="card-text"Raza: <span class="text-danger">${coment}</span></h6>
                            <h6 class="card-text"Raza: <span class="text-danger">${age}</span></h6>
                        </div>
                        `
    

    $("#exampleModal").modal("toggle");

}