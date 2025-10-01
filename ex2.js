// Project Euler Q1: Sum of multiples of 3 or 5 below 1000
function euler1() {
    let sum = 0;
    for (let i = 0; i < 1000; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }
    document.getElementById("result").textContent =
        "Sum of multiples of 3 or 5 below 1000 = " + sum;
}

// Custom multiples sum
function eulerCustom() {
    let a = parseInt(document.getElementById("a").value);
    let b = parseInt(document.getElementById("b").value);
    let n = parseInt(document.getElementById("n").value);
    let result = document.getElementById("result");

    if (isNaN(a) || isNaN(b) || isNaN(n)) {
        result.textContent = "Please enter valid numbers for A, B, and N.";
        return;
    }

    let sum = 0;
    for (let i = 0; i < n; i++) {
        if (i % a === 0 || i % b === 0) {
            sum += i;
        }
    }
    result.textContent =
        "Sum of multiples of " + a + " or " + b + " below " + n + " = " + sum;
}
