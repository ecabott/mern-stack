//learning about object and functions
console.log('Object and function');
const person = {
    firstName: "John",
    lastName: "Doe",
    fullName: () => {
        return `${person.firstName} ${person.lastName}`
    },
};

const c = person.firstName;
const a = person.fullName();
console.log(c, a);

//Arrays
console.log('Arrays');
const arr = ['Bugatti', 'BMW', 'Porshe', {name:'alto'}];
//access the first item
const b = arr[0];
console.log(b);
//access the last item
const e = arr[arr.length - 1];
console.log(e);

console.log(arr.length);
console.log(arr.sort());
console.log(arr.push('new car'));
console.log(arr.pop());

