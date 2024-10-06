document.getElementById("btn").addEventListener("click", Function)
    var dice = document.createElement("img")
    dice.src = "dice.gif";
    document.getElementById("diceContainer").appendChild(dice);

    var number = (Math.random() * 10) +1;
    document.getElementById("result").innerHTML = number;