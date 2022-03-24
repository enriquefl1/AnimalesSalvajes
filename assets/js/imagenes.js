// PASO 2
// ---------------------------------------------------------------
// Descripción : Genero la lista de imagenes que van dentro de la ventana
// modal, para despues seleccionarla y cargarla en el div "preview"
// esta lista la obtengo del json Consulta.js

import Animales from "./Consulta.js";

// Cargo las en la sección preview
const animal = document.getElementById("animal")
animal.addEventListener("click", async () => {
    
    const { animales } = await Animales.getData();
    const listaAnimales = document.getElementById("animal");
    const animalSeleccionado = listaAnimales.options[listaAnimales.selectedIndex].value;

    let src = "";
    if (animalSeleccionado=='Aguila' || animalSeleccionado == 'Leon')
        src = `assets/imgs/${animalSeleccionado}.png`;
    else
        src = `assets/imgs/${animalSeleccionado}.jpg`;
    document.getElementById("preview").style.backgroundImage = `url(${src})`;
});

