//learning about object and functions
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