
// DOM elements
var topUp = document.querySelectorAll(".topup");
var buyButton = document.querySelector(".buyButton");
var unitsAvailable = document.querySelector(".unitsAvailable");
var totalUnits = document.querySelector(".totalUnits");
var totalAmount = document.querySelector(".totalAmount");
var advanceTaken = document.querySelector(".advanceTaken");
var totalAmountSpent = document.querySelector(".totalAmountSpent");
var useElectricity = document.querySelectorAll(".useElectricity");
var useButton = document.querySelector(".useButton");




if (localStorage.getItem("unitsAvailable")) {
    unitsAvailable.innerHTML = localStorage.getItem("unitsAvailable");
}
if (localStorage.getItem("unitsTotal")) {
    totalUnits.innerHTML = localStorage.getItem("unitsTotal");
}

if (localStorage.getItem("amount")) {
    totalAmount.innerHTML = localStorage.getItem("amount");
}
// Factory Function instance 
const electricity = Electricity();

// Check for the selected radio button
function getSelectedAmount() {
    var selectedAmount = 0;
    topUp.forEach(function (radio) {
        if (radio.checked) {
            selectedAmount = Number(radio.value);
        }
    });
    return selectedAmount;
}

function getSelectedAppliance() {
    var selectedAppliance = "";
    useElectricity.forEach(function (radio) {
        if (radio.checked) {
            selectedAppliance = radio.value;
        }
    });
    return selectedAppliance;
}

buyButton.addEventListener("click", function () {
    var amount = getSelectedAmount();
    var units = electricity.topUpElectricity(amount);
    unitsAvailable.innerHTML = units;
    localStorage.setItem("unitsAvailable", units);
    totalUnits.innerHTML = units
    localStorage.setItem("unitsTotal", units);
    totalAmount.innerHTML = amount
    localStorage.setItem("amount", amount);
});

useButton.addEventListener("click", function () {
    var appliance = getSelectedAppliance();
    var applianceUsed = electricity.useAppliance(appliance);
    
    if (applianceUsed) {
        unitsAvailable.innerHTML = electricity.getUnitsAvailable();
    }
});
