function convertTemperature ()  {
    const temperatureInput = document.getElementById("number").value;
    //const FahrenheitRadio = document.getElementById("Fahrenheit");
    const CelsiusRadio = document.getElementById("Celsius");
    const result = document.getElementById("result");

    if (CelsiusRadio.checked) {
        const Fahrenheit = (temperatureInput * 9/5) + 32;
        result.textContent = `${temperatureInput}°C is ${Fahrenheit.toFixed(2)}°F`;
    } 
    else {
        const Celsius = (temperatureInput - 32) * (5/9);
        result.innerHTML = `${temperatureInput}°F is ${Celsius.toFixed(2)}°C`;
    }
}












/* In the code fahrenheit.toFixed(2), the toFixed(2) method is used to format the fahrenheit value 
as a string with exactly two decimal places. 
This means it will round the fahrenheit value to two decimal places and return it as a string. */

/* the $ is a shorthand for the jQuery object. 
jQuery is a JavaScript library that simplifies DOM manipulation and provides a wide range of
 utilities for working with HTML elements and events. 
When you see $ in jQuery code, it usually signifies that a jQuery operation is being performed. */

/* If you were working with HTML content that included tags (e.g., displaying formatted HTML text), 
then you might use .innerHTML to insert and render HTML tags within the element. 
However, in cases where you're dealing with plain text content updates, 
it's generally better to use .textContent to prevent any unintended rendering of HTML tags
 and potential security vulnerabilities */
