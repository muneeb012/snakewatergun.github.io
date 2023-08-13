let computer = Math.floor(Math.random()*3)
// 0=Snake 1=Gun 2=Water
let user=null
function snake(){
    if(computer==0){
    document.getElementById("result").innerHTML="Draw computer Select Snake"
    document.getElementById("playagain").style.display="flex"
    }


else if(computer==1) {
    document.getElementById("result").innerHTML=" You Lose computer Select Gun"
    document.getElementById("playagain").style.display="flex"
}
else if(computer==2){
    document.getElementById("result").innerHTML="You Win computer Select Water"
    document.getElementById("playagain").style.display="flex"
}

}
function water(){
if(computer==0){
    document.getElementById("result").innerHTML="You lose computer Select Snake"
    document.getElementById("playagain").style.display="flex"
}
else if(computer==2){
    document.getElementById("result").innerHTML="Draw computer Select Water"
    document.getElementById("playagain").style.display="flex"
}
else if(computer==1){
    document.getElementById("result").innerHTML="You Win computer Select Gun"
    document.getElementById("playagain").style.display="flex"
}

}
function gun(){
if(computer==0){
    document.getElementById("result").innerHTML="You Win computer Select Snake"
    document.getElementById("playagain").style.display="flex"
}
else if (computer==1){
    document.getElementById("result").innerHTML="Draw computer Select Gun"
    document.getElementById("playagain").style.display="flex"
}
else if(computer==2){
    document.getElementById("result").innerHTML="You Lose computer Select Water"
    document.getElementById("playagain").style.display="flex"
}

}
function share(){
    navigator.clipboard.writeText(copyText=window.location.href);
alert("Link Copied Successfully")
}