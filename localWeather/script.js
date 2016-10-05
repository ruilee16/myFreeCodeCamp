var cities=[];
const apikey="3fcfd6037b51025116ea7fd88252499b";
function showLocalWeather(){
	if (navigator.geolocation){
		navigator.geolocation.getCurrentPosition(function(position){
			
			var getapi="api.openweathermap.org/data/2.5/weather?lat="+position.coords.latitude+"&lon="+position.coords.longitude+"&APPID"+apikey;

			
			alert(getapi);

		})
	}
	else {
		alert("please select a city");
	}
}

function addAnotherCity(){

}

function showWeatherDetail(){
	
}

