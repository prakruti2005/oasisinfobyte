function convertTemperature() {
    const temp = parseFloat(document.getElementById('temperatureInput').value);
    const inputUnit = document.getElementById('inputUnit').value;
    let resultText = '';

  
    if (isNaN(temp)) {
        document.getElementById('result').textContent = 'Please enter a valid number.';
        return;
    }

   
    switch (inputUnit) {
        case 'Celsius':
            resultText = `
                ${temp}°C = ${(temp * 9/5 + 32).toFixed(2)}°F |
                ${temp}°C = ${(temp + 273.15).toFixed(2)}K`;
            break;
        case 'Fahrenheit':
            resultText = `
                ${temp}°F = ${((temp - 32) * 5/9).toFixed(2)}°C |
                ${temp}°F = ${(((temp - 32) * 5/9) + 273.15).toFixed(2)}K`;
            break;
        case 'Kelvin':
            resultText = `
                ${temp}K = ${(temp - 273.15).toFixed(2)}°C |
                ${temp}K = ${((temp - 273.15) * 9/5 + 32).toFixed(2)}°F`;
            break;
    }

   
    document.getElementById('result').textContent = resultText;
}
