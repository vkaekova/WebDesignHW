function checkUserBMI() {
	// взимаме въведените от потребителя данни:
	let inputsValues = getInputsValues();
	let userHeight = inputsValues.uHeight;
	let userWeight = inputsValues.uWeight;
    let bmi = userWeight/(userHeight**2);

	console.log(`user height is: ${userHeight} m.`);
	console.log(`user weight is: ${userWeight} kg.`);
	console.log(`user bmi is: ${Math.round(bmi)}`);

	if (bmi >= 30) {
			console.log(`Attention! You are obese!`);
	} else if (bmi >= 25 && bmi <= 29) {		
            console.log(`Be carefull! You are overweight!`);	
    } else {
        console.log(`Good job! You are normal!`);	
	}
}


function getInputsValues() {
	var form = document.getElementsByClassName("test")[0];
	var inputs = form.getElementsByTagName("input");
	var inputsValues = {};

	for (var i = 0, len = inputs.length; i < len; i++) {
		var inputNode = inputs[i];
		var inputNodeValue = inputNode.value;

	inputNodeValue = inputNode.value;
	inputsValues[inputNode.id] = inputNodeValue;
	}

	// console.log("inputsValues=", inputsValues);
	return inputsValues;
}
