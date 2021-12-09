var initialPrice = document.querySelector("#initial-price")
var quantity = document.querySelector("#quantity-of-stocks")
var currentPrice = document.querySelector("#current-price")
var btn = document.querySelector("#check-button")
var output = document.querySelector("#output")



function profitOrLoss () {
    var initial = Number(initialPrice.value);
    var qty = Number(quantity.value);
    var current = Number(currentPrice.value);

    calculateProfitAndLoss();
}


function calculateProfitAndLoss () {
     if (initialPrice > currentPrice) {
         var loss = (initialPrice - currentPrice)*quantity
         var lossPercentage = (initialPrice/currentPrice)*100
         output.innerText = "loss is " + loss + " and percentage loss is " + lossPercentage;  
     } else if (initialPrice < currentPrice) {
         var profit = (currentPrice-initialPrice)*quantity
         var profitPercentage = (currentPrice/initialPrice)*100
         output.innerText = "Profit is " + profit + " and percentage profit is " + profitPercentage;
     } else {
        output.innerText = "no pain, no gain and no gain, no pain";
         
     }

}

btn.addEventListener("click", profitOrLoss);