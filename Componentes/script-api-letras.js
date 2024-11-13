const formulario = document.getElementById('formulario');
const resultado = document.getElementById('resultado');

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

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    const cancion = document.getElementById('cancion').value;

    // Validar que la canción esté en la lista
    if (!cancionesPermitidas.includes(cancion)) {
        resultado.innerHTML = `<p style="color: red;">Lo sentimos, solo trabajamos con canciones de Los Redondos.</p>`;
        return;
    }

    fetch(`https://api.lyrics.ovh/v1/Miranda!/${cancion}`)
        .then((response) => {
            if (!response.ok) {
                throw new Error('No se encontró la letra.');
            }
            return response.json();
        })
        .then((data) => {
            resultado.innerHTML = `
                <div id="contentContainer">
                    <h3>${cancion}</h3>
                    <p>${data.lyrics.replace(/\n/g, '<br>')}</p>
                </div>`;
        })
        .catch((error) => {
            resultado.innerHTML = `<p style="color: red;">Error: ${error.message}</p>`;
        });
});
