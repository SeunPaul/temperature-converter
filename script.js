let degreeCelcius = document.querySelector("#degreeCelcius")
let kelvin = document.querySelector("#kelvin")
let farenheit = document.querySelector("#farenheit")
let button = document.querySelector("button")

function evaluateDegree(){
	if(isNaN(degreeCelcius.value)){
		degreeCelcius.classList.add("wrongInput");
	}
	else{
		degreeCelcius.classList.remove("wrongInput");
		kelvin.value = Math.round((Number(degreeCelcius.value) + 273.15) * 100)/100;
		farenheit.value = Math.round(((degreeCelcius.value * 1.8) + 32) * 100)/100;
	}
}
function evaluateKelvin(){
	if(isNaN(kelvin.value)){
		kelvin.classList.add("wrongInput");
	}
	else{
		kelvin.classList.remove("wrongInput");
		degreeCelcius.value = Math.round((kelvin.value - 273.15) * 100)/100;
		farenheit.value = Math.round((((kelvin.value - 273.15) * 1.8) + 32) * 100)/100;
	}
}

function evaluateFarenheit(){
	if(isNaN(farenheit.value)){
		farenheit.classList.add("wrongInput");
	}
	else{
		farenheit.classList.remove("wrongInput");
		degreeCelcius.value = Math.round(((farenheit.value - 32) * (5/9)) * 100)/100;
		kelvin.value = Math.round((((farenheit.value - 32) * (5/9)) + 273.15) * 100)/100;
	}
}

degreeCelcius.addEventListener("keypress", (event) =>{
	kelvin.disabled = true;
	farenheit.disabled = true;
	if(event.keyCode === 13){
		evaluateDegree();
	}
})

kelvin.addEventListener("keypress", (event) =>{
	degreeCelcius.disabled = true;
	farenheit.disabled = true;
	if(event.keyCode === 13){
		evaluateKelvin();
	}
})

farenheit.addEventListener("keypress", () =>{
	degreeCelcius.disabled = true;
	kelvin.disabled = true;
	if(event.keyCode === 13){
		evaluateFarenheit();
	}
})

button.addEventListener("click", () =>{
	if (degreeCelcius.value !== ""){
		evaluateDegree();
	}
	else if(kelvin.value !== ""){
		evaluateKelvin();
	}
	else if(farenheit.value !== ""){
		evaluateFarenheit();
	}
})