require('./index.css');
const { UI } = require('./UI');
const { Weather } = require('./Weather');
const { Store } = require('./Store');


const localStorage = new Store();
const { city, countryCode } = localStorage.getLocationData()
const weather = new Weather(city, countryCode);
const ui = new UI();

async function fetchWeather() {
  const data = await weather.getWeather()
  console.log(data)
  ui.render(data)
}

document.getElementById('w-change-btn').addEventListener('click', (e) => {
  const city = document.getElementById('city').value;
  const countryCode = document.getElementById('countryCode').value;
  weather.changeLocation(city, countryCode)
  localStorage.setLocationData(city,countryCode)
  fetchWeather()
  // me permite que mi formulario no se refresque cuando le de click al boton de save changes
  e.preventDefault(); 
})

// la función fetchWeather se va a ejecutar cuando el contenido sea cargado
document.addEventListener('DOMContentLoaded', fetchWeather)