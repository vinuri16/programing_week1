function euler1() {
    let sum = 0;
    for (let i = 1; i < 1000; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }
    document.getElementById("result").innerText =
        "Sum of multiples of 3 or 5 below 1000 is: " + sum;
}

function eulerCustom() {
    const a = parseInt(document.getElementById("a").value);
    const b = parseInt(document.getElementById("b").value);
    const n = parseInt(document.getElementById("n").value);

    if (isNaN(a) || isNaN(b) || isNaN(n)) {
        document.getElementById("result").innerText =
            "Please enter valid numbers for A, B, and N.";
        return;
    }

    let sum = 0;
    for (let i = 1; i < n; i++) {
        if (i % a === 0 || i % b === 0) {
            sum += i;
        }
    }

    document.getElementById("result").innerText =
        `Sum of multiples of ${a} or ${b} below ${n} is: ` + sum;
}
