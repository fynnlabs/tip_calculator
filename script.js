const bill = document.getElementById("billInput");
const people = document.getElementById("inputNumberPeople");
const custom = document.getElementById("customInput")
const outputTipNumber = document.getElementById("outputTipNumber")
const outputTotalNumber = document.getElementById("outputTotalNumber")
const dollar = document.getElementById("dollar")
const person = document.getElementById("person")
resetBtn = document.getElementById("resetBtn");
fiveBtn = document.getElementById("fiveBtn");
tenBtn = document.getElementById("tenBtn");
fifteenBtn = document.getElementById("fifteenBtn");
twentyFiveBtn = document.getElementById("twentyFiveBtn");
fiftyBtn = document.getElementById("fiftyBtn");
customBtn = document.getElementById("customInput")
let errorTextBill = document.getElementById("errorTextBill");
let errorTextPeople = document.getElementById("errorTextPeople")
const borderErrorColor = "hsl(0, 73%, 50%)";
const defaultBorderColor = "hsl(189, 41%, 97%)"
let validatorTotalNumber = 0;
let Tip = 0;
let personTip = 0;
let totalPerson = 0;
let validatorPersonTip = 0;
let customTip = null;

resetBtn.addEventListener("click", handleResetBtnClick);
fiveBtn.addEventListener("click", function () {
    handleBtnClick(1.05);
});
tenBtn.addEventListener("click", function () {
    handleBtnClick(1.1);
});
fifteenBtn.addEventListener("click", function () {
    handleBtnClick(1.15);
});
twentyFiveBtn.addEventListener("click", function () {
    handleBtnClick(1.25);
});
fiftyBtn.addEventListener("click", function () {
    handleBtnClick(1.5);
});
customBtn.addEventListener("click", function () {
    handleBtnClick(customTip);
});


//calculates the different tips and checks if its valid
function handleBtnClick(a) {
    customTipValue()
    validator();
    if (bill.value > 0 && people.value > 0) {
        Tip = bill.value * a;
        personTip = (Tip - bill.value) / people.value;
        validatorPersonTip = personTip % 1;
        if (validatorPersonTip === 0) {
            outputTipNumber.innerHTML = "$" + personTip + ".00";
        } else {
            outputTipNumber.innerHTML = "$" + personTip.toFixed(2);
        }
        totalPerson = Tip / people.value;
        validatorTotalNumber = totalPerson % 1;
        if (validatorTotalNumber === 0) {
            outputTotalNumber.innerHTML = "$" + totalPerson + ".00";
        } else {
            outputTotalNumber.innerHTML = "$" + totalPerson.toFixed(2);
        }

    }
}

//clears the input and output fields on button click
function handleResetBtnClick(event) {
    outputTipNumber.innerHTML = "$0.00";
    outputTotalNumber.innerHTML = "$0.00";
    bill.value = "";
    people.value = "";
    custom.value = "";
}

//checks if the value in the inputs is valid
function validator() {
    if (bill.value < 0 || bill.value === "") {
        dollar.style.borderColor = borderErrorColor;
        errorTextBill.classList.add("errorTextBill")
        errorTextBill.innerHTML = "Can´t be zero"
    } else if (bill.value > 0) {
        dollar.style.borderColor = defaultBorderColor;
        errorTextBill.innerHTML = "";
    }

    if (people.value < 0 || people.value === "") {
        person.style.borderColor = borderErrorColor;
        errorTextPeople.classList.add("errorTextPeople")
        errorTextPeople.innerHTML = "Can´t be zero"
    } else if (people.value > 0) {
        person.style.borderColor = defaultBorderColor;
        errorTextPeople.innerHTML = "";
    }
}

function customTipValue() {
    customBtn.value > 0 ? customTip = 1 + (customBtn.value / 100) : null
}