const figure = {
    x: 0,
    y: 100,
    color: 'red'
}

const line = {
    ...figure, // ... spreads figure`s properties
    length: 10
}
console.table(line);

// Order does matter
const line2 = {
    ...line,
    color: 'white' // figure`s color will be overwritten
}
console.table(line2)

const line3 = {
    color: 'blue', // this color will be overwritten by figure`s color
    ...line
}
console.table(line3);
