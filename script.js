var input = document.getElementById('input');
var result = document.getElementById('result');
var inputType = document.getElementById('inputType');
var resultType = document.getElementById('resultType');
var option_from,option_to;


input.addEventListener("keyup",myResult);
inputType.addEventListener("change",myResult);
resultType.addEventListener("change",myResult);


option_from = inputType.value;
option_to   = resultType.value;


function myResult(){


	option_from = inputType.value;
	option_to = resultType.value;




	if(option_from === "m" && option_to==="km"){
		
		result.value = Number(input.value) * 0.001;
	}else if(option_from === "m" && option_to==="cm"){

	
		result.value = Number(input.value) * 100;

	}else if(option_from === "m" && option_to==="m"){
		
		result.value = input.value
	}



	if(option_from === "km" && option_to==="m"){
		 
		result.value = Number(input.value) * 1000;
	}else if(option_from === "km" && option_to==="cm"){
		
		result.value = Number(input.value) * 100000;
	}else if(option_from === "km" && option_to==="km"){
		 
		result.value = input.value
	}

	if(option_from === "cm" && option_to==="km"){
		
		result.value = Number(input.value) * 0.00001;
	}else if(option_from === "cm" && option_to==="m"){
		
		result.value = Number(input.value) * 0.01;
	}else if(option_from === "cm" && option_to==="cm"){
		
		result.value = input.value
	}
	


}