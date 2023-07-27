const math = require('mathjs');

const maxInputValue = 10000000;


function getButtonsValue(){
	return document.getElementById("screenDisplay").innerText;
}

function printButtonsValue(output){
	document.getElementById("screenDisplay").innerText = output;
}

let operator = document.getElementsByClassName("op");
for (let i = 0; i < operator.length; i++){
  operator[i].addEventListener("click", function(){
  	if(this.id == "clear"){
  		printButtonsValue("");
  	}
  	let output = getButtonsValue();
  	if(output !="" && this.id == "+" || this.id == "-" || this.id == "/" || this.id == "*"){
  		output = output + this.id;
  		printButtonsValue(output);
  	}
  	if(this.id == "="){
		if(this.id == "="){
		let result = document.getElementById("screenDisplay").innerText;
		printButtonsValue( math.evaluate(result) );
		}
  	 }
  });
}  

let num = document.getElementsByClassName("num");
for (let i = 0; i < num.length; i++) {
  num[i].addEventListener("click", function() {
  	let output = getButtonsValue();
  	if(output !=NaN){// if output is a number and it is not greater than 1000000
  		output = (output )+ this.id;
  		printButtonsValue(output);
  	}
  });
}

