// Helper to parse a string into a number array
function parseNums(str) {
    return str.trim().split(/\s+/).map(Number).filter(n => !isNaN(n));
}

// Main function for Exercise 4
function computeFactorsMultiples() {
    let input = document.getElementById("ex4input").value;
    let outputBox = document.getElementById("ex4output");

    if (!input.includes(":")) {
        outputBox.textContent = "Invalid format. Use 'factors : multiples'";
        return;
    }

    // Split into two sides
    let [factorsStr, multiplesStr] = input.split(":").map(s => s.trim());

    let factors = parseNums(factorsStr);
    let multiples = parseNums(multiplesStr);

    if (factors.length === 0 || multiples.length === 0) {
        outputBox.textContent = "Invalid input: factors or multiples missing.";
        return;
    }

    // Compute sum of multiples
    let sum = multiples.reduce((acc, num) => {
        return factors.some(f => f !== 0 && num % f === 0) ? acc + num : acc;
    }, 0);

    // Build output string
    let result = `${sum} : ${factors.join(" ")} : ${multiples.join(" ")}`;
    outputBox.textContent = result;
}
