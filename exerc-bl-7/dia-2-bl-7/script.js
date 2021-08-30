const customer1 = {
    firstName: 'Roberto',
    age: 22,
    job: 'Teacher',
};

console.log(Object.entries(customer1));

customer1.lastname = 'Faria';
customer1['country'] = 'BRASIL';

console.log(customer1);

const customer = {
    firstName: 'Roberto',
    age: 22,
    job: 'Teacher',
};

let newKey = 'lastName';
const lastName = 'Ferreira';
customer[newKey] = lastName;
newKey = 'fullName';
const fullName = `${customer.firstName} ${customer.lastName}`;
customer[newKey] = fullName;
console.log(customer);

const makeObject = (object, key, value) => {
    object[key] = value;
    return object
}

console.log(makeObject({}, 'name', 'Roberto'));