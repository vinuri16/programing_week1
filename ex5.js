// ex5.js

function computeFactorsMultiplesEx5() {
    const original = document.getElementById("ex5input").value;
    const input = original.trim();
    const outputEl = document.getElementById("ex5output");

    if (!input.includes(":")) {
        outputEl.textContent = "corrupt : " + original;
        return;
    }

    const parts = input.split(":");
    if (parts.length < 2) { // more robust than just includes
        outputEl.textContent = "corrupt : " + original;
        return;
    }

    const factorsStr = parts[0].trim();
    const multiplesStr = parts.slice(1).join(":").trim(); // allow extra colons in right part

    if (factorsStr === "" || multiplesStr === "") {
        outputEl.textContent = "corrupt : " + original;
        return;
    }

    const factorTokens = getTokens(factorsStr);
    const multipleTokens = getTokens(multiplesStr);

    let validFactors = [];
    let validMultiples = [];
    let corrupt = false;

    // parse tokens strictly: only optional leading '-' and digits allowed
    for (let t of factorTokens) {
        if (isStrictInteger(t)) {
            validFactors.push(Number(t));
        } else {
            corrupt = true;
        }
    }

    for (let t of multipleTokens) {
        if (isStrictInteger(t)) {
            validMultiples.push(Number(t));
        } else {
            corrupt = true;
        }
    }

    // If one side has no valid numbers -> cannot compute
    if (validFactors.length === 0 || validMultiples.length === 0) {
        outputEl.textContent = "corrupt : " + original;
        return;
    }

    // compute sum of multiples (omit corrupted values)
    let sum = 0;
    for (let num of validMultiples) {
        for (let f of validFactors) {
            if (f !== 0 && num % f === 0) { // avoid division by zero
                sum += num;
                break;
            }
            // if f === 0, skip (0 can't be a valid divisor)
        }
    }

    // Output: "<sum> : <original input>" (corrupted values omitted from computation)
    outputEl.textContent = sum + " : " + original;
}

// helpers
function getTokens(s) {
    // Return array of non-empty tokens separated by any whitespace
    const arr = s.match(/\S+/g);
    return arr ? arr : [];
}

function isStrictInteger(tok) {
    // Matches optional leading + or - and then one or more digits, no trailing garbage
    return /^[-+]?\d+$/.test(tok);
}
