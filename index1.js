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
const cars = ['Bugatti', 'BMW', 'Porshe', {name:'alto'}];
//access the first item
const b = cars[0];
console.log(b);
//access the last item
const e = cars[cars.length - 1];
console.log(e);

console.log(cars.length);
console.log(cars.sort());
console.log(cars.push('new car'));
console.log(cars.pop());

//User model
const user = {
    firstName: 'John',
    lastName: 'Cena',
    email: 'john@cena.com',
    password: '12345678',
    phone: '9800000000',
};

//User list
const {password, phone, ...rest} = user;
console.log({rest});