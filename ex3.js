// Exercise 3: multiples with lists

// Helper to parse comma-separated numbers safely
function parseList(str) {
    return str.replace(/[\[\]\s]/g, '')  // remove [ ] and spaces
              .split(',')
              .map(x => Number(x))
              .filter(x => !isNaN(x));
}

// Part 1: Sum of multiples of a or b in list l
function eulerListAB() {
    let a = parseInt(document.getElementById("a1").value);
    let b = parseInt(document.getElementById("b1").value);
    let l = parseList(document.getElementById("l").value);

    if (isNaN(a) || isNaN(b) || l.length === 0) {
        alert("Please enter valid numbers.");
        return;
    }

    let sum = l.reduce((acc, num) => (num % a === 0 || num % b === 0) ? acc + num : acc, 0);
    alert("Sum of multiples in list l = " + sum);
}

// Part 2: List a of length 2
function euler2Lists() {
    let aList = parseList(document.getElementById("aList").value);
    let mList = parseList(document.getElementById("mList").value);

    if (aList.length === 0 || mList.length === 0) {
        alert("Please enter valid lists.");
        return;
    }

    let sum = mList.reduce((acc, num) => {
        return aList.some(a => num % a === 0) ? acc + num : acc;
    }, 0);

    alert("Sum of multiples (List A into List M): " + sum);
}

// Part 3: List a may be any length
function euler2ListsAny() {
    let aList = parseList(document.getElementById("aList").value);
    let mList = parseList(document.getElementById("mList").value);

    if (aList.length === 0 || mList.length === 0) {
        alert("Please enter valid lists.");
        return;
    }

    let sum = 0;
    aList.forEach(a => {
        mList.forEach(num => {
            if (num % a === 0) sum += num;
        });
    });

    alert("Alternative sum of multiples = " + sum);
}
