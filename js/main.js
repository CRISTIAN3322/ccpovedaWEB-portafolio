// TODO: Modo Oscuro
// ? Seleccionamos los elementos
const toggleTheme = document.getElementById('toggleTheme');
const toggleIcon = document.getElementById('toggleIcon');
const toggleText = document.getElementById('toggleText');

// ? Seleccion id de la caja de colores
const toggleColor = document.getElementById(`toggleColor`);

// ? localizamos las variables del css
const rootStyle = document.documentElement.style;


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

// ? Escuchamos el click de la caja de colores
toggleColor.addEventListener('click', (e) => {
    // console.log(e.target.dataset);
    /**
     * ! dataset.color -> propiedad data-nombre que asignamos en el html a los data set
     */
    rootStyle.setProperty('--primary-color', e.target.dataset.color);
});