

document.querySelector("a").addEventListener("click",happen);




function happen()
{
var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

var randomDiceImage1 = "images/"+ "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png

document.querySelectorAll("img")[0].setAttribute("src",randomDiceImage1);

var randomNumber2 = Math.floor(Math.random() * 6) + 1; //1-6

var randomDiceImage2 = "images/"+ "dice" + randomNumber2 + ".png"; //dice1.png - dice6.png

document.querySelectorAll("img")[1].setAttribute("src",randomDiceImage2);

if(randomNumber1==randomNumber2)
{
document.querySelector("h1").textContent="Draw";
}
else if (randomNumber1>randomNumber2) {

  document.querySelector("h1").textContent= "Player 1 won!";
  document.querySelectorAll("p")[0].textContent= "Player 1";
}
else
{
document.querySelector("h1").textContent="Player 2 won";
  document.querySelectorAll("p")[1].textContent= "Player 2";
}
}
