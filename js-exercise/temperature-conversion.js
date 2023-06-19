//Conversion between Celsius & Fahrenheit
const oldC = Number(prompt('Enter temperature in ℃'));
const oldF = Number(prompt('Enter temperature in ℉'));
const newC = ((oldF-32)/9)*5;
const newF = ((oldC/5)*9)+32;
console.log(oldC+'℃ is '+newF+'℉');
console.log(oldF+'℉ is '+newC+'℃');