

export class Weather {
  // constructor se ejecuta cuando es instanciada la clase Weather
  constructor(city, countryCode) {
    this.apikey = '557eafdf3c3da3428fea15a7b8111354';
    this.city = city;
    this.countryCode = countryCode;
  }

  // este método hace la petición a la api para consulta el wether por el país y el código
  async getWeather() {
    const URI = `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.countryCode}&appid=${this.apikey}&units=metric`;
    // fetch nos permite hacer peticiones, solo ocupa la dirección de internet
    const response = await fetch(URI);
    const data = await response.json();
    return data;
  }

  // este método se ejecuta cuando el formulario sea ejecutado
  changeLocation(city, countryCode) {
    this.city = city;
    this.countryCode = countryCode;
  }

}



