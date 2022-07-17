// TODO: Modo Oscuro
// ? Seleccionamos los elementos
const toggleTheme = document.getElementById('toggleTheme');
const toggleIcon = document.getElementById('toggleIcon');
const toggleText = document.getElementById('toggleText');
// ? Escuchamos el click y lo capturamos
toggleTheme.addEventListener('click', () => {
    // ? Cambiamos la clase al body donde esta la clasae dark
    // ! toggle - añade o quita una clase
    document.body.classList.toggle("dark");
    // ? Cambiamos el icono y el texto
    if (toggleIcon.src.includes("moon.svg")) {
        toggleIcon.src = "assets/icon/sun.svg";
        toggleText.textContent = "Modo Claro";
    } else {
        toggleIcon.src = "assets/icon/moon.svg";
        toggleText.textContent = "Modo Oscuro";
    }
})