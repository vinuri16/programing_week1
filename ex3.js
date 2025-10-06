// Exercise 3: Sum of multiples in lists

// Part 1: Sum of multiples of a or b in list l
function eulerlist() {
    let a = parseInt(document.getElementById("a1").value);
    let b = parseInt(document.getElementById("b1").value);
    let l = document.getElementById("l").value.split(",").map(Number);

    if (isNaN(a) || isNaN(b) || l.some(isNaN)) {
        alert("Please enter valid numbers.");
        return;
    }

    let sum = 0;
    l.forEach(num => {
        if (num % a === 0 || num % b === 0) {
            sum += num;
        }
    });

    alert("Sum of multiples in list l = " + sum);
}

// Part 2: List a is length 2
function euler2Lists() {
    let aList = document.getElementById("aList").value.split(",").map(Number);
    let mList = document.getElementById("mList").value.split(",").map(Number);

    if (aList.some(isNaN) || mList.some(isNaN)) {
        alert("Please enter valid lists (comma-separated numbers).");
        return;
    }

    let sum = 0;
    mList.forEach(num => {
        for (let a of aList) {
            if (num % a === 0) {
                sum += num;
                break;
            }
        }
    });

    alert("Sum of multiples (List A into List M): " + sum);
}

// Part 3: List a may be any length
function euler2Lists1() {
    let aList = document.getElementById("aList").value.split(",").map(Number);
    let mList = document.getElementById("mList").value.split(",").map(Number);

    if (aList.some(isNaN) || mList.some(isNaN)) {
        alert("Please enter valid lists (comma-separated numbers).");
        return;
    }

    let sum = 0;
    aList.forEach(a => {
        mList.forEach(num => {
            if (num % a === 0) {
                sum += num;
            }
        });
    });

    alert("Alternative sum of multiples = " + sum);
}
