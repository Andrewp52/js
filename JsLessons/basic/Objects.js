// Simple obj declaration
const myCity = {
    name: 'New York'
}

console.table(myCity)


// Js objects are like hookers! Push and pull whatever you want

// Add new field.
myCity.country = 'USA'
console.table(myCity);

// Delete field.
delete myCity.name
console.table(myCity)

// Add field v2
myCity['popular'] = true;
console.table(myCity);

// Add field v2 with name from var
const stateField = 'state';
myCity[stateField] = 'NY';
console.table(myCity);

// ======================================
// Nested object
const myCity2 = {
    name: "Moscow",
    info: {
        population: 15_000_000,
        isCapital: true
    }
}

console.dir(myCity2);

//========================================
// Declaring object with the same fields names as earlier declared vars
const name = 'Andrew';
const age = 40;

const person = {
    name,
    age,
    hobby: 'gtr'
}
console.table(person);