// std. declaration
function a() {
    console.log("Hello! Std dec");
}

// a = 10; // when call happens - TypeError: a is not a function. Pure f.... evil!
a();


// Arrow declaration with const (reassignment is not possible)
const b = () => {
    console.log("Hello! Arrow dec");
}

// b = 10; // TypeError: Assignment to constant variable. Nice.
b();