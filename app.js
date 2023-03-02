//Menu lateral

var menu_visible = false;
let menu = document.getElementById("nav");
function mostrarOcultarMenu() {
  if (menu_visible == false) {
    menu.style.display = "block";
    menu_visible = true;
  } else {
    menu.style.display = "none";
    menu_visible = false;
  }
}

let links = document.querySelectorAll("nav a");
for (var x = 0; x < links.length; x++) {
  links[x].onclick = function () {
    menu.style.display = "none";
    menu_visible = false;
  };
}

// Barras de habilidades
function crearBarra(id_barra) {
  for (i = 0; i <= 16; i++) {
    let div = document.createElement("div");
    div.className = "e";
    id_barra.appendChild(div);
  }
}

let html = document.getElementById("html");
crearBarra(html);
let javascript = document.getElementById("javascript");
crearBarra(javascript);
let react = document.getElementById("react");
crearBarra(react);
let java = document.getElementById("java");
crearBarra(java);
let python = document.getElementById("python");
crearBarra(python);
let mysql = document.getElementById("mysql");
crearBarra(mysql);

let contadores = [-1, -1, -1, -1, -1, -1];
let entro = false;

function efectoHabilidades() {
  var habilidades = document.getElementById("habilidades");
  var distancia_skills =
    window.innerHeight - habilidades.getBoundingClientRect().top;
  if (distancia_skills >= 300 && entro == false) {
    entro = true;
    const intervalHtml = setInterval(function () {
      pintarBarra(html, 16, 0, intervalHtml);
    }, 100);
    const intervalJavascript = setInterval(function () {
      pintarBarra(javascript, 15, 2, intervalJavascript);
    }, 100);
    const intervalReact = setInterval(function () {
      pintarBarra(react, 11, 1, intervalReact);
    }, 100);
    const intervalJava = setInterval(function () {
      pintarBarra(java, 13, 3, intervalJava);
    }, 100);
    const intervalPython = setInterval(function () {
      pintarBarra(python, 15, 4, intervalPython);
    }, 100);
    const intervalMysql = setInterval(function () {
      pintarBarra(mysql, 12, 5, intervalMysql);
    }, 100);
  }
}

function pintarBarra(id_barra, cantidad, indice, interval) {
  contadores[indice]++;
  x = contadores[indice];
  if (x < cantidad) {
    let elementos = id_barra.getElementsByClassName("e");
    elementos[x].style.backgroundColor = "#940253";
  } else {
    clearInterval(interval);
  }
}

window.onscroll = function () {
  efectoHabilidades();
};

// Función Formulario
const $form = document.querySelector("#form");
$form.addEventListener("submit", handleSubmit);

async function handleSubmit(event) {
  event.preventDefault();
  const form = new FormData(this);
  const response = await fetch(this.action, {
    method: this.method,
    body: form,
    headers: {
      Accept: "application/json",
    },
  });

  if (response.ok) {
    this.reset();
    swal({
      title: "Tu mensaje fue enviado!",
      text: "Gracias por tu mensaje, me comunicaré con vos lo más pronto posible.",
      icon: "success",
    });
  }
}
