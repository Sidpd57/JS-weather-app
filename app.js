const apiKey ="e26fb7615556ed27522171dc8d5409f6";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const city = document.querySelector('.city')
const temp = document.querySelector('.temp')
const humidity= document.querySelector('.humidity')
const wind = document.querySelector('.wind')

const searchCity = document.querySelector('input')
const searchBtn = document.querySelector('button')
const weatherIcon = document.querySelector('.weather-icon')
searchBtn.addEventListener('click',() => {
    checkWeather(searchCity.value)
})

async function checkWeather(cityName){
const response = await fetch(apiUrl+cityName+`&appid=${apiKey}`)
    let data = await response.json()
    console.log(data)
    city.textContent=data.name
    temp.textContent= Math.round(data.main.temp)+'°c'
    humidity.textContent=data.main.humidity+'%'
    wind.textContent=data.wind.speed+' km/h'

    const weatherCond = data.weather[0].main
    if(weatherCond=='Clear') {
        weatherIcon.src='img/clear.png'
    }else if(weatherCond=='Clouds') {
        weatherIcon.src='img/clouds.png'
    }else if(weatherCond=='Drizzle') {
        weatherIcon.src='img/drizzle.png'
    }else if(weatherCond=='Mist') {
        weatherIcon.src='img/mist.png'
    }else if(weatherCond=='Rain') {
        weatherIcon.src='img/rain.png'
    }else if(weatherCond=='Snow') {
        weatherIcon.src='img/snow.png'}
}
