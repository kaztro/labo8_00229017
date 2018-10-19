
const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener("click", () => {
        nav.classList.toggle('nav-active');

        navLinks.forEach((link, index) => {

            if (link.style.animation) {
                link.style.animation = '';
            }
            else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }

        });
        burger.classList.toggle('toggle');
    });

}

navSlide();
/*********************************Colocar aca el desarrollo de su ejercicio***************************/
let cont = 1;
var bitacoras = [];
let formulario = document.getElementById("bitacora");

//¿Qué contienen la variable formulario? La variable formulario contiene el formulario como un array

formulario.addEventListener("submit", (evt) => { evt.preventDefault(); });

//¿Qué hace el método evt.preventDefault()? Es para que en vez de hacer lo que normalmente hace realice una accion que queremos 

formulario.addEventListener("submit", (evt) => {
    evt.preventDefault(); 
    let bitacora = { 
    cant:cont, 
    fecha: formulario[1].value, 
    descripcion: formulario[2].value, 
    cantidad: formulario[3].value 
  } 
 }); 

// ¿Qué es lo que contiene formulario[x]? los div que hay dentro de form


