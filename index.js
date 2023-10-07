var imgs=document.querySelectorAll("img");
var randomNumber1=Math.floor(6*Math.random() +1);
var randomNumber2=Math.floor(6*Math.random() +1);
var dice1="images/dice"+randomNumber1+".png";
var dice2="images/dice"+randomNumber2+".png";
imgs[0].setAttribute("src",dice1);
imgs[1].setAttribute("src",dice2);
// switch(randomNumber1){
//     case 1: dicee.querySelector("img.img1").setAttribute("src","images\dice1.png");
    
//     case 2: document.querySelector("img.img1").setAttribute("src","images\dice2.png");
    
//     case 3: document.querySelector("img.img1").setAttribute("src","images\dice3.png");
    
//     case 4: document.querySelector("img.img1").setAttribute("src","images\dice4.png");
    
//     case 5: document.querySelector("img.img1").setAttribute("src","images\dice5.png");
    
//     case 6: document.querySelector("img.img1").setAttribute("src","images\dice6.png");                    
    
// }

if(randomNumber1>randomNumber2)
document.querySelector("h1").innerHTML="Player 1 Won!🙋";    
else if(randomNumber1===randomNumber2)
document.querySelector("h1").innerHTML="Drawn...";
else
document.querySelector("h1").innerHTML="Player 2 Won!🙋";