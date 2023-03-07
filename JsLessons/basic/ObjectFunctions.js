// Arrow method declaration
const city = {
    name: 'NY',
    greetings: (name) => {
        console.log("hello " + name)
    }
}
console.table(city);
city.greetings("Andrew");

// Shrinked method declaration
const city2 = {
    name: 'NY',
    greetings(name) {
        console.log("hello " + name)
    }
}
console.table(city2);
city2.greetings("Andrew");

