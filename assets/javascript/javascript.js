
const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://idealspot-geodata.p.rapidapi.com/api/v1/data/insights",
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "cc3bdfe5d0mshc16b581a0701a7ep103683jsn6aabd3b9dcb2",
		"x-rapidapi-host": "idealspot-geodata.p.rapidapi.com"
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);
});

const settingsWeather = {
	"async": true,
	"crossDomain": true,
	"url": "https://us-weather-by-city.p.rapidapi.com/getweather?city=San%20Francisco&state=CA",
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "cc3bdfe5d0mshc16b581a0701a7ep103683jsn6aabd3b9dcb2",
		"x-rapidapi-host": "us-weather-by-city.p.rapidapi.com"
	}
};

$.ajax(settingsWeather).done(function (response) {
	console.log(response);
});




//need event listener to search button to trigger API codes

//need to json parse array to get list, with query selector for list to land on

//

