//Checking if a given number is a multiple of 3 or 7
const a = Number(prompt('Enter a number'));
if(a%3 == 0 && a%7 == 0){
    console.log('It is a multiple of both 3 and 7');
}
else if(a%3 == 0){
    console.log('It is a multiple of 3');
}
else if(a%7 == 0){
    console.log('It is a multiple of 7');
}
else{
    console.log('It is not a multiple of 3 or 7');
}