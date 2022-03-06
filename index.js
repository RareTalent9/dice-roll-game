

var randomNumber1 = Math.floor((Math.random() * 6)) + 1;
var randomNumberImage1 = "images/dice" + randomNumber1 + ".png";
document.querySelector(".img1").setAttribute("src", randomNumberImage1);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomNumberImage2 = "images/dice" + randomNumber2 + ".png";
document.querySelector(".img2").setAttribute("src", randomNumberImage2);

// document.querySelector(".player1").textContent = firstPlayer;
// document.querySelector(".player2").textContent = secondPlayer;

if(randomNumber1 === randomNumber2)
{
  document.querySelector("h1").textContent = "It's a Draw";
}
else if (randomNumber1 > randomNumber2)
{
  document.querySelector("h1").textContent = "Player 1 Wins 🚩";
}
else{
  document.querySelector("h1").textContent = "Player 2 Wins 🚩";
}
