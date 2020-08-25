function fn1(){
	var str = document.getElementById("city").value;

	// get data

	$.getJSON("http://api.weatherstack.com/current?access_key=e0fc0deb036daafc30de759fddfd2973&query="+str, function(data){
	console.log(data);
	var icon = data.current.weather_icons[0];
	var temperature = data.current.temperature;
	var description = data.current.weather_descriptions[0];
	var location = data.location.country + ", " + data.location.name;

	$('.temperature').empty().append(temperature);
	$('.icon').empty().attr('src', icon);
	$('.description').empty().append(description);
	$('.location').empty().append(location);
});
	
}


