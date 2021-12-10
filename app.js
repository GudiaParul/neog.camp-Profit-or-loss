var initialPrice = document.querySelector("#initial-price")
var quantity = document.querySelector("#quantity-of-stocks")
var currentPrice = document.querySelector("#current-price")
var btn = document.querySelector("#check-button")
var output = document.querySelector("#output")

function calculateProfitAndLoss() {
    if (initial > current) {
        var loss = initial - current;
        var totalLoss = loss * qty;
        var lossPercentage = (loss/initial)*100
        output.innerText = "loss is " + totalLoss + " and percentage loss is " + lossPercentage;  
    } else if (initial < current) {
        var profit = current-initial;
        var totalProfit = profit * qty;
        var profitPercentage = (profit/initial)*100
        output.innerText = "Profit is " + totalProfit + " and percentage profit is " + profitPercentage;
    } else {
       output.innerText = "no pain, no gain and no gain, no pain";
    }
}

function profitOrLoss () {
    var initial = Number(initialPrice.value);
    var qty = Number(quantity.value);
    var current = Number(currentPrice.value);

    calculateProfitAndLoss();
}




btn.addEventListener("click", profitOrLoss);