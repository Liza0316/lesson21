var countryCost = { "Ukraine": 500,"Italy": 1500,"Thailand": 1000};
var decidedCountry = prompt("Desired vacation country:");
console.log(decidedCountry);
var ownBudget = parseFloat(prompt("Travel budget:"));
console.log(ownBudget);
switch (decidedCountry) {
    case "Ukraine":
        if (ownBudget >= countryCost["Ukraine"]) {
            alert("You can afford a trip to Ukraine.");
            console.log("customer can offer that");
        } else {
            alert("Your budget is not enough for a trip to Ukraine.");
            console.log("customer can't offer that");
        }
        break;
    case "Italy":
        if (ownBudget >= countryCost["Italy"]) {
            alert("You can afford a trip to Italy.");
            console.log("customer can offer that");
        } else {
            alert("Your budget is not enough for a trip to Italy.");
            console.log("customer can't offer that");
        }
        break;
    case "Thailand":
        if (ownBudget >=countryCost["Thailand"]) {
            alert("You can afford a trip to Thailand.");
            console.log("customer can offer that");
        } else {
            alert("Your budget is not enough for a trip to Thailand.");
            console.log("customer can't offer that");
        }
        break;
    default:
        alert("The country is not found in the list.");
}