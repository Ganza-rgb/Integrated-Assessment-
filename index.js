console.log("my name is programer GANZA");

//variable declaration

function getResurt(argument) {
	
	var amount = document.getElementById("amount").value;
    
    document.getElementById("result").innerHTML = amount + " RFW";

}

function Delete_btn(argument) {
	
	var result = document.getElementById("result");

	result.remove();

}