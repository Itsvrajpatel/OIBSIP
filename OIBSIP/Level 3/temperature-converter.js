// Convert Fahrenheit to Celsius
function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
  }
  
  // Convert Celsius to Fahrenheit
  function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
  }
  
  // Convert Fahrenheit to Kelvin
  function fahrenheitToKelvin(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9 + 273.15;
  }
  
  // Convert Celsius to Kelvin
  function celsiusToKelvin(celsius) {
    return celsius + 273.15;
  }
  
  // Convert Kelvin to Fahrenheit
  function kelvinToFahrenheit(kelvin) {
    return (kelvin - 273.15) * 9 / 5 + 32;
  }
  
  // Convert Kelvin to Celsius
  function kelvinToCelsius(kelvin) {
    return kelvin - 273.15;
  }
  
  // Get the temperature input and scale elements
  const temperatureInput = document.getElementById("temperature-input");
  const temperatureScale = document.getElementById("temperature-scale");
  const convertToScale = document.getElementById("convert-to-scale");
  
  // Get the result element
  const resultElement = document.getElementById("result");
  
  // Add an event listener to the convert button
  document.getElementById("convert-button").addEventListener("click", () => {
    // Get the temperature value and scale
    const temperature = parseFloat(temperatureInput.value);
    const scale = temperatureScale.value;
    const convertToScaleValue = convertToScale.value;
  
    // Validate that the input is a number
    if (isNaN(temperature)) {
      alert("Please enter a valid temperature");
      return;
    }
  
    // Convert the temperature to the selected scale
    let convertedTemperature;
    if (scale === "fahrenheit" && convertToScaleValue === "celsius") {
      convertedTemperature = fahrenheitToCelsius(temperature);
    } else if (scale === "celsius" && convertToScaleValue === "fahrenheit") {
      convertedTemperature = celsiusToFahrenheit(temperature);
    } else if (scale === "kelvin" && convertToScaleValue === "celsius") {
      convertedTemperature = kelvinToCelsius(temperature);
    } else if (scale === "kelvin" && convertToScaleValue === "fahrenheit") {
      convertedTemperature = kelvinToFahrenheit(temperature);
    } else if (scale === "celsius" && convertToScaleValue === "kelvin") {
      convertedTemperature = celsiusToKelvin(temperature);
    } else if (scale === "fahrenheit" && convertToScaleValue === "kelvin") {
      convertedTemperature = fahrenheitToKelvin(temperature);
    }
  
    // Display the converted temperature in the result element
    resultElement.textContent = convertedTemperature.toFixed(2) + " " + convertToScaleValue;
  });