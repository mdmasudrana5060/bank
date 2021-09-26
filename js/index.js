// index.html page er js
document.getElementById('login-btn').addEventListener('click', function () {
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;


    if (userEmail == "masud@gmail.com" && userPassword == "825029368") {
        window.location.href = "banking.html"//this is how we can connect another html page through js

    }
    else {
        alert('email and password are incorrect');
        emailField.value = ' ';
        passwordField.value = '';

    }

}

)
// index.html page er js end


// banking.html page er js start
document.getElementById('deposit-btn').addEventListener('click', function () {
    const depositInput = document.getElementById('deposit-input');
    const depositAmount = depositInput.value;
    const deposit = parseFloat(depositAmount);


    const currentDeposit = document.getElementById("current-deposit");
    const currentDepositAmount = currentDeposit.innerText;

    const current = parseFloat(currentDepositAmount);
    const totalDeposit = deposit + current;


    currentDeposit.innerText = totalDeposit;
    const currentBalance = document.getElementById('current-balance');


    const newBalance = parseFloat(currentBalance.innerText);
    const totaBalance = deposit + newBalance;
    currentBalance.innerText = totaBalance;



    depositInput.value = '';

})
//withdraw
document.getElementById('withdraw-btn').addEventListener('click', function () {

    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmount = withdrawInput.value;
    const newWithdraw = parseFloat(withdrawAmount);

    const currentWithdraw = document.getElementById('current-withdraw');
    const currentWithdrawAmount = currentWithdraw.innerText;
    const withdraw = parseFloat(currentWithdrawAmount);

    const totalWithdraw = withdraw + newWithdraw;
    currentWithdraw.innerText = totalWithdraw;
    withdrawInput.value = '';
    const currentBalance = document.getElementById('current-balance');


    const newBalance = parseFloat(currentBalance.innerText);
    const totaBalance = newBalance - totalWithdraw;
    currentBalance.innerText = totaBalance;






})
// banking.html page er js end

