
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

