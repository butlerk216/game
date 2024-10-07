document.getElementById("btn").addEventListener("click",function(){
    var number = (Math.random() * 10) + 1;
    document.getElementById("result").innerHTML = number;

})