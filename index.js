var randomNumber1=Math.random();
randomNumber1=Math.floor(randomNumber1*6)+1;
var imgdisplay1="images/dice" + randomNumber1 + ".png";
document.querySelector("img.imgl").setAttribute("src", imgdisplay1);

var randomNumber2=Math.random();
randomNumber2=Math.floor(randomNumber2*6)+1;
var imgdisplay2="images/dice"+randomNumber2+".png";
document.querySelector("img.imgr").setAttribute("src", imgdisplay2);

if(randomNumber1>randomNumber2)
{
  document.querySelector("h1").innerHTML="Player 1 Wins!!";
}
else if(randomNumber1<randomNumber2)
{
  document.querySelector("h1").innerHTML="Player 2 Wins!!";
}
else
{
  document.querySelector("h1").innerHTML="DRAW!"
}
