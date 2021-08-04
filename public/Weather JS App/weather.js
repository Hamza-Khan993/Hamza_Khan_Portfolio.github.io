class Weather {
    constructor(city, country) {
      this.apiKey = 'ff440acdf5db626fabed2693b96b3eae'
      this.city = city
      this.country = country
      this.defaultCity = "Mumbai"
      this.defaultCountry = "Maharashtra"
    }
  
    //fetch weather from api
    async getWeather() {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&APPID=${this.apiKey}&units=metric`
      )
  
      const responseData = await response.json()
      console.log(responseData)
  
      return responseData
    }
  
    //change location
    changeLocation(city, country) {
      this.city = city
      this.country = country
    }
  }

// this.apiKey = '3ad9369f5dd481e8bc0a070cb5745947';
