function convertTemperature() {
    const temperatureInput = document.getElementById("temperature");
    const unitSelect = document.getElementById("unit");
    const resultDisplay = document.getElementById("result");

    const temperature = parseFloat(temperatureInput.value);
    const unit = unitSelect.value;

    if (isNaN(temperature)) {
        resultDisplay.textContent = "Please enter a valid number";
        return;
    }

    let convertedTemperature;
    let convertedUnit;

    switch (unit) {
        case "celsius":
            convertedTemperature = (temperature * 9/5) + 32;
            convertedUnit = "Fahrenheit";
            break;
        case "fahrenheit":
            convertedTemperature = (temperature - 32) * 5/9;
            convertedUnit = "Celsius";
            break;
        case "kelvin":
            break;
        default:
            resultDisplay.textContent = "Invalid unit";
            return;
    }

    resultDisplay.textContent = `${temperature} ${unit} is equal to ${convertedTemperature.toFixed(2)} ${convertedUnit}`;
}
