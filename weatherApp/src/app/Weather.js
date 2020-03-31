// request the data to the weather API

export class Weather {
    constructor(city, countryCode) {
        this.apikey = 'fc94195bff2ca73072e4cfe047f0845a';
        this.city = city;
        this.countryCode = countryCode;
    }

    // this function is the manager to request to the url the data for the city and countryCode
    async getWeather() {
        const URI = `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.countryCode}&appid=${this.apikey}&units=metric`;
        const response = await fetch(URI);
        const data = await response.json();
        return data;
    }


    changeLocation(city, countryCode) {
        this.city = city;
        this.countryCode = countryCode;
    }


}
