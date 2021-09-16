var check=false
function xequeMate(){
            if( check==false){
var time1=setInterval(function(){start()}, 1000); 
var time2=setTimeout(function() {end()
},13200); 
var count=10;
function start(){
    soundBeep();
    document.getElementById("time").
    innerHTML=count;
if(count==0){
    clearInterval(time1);
    soundthunder();
    document.getElementById("ice").
    src="Imagens/imagens_sons/explosion.gif";
    document.getElementById("time").
    innerHTML="GAME OVER";
}
count--;
}
check=true;
}
}
function soundthunder(){
    var beep=new Audio();
    beep.src="Imagens/imagens_sons/Thunder_Crack.mp3";
    beep.play()
}
function soundBeep(){
    var beep=new Audio();
    beep.src="Imagens/imagens_sons/Beep_Short.mp3";
    beep.play();
}
function end(){
    document.getElementById("ice").
    src="Imagens/bakakashi.jfif";
}