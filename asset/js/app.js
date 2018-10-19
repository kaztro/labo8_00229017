
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
        cant: cont,
        fecha: formulario[1].value,
        descripcion: formulario[2].value,
        cantidad: formulario[3].value
    }
});

// ¿Qué es lo que contiene formulario[x]? los div que hay dentro de form

formulario.addEventListener("submit", (evt) => {
    evt.preventDefault();
    let bitacora = {
        cant: cont,
        fecha: formulario[1].value,
        descripcion: formulario[2].value,
        cantidad: formulario[3].value
    }
    bitacoras.push(bitacora);
    cont++;
    mostrar();
});

const crearElemento = (bitacora, tbody) => {
    let tr = document.createElement("tr");
    Object.values(bitacora).forEach(item => {
        let td = document.createElement("td");
        let content = document.createTextNode(item);
        td.appendChild(content);
        tr.setAttribute("class", "click");
        tr.appendChild(td);
    });
    tbody.appendChild(tr);
}

//¿Qué contienen las variables tr y td? "tr" contiene a "td" y "td" contiene a "content"
//¿Qué contienen la variable content? "item" lo cual es el texto que contiene el nodo
//¿Qué valor tendra tbody al finalizar la iteración? tendra un textnode "item"... tbody tiene a dentro a tr que tiene a dentro a td que tiene adentro a content el cual tiene el nodo de texto "item"...
//Describa en pocas palabras lo que realizara esta función Crea un elemento en el tbody 

const eliminar = (tbody) => { while (tbody.firstChild) tbody.removeChild(tbody.firstChild); }

//¿Qué es lo que hace .firstChild? Selecciona o toma al primer hijo que este dentro de tbody... 
//Después de realizar el while ¿Comó quedara el elemento tbody? Vacio...

const agregar = () => {
    var eventtr = document.querySelectorAll(".click");
    eventtr.forEach((item, index) => {
        item.addEventListener("click", () => {
            document.querySelector("#fecha").value = item.childNodes[1].textContent;
            document.querySelector("#descp").value = item.childNodes[2].textContent;
            document.querySelector("#cant").value = item.childNodes[3].textContent;
        });
    })
}

//¿Qué es lo que obtenemos cuando se ejecuta item.childNodes[i].textContent; El contenido (texto) de cada uno de sus nodos...

const mostrar = () => {
    if (document.querySelector(".tabla-btc tbody").childElementCount > 0) {
        eliminar(document.querySelector(".tabla-btc tbody"));
    }
    bitacoras.forEach(item => {
        crearElemento(item, document.querySelector(".tabla-btc tbody"));
    });
    agregar();
}

//¿Qué es lo que obtenemos cuando se realiza document.querySelector(".tabla-btc tbody")? El primer elemento que encaje con ".tabla-btc tbody" 
//¿Qué hace el método childElementCount? retorna el numero de hijos que tiene un elemento 
//¿Qué se mostrara en pantalla cuando se ejecute la función agregar()? Nada pues solo los ha agregado, aun no los ha mostrado...
//¿Qué se mostrara en el navegador despues de ejecutar la función mostrar?  Llenara los campos de la tabla con los datos ingresados



 

