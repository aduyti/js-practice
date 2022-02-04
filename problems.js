var myString = "test string";
let testBoolean = false;
const px = 3.1416;

testBoolean = true;

var testArray = [1, 2, 3, 4, 5];
var names = ["jo", "jon", "jhroni", "joni", "jhoni"]
const myCar = {
    engine: 1200,
    fuel: "Hybrid",
    mileage: 3200,
    modelYear: "2015",
};

function feetToInch(feet) {
    return parseFloat((feet * 12).toFixed(2));
}
function inchToFeet(inch) {
    return inch / 12;
}

function centimeterToMeter(centimeter) {
    return centimeter * 100;
}

function paperRequirements(firstBook = 0, secondBook = 0, thirdBook = 0) {
    return (firstBook * 100) + (secondBook * 200) + (thirdBook * 300);
}

function bestFriend(names) {
    let bestName = "";
    for (const name of names) {
        if (bestName.length < name.length) {
            bestName = name;
        }
    }
    return bestName;
}
console.log(bestFriend(names));