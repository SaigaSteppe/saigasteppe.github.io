window.addEventListener('load', ()=>{
	
	//Auckland coordinates
	let longitude = 174.7457466;
	let latitude = -36.8306687;
	
	let tempDegree = document.querySelector(".temp-degree");
	let tempFar = document.querySelector(".temp-far");
	let tempSummary = document.querySelector(".temp-summary");
	

	
			const proxy = "https://cors-anywhere.herokuapp.com/";
			const api = proxy+"https://api.darksky.net/forecast/4a0e239170e865d9c965455c8347c36d/"+latitude+","+longitude;
	
			fetch(api)
				.then(response =>{
				return response.json();
			})
			.then(data =>{
				console.log(data);
				
				let celcius = ((data.currently.temperature - 32) * 5 )/ 9;
				tempDegree.textContent = Math.round(celcius);
				tempFar.textContent = Math.round(data.currently.temperature);
				
				tempSummary.textContent = data.currently.summary;
			});
		
});

function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  m = checkTime(m);
  document.getElementById('time').innerHTML =
  h + ":" + m;
  var t = setTimeout(startTime, 500);
}
function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}
