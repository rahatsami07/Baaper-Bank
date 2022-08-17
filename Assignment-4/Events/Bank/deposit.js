document.getElementById('deposit-btn').addEventListener('click', function() {
    const depositField = document.getElementById('deposit-field');
    const depositAmountString = depositField.value;
    const depositAmount = parseFloat(depositAmountString);
    if (isNaN(depositAmount)) {
        alert('Please provide a valid Number');
        return;
    }
    depositField.value = '';

    const depositTotalElement = document.getElementById('deposit-total');

    const previousDepositTotal = depositTotalElement.innerText;
    const depositTotal = parseFloat(previousDepositTotal)

    const currentDepositTotal = depositTotal + depositAmount;

    depositTotalElement.innerText = currentDepositTotal;

    const myPreviousBalance = document.getElementById('total-balance');
    const myBalance = myPreviousBalance.innerText;
    const balance = parseFloat(myBalance);
    const myCurrentBalance = balance + currentDepositTotal;
    myPreviousBalance.innerText = myCurrentBalance
});


document.getElementById('withdraw-btn').addEventListener('click', function() {
    const withdrawField = document.getElementById('withdraw-field');
    const WithdarwAmountString = withdrawField.value;
    const WithdarwAmount = parseFloat(WithdarwAmountString);
    withdrawField.value = '';
    if (isNaN(WithdarwAmount)) {
        alert('Please provide a valid Number');
        return;
    };

    const totalWithdraw = document.getElementById('total-withdraw');
    const totalWithdrawElementString = totalWithdraw.innerText;
    const totalWithdrawElement = parseFloat(totalWithdrawElementString);

    const currentWithdrawTotal = WithdarwAmount + totalWithdrawElement;
    totalWithdraw.innerText = currentWithdrawTotal;



    const previousBalance = document.getElementById('total-balance');
    const MyBalance = previousBalance.innerText;
    const Balance = parseFloat(MyBalance);



    const CurrentBalance = Balance - currentWithdrawTotal;
    previousBalance.innerText = CurrentBalance;


})