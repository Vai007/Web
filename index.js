var ran1=Math.floor(Math.random()*6)+1;
var ran2=Math.floor(Math.random()*6)+1;

var image1="dice"+ran1+".png";
var li1="images/"+image1;

var image2="dice"+ran2+".png";
var li2="images/"+image2;


document.querySelectorAll("img")[0].setAttribute("src",li1);
document.querySelectorAll("img")[1].setAttribute("src", li2);

if(ran1>ran2){
    document.querySelector("h1").innerHTML=("Player1 Wins");
}
else if(ran1<ran2){
    document.querySelector("h1").innerHTML=("Player2 Wins");
}
else{
    document.querySelector("h1").innerHTML=("Draw");
}