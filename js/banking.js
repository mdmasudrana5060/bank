function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmount = inputField.value;
    const inputAmountNumber = parseFloat(inputAmount);
    inputField.value = '';
    return inputAmountNumber;

}
function updateTotalField(inputId, inputValue) {
    const current = document.getElementById(inputId);
    const currentAmount = current.innerText;

    const currentNumber = parseFloat(currentAmount);
    const total = inputValue + currentNumber;
    current.innerText = total;

}
function balance() {
    const currentBalance = document.getElementById('current-balance');
    const balanceInnerText = currentBalance.innerText;
    const balanceValue = parseFloat(balanceInnerText);
    return balanceValue;

}
function updateBalance(inputValue, isAdd) {
    const currentBalance = document.getElementById('current-balance');
    const balanceValue = balance();

    if (isAdd == true) {
        currentBalance.innerText = inputValue + balanceValue;

    }

    else {
        currentBalance.innerText = balanceValue - inputValue;

    }


}
document.getElementById('deposit-btn').addEventListener('click', function () {


    const deposit = getInputValue('deposit-input');
    if (deposit > 0) {
        updateTotalField("current-deposit", deposit);
        updateBalance(deposit, true);


    }





})
//withdraw
document.getElementById('withdraw-btn').addEventListener('click', function () {


    const newWithdraw = getInputValue('withdraw-input');
    const bal = balance();
    if (newWithdraw > 0 && newWithdraw < bal) {
        updateTotalField("current-withdraw", newWithdraw);
        updateBalance(newWithdraw, false);


    }





})