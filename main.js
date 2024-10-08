var weight, height, measure, bmi, error ;

function calculate() {
    weight = document.getElementById("weight").value;
    console.log(weight);
    height = document.getElementById("height").value;
    error = "please enter value";
    height /= 100;
    console.log(height);
    height *= height;
    console.log(height);
    bmi = weight/height;
    console.log(bmi);
    bmi = bmi.toFixed(1);
	console.log(bmi)

    if (bmi <= 18.4) {
		measure = "BMI anda " + bmi + " yang berarti anda " + "kurus";
	} else if (bmi >= 18.5 && bmi <= 24.9) {
		measure = "BMI anda " + bmi + " yang berarti anda " + "Normal";
	} else if (bmi >= 25 && bmi <= 29.9) {
		measure = "BMI anda " + bmi + " yang berarti anda " + "Gemuk";
	} else if (bmi >= 30) {
		measure = "BMI anda " + bmi + " yang berarti anda " + "Obesitas";
	}
	

	if (weight === 0 ) {
		document.getElementById("results").innerHTML = error;
	} else if (height === 0){
		document.getElementById("results").innerHTML = error;
	}
	 else {

		document.getElementById("results").innerHTML = measure;
	}
	if (weight < 0) {
		document.getElementById("results").innerHTML = "Negative Values not Allowed";
	}
}