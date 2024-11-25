//VALIDACION DE FORMULARIO
const form = document.querySelector('form[name="frm"]');
form.addEventListener("submit", (event) => {
  const fname = form.elements["fname"].value;
  const flastname = form.elements["flastname"].value;
  const fphone = form.elements["fphone"].value;
  const femail = form.elements["femail"].value;
  const fsex = form.elements["fsex"];
  const interests = form.elements["product_interest"];
  const detalleConsulta = form.elements["detalle_consulta"].value;

  if (!fname || !flastname || !fphone || !femail) {
    event.preventDefault();
    alert("Por favor, complete todos los campos del formulario");
  } else if (!validateEmail(femail)) {
    event.preventDefault();
    alert("Por favor, ingrese un correo valido");
  } else if (!validatePhone(fphone)) {
    event.preventDefault();
    alert("Por favor, ingrese solo números en el campo de celular");
  } else if (!validateSex(fsex)) {
    event.preventDefault();
    alert("Por favor, seleccione su género");
  } else if (!validateInterests(interests)) {
    event.preventDefault();
    alert("Por favor, seleccione al menos un interés");
  } else if (!validateTextarea(detalleConsulta)) {
    event.preventDefault();
    alert("Por favor, complete el detalle de la consulta");
  }
});
//CREAR FUNCION validateEmail
function validateEmail(femail) {
  const recieve = /^[a-zA-Z0-9._]+@[a-zA-Z0-9]+\.[a-zA-Z]/;
  return recieve.test(String(femail).toLowerCase());
}
//CREAR FUNCION validatePhone
function validatePhone(fphone) {
  const phonePattern = /^[0-9]+$/;
  return phonePattern.test(fphone);
}
//CREAR FUNCION validateSex
function validateSex(fsex) {
  // Recorre los radio buttons y verifica si alguno está seleccionado
  for (let i = 0; i < fsex.length; i++) {
    if (fsex[i].checked) {
      return true; // Si alguno está seleccionado, retorna verdadero
    }
  }
  return false; // Si ninguno está seleccionado, retorna falso
}
// CREAR FUNCIÓN validateInterests
function validateInterests(interests) {
  for (let i = 0; i < interests.length; i++) {
    if (interests[i].checked) {
      return true; // Si alguno está seleccionado, retorna verdadero
    }
  }
  return false; // Si ninguno está seleccionado, retorna falso
}

// CREAR FUNCIÓN validateTextarea
function validateTextarea(detalleConsulta) {
  return detalleConsulta.trim() !== ""; // Verifica que el textarea no esté vacío
}

//MENU HAMBURGUESA

const menu = document.querySelector(".menu-horizontal");
const openMenuBtn = document.querySelector(".open-menu");
const closeMenuBtn = document.querySelector(".close-menu");

//Funcion para alternar la visibilidad del menu
function toggleMenu() {
  menu.classList.toggle("menu_opened");
  if (menu.classList.contains("menu_opened")) {
    openMenuBtn.style.display = "none";
    closeMenuBtn.style.display = "block";
  } else {
    openMenuBtn.style.display = "block";
    closeMenuBtn.style.display = "none";
  }
}

openMenuBtn.addEventListener("click", toggleMenu);
closeMenuBtn.addEventListener("click", toggleMenu);

//Ajustar botones
window.addEventListener("resize", function () {
  if (window.innerWidth > 768) {
    menu.classList.remove("menu_opened");
    openMenuBtn.style.display = "none";
    closeMenuBtn.style.display = "none";
  } else {
    openMenuBtn.style.display = "block";
  }
});
