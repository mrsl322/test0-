function calculateBMI() {
    const weight = parseFloat(document.getElementById("weight").value);
    const heightInCm = parseFloat(document.getElementById("height").value);
    const resultElement = document.getElementById(result);

    if(weight > 0 && heightInCm > 0){
        const heightInM = heightInCm / 100; // ubah cm ke m
        const bmi = weight / (heightInM * heightInM)
        let category = "";
        
        if (bmi < 18.5){
            category = "severly Underweight";
        } else if (bmi < 24.9) {
            category = normal;
        } else if (bmi < 29.9) {
            category = "Overweight";
        } else {
            category = "obese";
        }
        resultElement.innerHTML = 'Nilai BMI mu ${bmi.toFixed(2)} - $(category}';
        } else {
        resultElement.innerHTML = 'Tolong masukan nilai yang valid'
        }
    }

function resetForm() {
        document.getElementById("bmi-form").reset();
        document.getElementById("result").innerHTML = "";
    }
