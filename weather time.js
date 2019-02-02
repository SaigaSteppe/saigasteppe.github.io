window.addEventListener('load', ()=>{
	
	//Auckland coordinates
	let longitude = 174.7457466;
	let latitude = -36.8306687;
	
	let tempC = document.querySelector(".temp-c");
	let tempF = document.querySelector(".temp-f");
	let tempSummary = document.querySelector(".temp-summary");

	
			const proxy = "https://cors-anywhere.herokuapp.com/";
			const api = proxy+"https://api.darksky.net/forecast/4a0e239170e865d9c965455c8347c36d/"+latitude+","+longitude;
	
			fetch(api)
				.then(response =>{
				return response.json();
			})
			.then(data =>{
				console.log(data);
				
				let celsius = ((data.currently.temperature - 32) * 5 )/ 9;
				tempC.textContent = Math.round(celsius);
				tempF.textContent = Math.round(data.currently.temperature);
				
				tempSummary.textContent = data.currently.summary;
			});
		
});

function getTime() {

let aucklandTime = new Date().toLocaleString("en-US", {timeZone:'Pacific/Auckland'});
	aucklandTime = new Date(aucklandTime);
	
  document.getElementById('time').innerHTML =
  aucklandTime.toString().slice(4,16) + '(' + aucklandTime.toString().slice(16,21) + ')';
}