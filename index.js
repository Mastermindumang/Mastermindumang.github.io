var randomNumber = Math.floor(Math.random() * 6) + 1 ;

diceImage = "dice" + randomNumber + ".png"; // image number maker


var RandomImageSource = "images/" + diceImage ; // images source making



var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src",RandomImageSource);

// var image2 = document.querySelectorAll("img")[1];
// image2.setAttribute("src",varRandomImageSource);

var randomNumber2 = Math.floor(Math.random() * 6 ) + 1 ;
// diceImage2 = "dice" + randomNumber2 + ".png" ; //image number 2 making
// var RandomImageSource2 = "images/" + diceImage2 ;
var RandomImageSource2 = "images/dice" + randomNumber2 + ".png";

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",RandomImageSource2)


if(randomNumber>randomNumber2){
    document.querySelector("h1").innerHTML= "Player 1 wins"
}    else if(randomNumber2>randomNumber){
        document.querySelectorAll("h1").innerHTML = "Player 2 wins!!!!"
    }
else{document.querySelector("h1").innerHTML="Draw!!"}
