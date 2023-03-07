// Function is using as callback
cbFunc = () => {
    console.log("I'm callback!");
}

someFunc = (callback) => {
    console.log("i'm some function!")
    callback();
}

someFunc(cbFunc);

// setTimeout(cbFunc, 3000);