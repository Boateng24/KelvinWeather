// Temperature in kelvin
const kelvin = 350;
// kelvin converted into celcius(Temperature)
const celsius = kelvin - 273;
// calculating temperature in fahrenheit
let fahrenheit = Math.floor(celsius * (9 / 5) + 32);
// printing temperature in fahrenheit to the console
console.log(`The temperature is ${fahrenheit} degrees fahrenheit`);
//calculating Newton from celsius using the below formula
let newton = celsius * (33 / 100);
//Rounding the figure using the *floor* from Math built-in function
newton = Math.floor(newton);
console.log(`The temperature is ${newton} degrees newton`);
