//Printing Hello World
console.log('Hello World');

//Getting value of pi
console.log(Math.PI);

//Computing sum if two integers are different and tripling their sum if they are same
const a = Number(prompt('Enter integer a'));
const b = Number(prompt('Enter integer b'));
if(a == b){
    console.log('Triple their sum is '+(a+b)*3);
}
else{
    console.log('Their sum is '+(a+b));
}

//Checking if a given number is a multiple of 3 or 7
const c = Number(prompt('Enter a number'));
if(c%3 == 0 && c%7 == 0){
    console.log('It is a multiple of both 3 and 7');
}
else if(c%3 == 0){
    console.log('It is a multiple of 3');
}
else if(c%7 == 0){
    console.log('It is a multiple of 7');
}
else{
    console.log('It is not a multiple of 3 or 7');
}

//Getting current date
console.log(Date());

//Calculating multiplication and division of two numbers
const d = Number(prompt('Enter a number'));
const e = Number(prompt('Enter a number'));
const mnd = (a, b) =>
{
    console.log(a*b);
    console.log(a/b);
}
mnd(d, e);

//Conversion between Celsius & Fahrenheit
const oldC = Number(prompt('Enter temperature in ℃'));
const oldF = Number(prompt('Enter temperature in ℉'));
const newC = ((oldF-32)/9)*5;
const newF = ((oldC/5)*9)+32;
console.log(oldC+'℃ is '+newF+'℉');
console.log(oldF+'℉ is '+newC+'℃');

//Counting number of vowels in a string
const f = prompt('Enter a string');
const countVowels = (str) =>
{
    const vowels = 'AaEeIiOoUu';
    let count = 0;
    for(const char of str)
    {
        if(vowels.includes(char))
        {
            count++;
        }
    }
    console.log(count);
}
countVowels(f);