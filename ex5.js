// ex5.js

function computeFactorsMultiplesEx5() {
  const inputField = document.getElementById("ex5input");
  const outputField = document.getElementById("ex5output");

  if (!inputField || !outputField) {
    console.error("Exercise 5 elements not found — check HTML IDs.");
    return;
  }

  const original = inputField.value.trim();

  // must contain colon
  if (!original.includes(":")) {
    outputField.textContent = "corrupt : " + original;
    return;
  }

  const [factorsPart, multiplesPart] = original.split(":").map(s => s.trim());

  if (!factorsPart || !multiplesPart) {
    outputField.textContent = "corrupt : " + original;
    return;
  }

  const factorTokens = factorsPart.split(/\s+/);
  const multipleTokens = multiplesPart.split(/\s+/);

  const validFactors = [];
  const validMultiples = [];
  let corrupt = false;

  for (const t of factorTokens) {
    if (/^-?\d+$/.test(t)) validFactors.push(Number(t));
    else corrupt = true;
  }

  for (const t of multipleTokens) {
    if (/^-?\d+$/.test(t)) validMultiples.push(Number(t));
    else corrupt = true;
  }

  if (validFactors.length === 0 || validMultiples.length === 0) {
    outputField.textContent = "corrupt : " + original;
    return;
  }

  // compute sum of valid multiples
  let sum = 0;
  for (const m of validMultiples) {
    for (const f of validFactors) {
      if (f !== 0 && m % f === 0) {
        sum += m;
        break;
      }
    }
  }

  outputField.textContent = sum + " : " + original;
}
