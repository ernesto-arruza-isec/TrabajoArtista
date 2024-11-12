function cargaCiudad(event) {
  event.preventDefault();
  const cityName = document.getElementById('cityName').value;
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=903507f17d707fecd352d38301efba77&units=metric`)
    .then(response => response.json())
    .then(data => {
      if(data.cod == 404){
        document.getElementById('clima').innerHTML = `<h2>No se encontró la ciudad</h2>`;
        return;
      }
      const climaDiv = document.getElementById('clima');
      const { main, weather, wind, name } = data;
      console.log(data);
      climaDiv.innerHTML = `
          <h2>Clima en ${name}</h2>
          <p>Temperatura: ${main.temp} °C</p>
          <p>Descripción: ${weather[0].description}</p>
          <p>Humedad: ${main.humidity}%</p>
          <p>Presión: ${main.pressure} hPa</p>
          <p>Viento: ${wind.speed} m/s</p>
          <p>Dirección del viento: ${wind.deg}°</p>
          <p>Sensación térmica: ${main.feels_like} °C</p>
      `;
  })
    .catch(error => console.error('Error:', error));
}
//https://openweathermap.org/img/wn/ACAELICONO@2x.png