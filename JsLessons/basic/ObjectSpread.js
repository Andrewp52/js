const figure = {
    x: 0,
    y: 100
}

const line = {
    ...figure, // ... spreads figure`s properties
    length: 10
}

console.table(line);
