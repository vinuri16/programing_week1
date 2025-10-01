// Project Euler Problem 1: Sum of multiples of 3 or 5 below 1000
let euler1 = () => {
    let sum = 0;
    for (let i = 0; i < 1000; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }
    document.getElementById("result").textContent = "Sum of multiples of 3 or 5 below 1000 = " + sum;
};

// Custom sum: sum of multiples of a or b below n
let eulerCustom = () => {
    let a = parseInt(document.getElementById("a").value);
    let b = parseInt(document.getElementById("b").value);
    let n = parseInt(document.getElementById("n").value);

    let sum = 0;
    for (let i = 0; i < n; i++) {
        if (i % a === 0 || i % b === 0) {
            sum += i;
        }
    }
    document.getElementById("result").textContent = 
        "Sum of multiples of " + a + " or " + b + " below " + n + " = " + sum;
};

