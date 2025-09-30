function check() {
    const weightInput = document.getElementById('weight').value;
    const weight = parseFloat(weightInput);
    const result = document.getElementById('result'); 

    if (isNaN(weight)) {
        alert("Please enter a valid number for baggage weight.");
        result.textContent = ""; 
        return;
    }

    const limit = 15;

    if (weight > limit) {
        const excess = weight - limit;
        alert("Overweight baggage! (" + weight + " kg)\n" +
              "You need to reduce " + excess + " kg to meet the " + limit + " kg limit.");

        result.textContent = "You need to reduce " + excess + " kg.";
        result.style.color = "red";
    } else {
        alert("Baggage weight is OK. (" + weight + " kg)");
        result.textContent = "Baggage weight is OK.";
        result.style.color = "green";
    }
}
