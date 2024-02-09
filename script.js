
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '94a310eee0mshe4cdaac39682b6cp1bb9f6jsn5ca94b7d763e',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const getWeather = (city)=>{
	cityName.innerHTML = city
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi',options)
  .then(response => response.json())
   .then(response => {
	console.log(response)
	cloud_pvc.innerHTML = response.cloud_pvc                                  
	temp.innerHTML = response.temp       
	feels_like.innerHTML = response.feels_like      
	humidity.innerHTML = response.humidity       
	min_temp.innerHTML = response.min_temp      
	max_temp.innerHTML = response.max_temp      
	wind_speed.innerHTML = response.wind_speed       
	wind_degree.innerHTML = response.wind_degree     
	sunrise.innerHTML = response.sunrise       
	sunset.innerHTML = response.sunset      
   })
	.catch(err => console.error(err));
}
SubmitEvent.addEventListener("click", (e)=> {
	e.preventDefault()
getWeather( city.value)
})
getWeather("Delhi")


