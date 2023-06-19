//Computing sum if two integers are different and tripling their sum if they are same
const a = Number(prompt('Enter integer a'));
const b = Number(prompt('Enter integer b'));
if(a == b){
    console.log('Triple their sum is '+(a+b)*3);
}
else{
    console.log('Their sum is '+(a+b));
}