//Object
const person = {
    firstName: 'Ghost',
    lastName: 'Cat',
    email: 'ghostcat@google.com',
    password: '00000000',

    fullName: () => {
        // return `${person.firstName} ${person.lastName}`;
        return (`${person.firstName} ${person.lastName}`)
    },
};
console.log(person.fullName());

//Array
const androidArray = ['Kitkat', 'Lollipop', 'Marshmallow', 'Nougat', 'Oreo'];
console.log('original array', androidArray);
console.log(androidArray[androidArray.length-1]);
console.log('after pop');
console.log(androidArray.pop(),'popped');
console.log('after push')
console.log(androidArray.push('Pie', 'Q?'));
console.log(androidArray);