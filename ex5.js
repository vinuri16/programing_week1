function computeFactorsMultiplesEx5() {
    const input = document.getElementById("ex4input").value.trim();
    const output = document.getElementById("ex4output");
    
    // Check colon
    if (!input.includes(":")) {
        output.textContent = "corrupt : " + input;
        return;
    }

    let [factorsStr, multiplesStr] = input.split(":").map(s => s.trim());

    let factors = factorsStr.split(" ");
    let multiples = multiplesStr.split(" ");

    let validFactors = [];
    let validMultiples = [];
    let corrupt = false;

    // Parse factors
    for (let f of factors) {
        try {
            validFactors.push(parseIntChecked(f));
        } catch (e) {
            corrupt = true;
        }
    }

    // Parse multiples
    for (let m of multiples) {
        try {
            validMultiples.push(parseIntChecked(m));
        } catch (e) {
            corrupt = true;
        }
    }

    // If all are invalid
    if (validFactors.length === 0 || validMultiples.length === 0) {
        output.textContent = "corrupt : " + input;
        return;
    }

    // Compute sum of multiples
    let sum = 0;
    for (let num of validMultiples) {
        for (let f of validFactors) {
            if (num % f === 0) {
                sum += num;
                break;
            }
        }
    }

    if (corrupt)
        output.textContent = sum + " : " + input;
    else
        output.textContent = sum + " : " + input;
}

// helper
function parseIntChecked(i) {
    let n = parseInt(i);
    if (isNaN(n)) throw "NaN";
    return n;
}
