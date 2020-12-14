var randomNumber1=Math.floor(Math.random()*6)+1;
var requiredimage1="images/dice"+randomNumber1+".png";
var randomNumber2=Math.floor(Math.random()*6)+1;
var requiredimage2="images/dice"+randomNumber2+".png";
document.querySelectorAll("img")[0].setAttribute("src",requiredimage1);
document.querySelectorAll("img")[1].setAttribute("src",requiredimage2);
if(randomNumber1>randomNumber2){
    document.querySelector("h1").textContent="Player 1 won the Toss!";
}
else if(randomNumber2>randomNumber1){
    document.querySelector("h1").textContent="Player 2 won the Toss!";
}
else{
    document.querySelector("h1").textContent="Refresh once again";
}