
const city = {
    name: 'NY',
    popular: true
}
console.table(city);

// Simple Ref to object
const c = city;
c.name = 'LA'; // Mutates original object

// Avoiding declared object mutation

// By assigning a new object (Doesn't affect on Nested objects - they will contain ref to originals)
const c2 = Object.assign({}, city);
c2.name = 'SF';

// Spreading original properties into a new object (Doesn't affect on Nested objects - they will contain ref to originals)
const c3 = { ...city}
c3.name = 'TX'

// By JSON conversion (Nested objects are also copied)
const c4 = JSON.parse(JSON.stringify(city));

