document.getElementById("btn").addEventListener("click", Function)
    var diceContainer = document.createElement("btn")
    dice.src = "rollingdice.gif";
    document.getElementById("diceContainer").appendChild(dice);

    var number = (Math.random() * 10) +1;
    document.getElementById("result").innerHTML = number;