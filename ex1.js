// Function to check baggage weight
function check() {
    const weightInput = document.getElementById('weight').value;
    const weight = parseFloat(weightInput);

    if (isNaN(weight)) {
        alert("Please enter a valid number for baggage weight.");
        return;
    }

    const limit = 15;

    if (weight > limit) {
        const excess = weight - limit;
        alert("Overweight baggage! (" + weight + " kg)\n" +
              "You need to reduce " + excess + " kg to meet the " + limit + " kg limit.");
    } else {
        alert("Baggage weight is OK. (" + weight + " kg)");
    }
}
