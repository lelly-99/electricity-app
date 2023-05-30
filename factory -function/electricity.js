function Electricity() {

    // do we want to go with this or array? 
    let appliances = {
        'Stove': 10, 
        'Kettle': 5, 
        'TV': 3, 
        'Fridge': 13
    };

    var units = 0
    var unitsAvailable = 0
    var advance = 0
    var amountSpent = 0
    var totalUnits = 0
    //advance not taken
    var advance = false

    function topUpElectricity(amount) {
        if(amount === 10){
            units += 7
        }else if(amount === 20){
            units += 14
        }else if(amount === 50){
            units += 35
        }else if(amount === "advance" && advance === false){
            units += 21
            advance =  true
        }
        return units
    }

    function getUnitsAvailable() {
        return unitsAvailable += units;
    }

    /*
    * return true and substract from unit available if there is enough units to use the appliance
    * other wise return false and do nothing.
    */
    function useAppliance(appliance) {
        if (appliances.hasOwnProperty(appliance)) {
            if (unitsAvailable >= appliances[appliance]) {
                unitsAvailable -= appliances[appliance];
                return true;
            }
        }else{
            return false;
        }
    }

    function advanceTaken() {
        if(unitsAvailable && advance === false){
            units += 21
            advance =  true
        }
        return advance;
    }

    function totalAmountSpent() {
        return amountSpent
    }

    function totalUnitsBought(){
        return totalUnits
    }

    return {
        advanceTaken,
        topUpElectricity,
        getUnitsAvailable,
        useAppliance,
        totalAmountSpent,
        totalUnitsBought

    }
}