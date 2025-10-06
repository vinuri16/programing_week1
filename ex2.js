// Exercise 2: Project Euler style problems

// Standard Euler 1: multiples of 3 or 5 below 1000
function euler1() {
    let sum = 0;
    for (let i = 0; i < 1000; i++) {
        if (i % 3 === 0 || i % 5 === 0) sum += i;
    }
    alert("Euler Problem 1 Solution (below 1000): " + sum);
}

// Custom sum of multiples of a or b below n
function eulerCustom() {
    let a = parseInt(document.getElementById("a").value);
    let b = parseInt(document.getElementById("b").value);
    let n = parseInt(document.getElementById("n").value);

    if (isNaN(a) || isNaN(b) || isNaN(n)) {
        alert("Please enter valid numbers for a, b, and n");
        return;
    }

    let sum = 0;
    for (let i = 0; i < n; i++) {
        if (i % a === 0 || i % b === 0) sum += i;
    }
    alert(`Custom sum of multiples of ${a} or ${b} below ${n} = ${sum}`);
}
