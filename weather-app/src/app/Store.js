
// esta clase me permite definir los métodos para poder almacenar y obtener los datos
// de localstorage

export class Store {
  constructor() {
    this.city;
    this.countryCode;

    this.defaultCity = 'Colima';
    this.defaultCountryCode = 'mx';
  }

  
  // este método será llamado para obtener lo que tengo almacenado en localstorage en el navegador
  getLocationData() {
    if(localStorage.getItem('city') === null) {
      this.city = this.defaultCity
    } else {
      this.city = localStorage.getItem('city')
    }

    if(localStorage.getItem('countryCode') === null) {
      this.countryCode = this.defaultCountryCode
    } else {
      this.countryCode = localStorage.getItem('countryCode')
    }

    return {
      city: this.city,
      countryCode: this.countryCode
    }

  }


  // estoy almacenando en localstorage, primero defino el id de lo que voy a guardar y después le paso el valor
  setLocationData(city, countryCode) {
    localStorage.setItem('city', city);
    localStorage.setItem('countryCode', countryCode)
  }

}