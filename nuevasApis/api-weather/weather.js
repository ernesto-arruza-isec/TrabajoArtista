fetch('https://api.openweathermap.org/data/2.5/weather?q=Buenos Aires&appid=903507f17d707fecd352d38301efba77&units=metric') // Asegúrate de reemplazar YOUR_API_KEY
  .then(response => response.json())
  .then(data => {
    const climaDiv = document.getElementById('clima');
    const { main, weather, name } = data;
    console.log(data);
    climaDiv.innerHTML = `
      <h2>Clima en ${name}</h2> 
      <p>Temperatura: ${main.temp} °C</p>
      <p>Tipo de clima: ${weather[0].description}</p>
      <p>Humedad: ${main.humidity}%</p>
      <p>Presión: ${main.pressure} hPa</p>
    `;
  })
  .catch(error => console.error('Error:', error));