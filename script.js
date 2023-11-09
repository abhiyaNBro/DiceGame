var randomNumber1= Math.floor(Math.random()*6+1);
console.log(randomNumber1);

var randomNumber2= Math.floor(Math.random()*6+1);
console.log(randomNumber2);

var randomNumberDice1= "images/dice"+randomNumber1+".png";
var randomNumberDice2= "images/dice"+randomNumber2+".png";

var image1= document.querySelectorAll("img")[0].setAttribute("src",randomNumberDice1);
var image2= document.querySelectorAll("img")[1].setAttribute("src",randomNumberDice2);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="🚩Player 1 wins!";
}
else if (randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML=  "Player 2 Wins! 🚩";

}
else{
    document.querySelector("h1").innerHTML="DRAW";
    
}