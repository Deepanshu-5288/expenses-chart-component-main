var dailyAmount = [
    {
      "day": "mon",
      "amount": 17.45
    },
    {
      "day": "tue",
      "amount": 34.91
    },
    {
      "day": "wed",
      "amount": 52.36
    },
    {
      "day": "thu",
      "amount": 31.07
    },
    {
      "day": "fri",
      "amount": 23.39
    },
    {
      "day": "sat",
      "amount": 43.28
    },
    {
      "day": "sun",
      "amount": 25.48
    }
  ];
var maxAmount=0;
for(let i = 0; i < dailyAmount.length;i++){
    if(dailyAmount[i].amount>maxAmount){
        maxAmount = dailyAmount[i].amount;
    }
}
var barHeight = .1;
for(let i =0;  i < dailyAmount.length;i++){
    if(dailyAmount[i].amount == maxAmount){
        document.querySelectorAll(".bar")[i].style.height = "8rem";
        document.querySelectorAll(".bar")[i].classList.add("bar-max");
    }else{
        barHeight = (dailyAmount[i].amount/maxAmount)*8;
        document.querySelectorAll(".bar")[i].style.height = barHeight+"rem";
    }
    
}

for(let i =0;  i < dailyAmount.length;i++){
    document.querySelectorAll(".bar")[i].addEventListener("mouseenter", () =>{
        document.querySelectorAll(".daily-spent")[i].innerText =  "$"+dailyAmount[i].amount;
        document.querySelectorAll(".daily-spent")[i].classList.add("day-amount");
        document.querySelectorAll(".daily-spent")[i].classList.remove("day-amount-hide");

    });
    document.querySelectorAll(".bar")[i].addEventListener("mouseleave", () =>{
        document.querySelectorAll(".daily-spent")[i].classList.remove("day-amount");
        document.querySelectorAll(".daily-spent")[i].classList.add("day-amount-hide");

    });
}
