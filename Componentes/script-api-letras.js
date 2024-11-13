// Seleccionar elementos del DOM
const formulario = document.getElementById('formulario');
const resultado = document.getElementById('resultado');
const spinner = document.getElementById('spinner');

// Lista de canciones permitidas
const cancionesPermitidas = [
    "Ji ji ji",
    "Un poco de amor francés",
    "Todo un palo",
    "La bestia pop",
    "Juguetes perdidos",
    "Motor Psico",
    "Rockstar",
    "Perfecta",
    "Mentia",
    "Don",
    "Tu Misterioso Alguien",
    "Yo te diré",
    "Siempre que lo beso",
];

// Evento para manejar el envío del formulario
formulario.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevenir el comportamiento por defecto del formulario

    const cancion = document.getElementById('cancion').value; // Obtener el valor ingresado
    resultado.innerHTML = ''; // Limpiar cualquier resultado anterior

    // Mostrar spinner al iniciar la búsqueda
    spinner.style.display = 'block';

    // Validar que la canción esté en la lista de permitidas
    if (!cancionesPermitidas.includes(cancion)) {
        spinner.style.display = 'none'; // Ocultar spinner
        resultado.innerHTML = `<p style="color: red;">Lo sentimos, solo trabajamos con canciones de Los Redondos.</p>`;
        return;
    }

    // Realizar la solicitud a la API
    fetch(`https://api.lyrics.ovh/v1/Miranda!/${cancion}`)
        .then((response) => {
            if (!response.ok) {
                throw new Error('No se encontró la letra.'); // Lanzar un error si la respuesta no es válida
            }
            return response.json(); // Convertir la respuesta a JSON
        })
        .then((data) => {
            // Mostrar los datos en el contenedor de resultados
            resultado.innerHTML = `
                <div id="contentContainer">
                    <h3>${cancion}</h3>
                    <p>${data.lyrics.replace(/\n/g, '<br>')}</p>
                </div>`;
        })
        .catch((error) => {
            // Mostrar mensaje de error
            resultado.innerHTML = `<p style="color: red;">Error: ${error.message}</p>`;
        })
        .finally(() => {
            // Ocultar el spinner al terminar la solicitud
            spinner.style.display = 'none';
        });
});
