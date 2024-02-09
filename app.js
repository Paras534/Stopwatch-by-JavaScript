const start=document.querySelector("#start");
const stop1=document.querySelector("#stop");
const reset=document.querySelector("#reset");
const lap=document.querySelector("#lap");
var mili=document.querySelector("#mili");
var sec=document.querySelector("#sec");
var min=document.querySelector("#min");
var hrs=document.querySelector("#hrs");
var lapinfo=document.querySelector("#lapinfo");

var count=0;

var time=[0,0,0,0];
var timer=false;
start.disabled=false;

function startT(){
    start.disabled=true;
timer=true;
stopwatch();
}
function stopT(){
    start.disabled=false;
    timer=false;
}
function resetT(){
    start.disabled=false;
    timer=false;
    count=0;

    mili.innerText="00";
    sec.innerText="00";
    min.innerText="00";
    hrs.innerText="00";
    time=[0,0,0,0];
    lapinfo.innerText="";
    
}


function stopwatch(){
    if(time[3]==100){
    sec.innerText=++time[2];
    time[3]=0;
        
    }
    if(time[2]==60){
        sec.innerHTML="00";
        min.innerHTML=++time[1];
        time[2]=0;
    }   
    if(time[1]==60){
        min.innerHTML="00";
        hrs.innerHTML=++time[0];
        time[1]=0;
    }
    if(timer==true){
        setTimeout("stopwatch()",10);
        mili.innerText=time[3]++;
    }
    if(time[0]>99){
        onlyReset();
    }
}

function onlyReset(){//To stop when hours occur 99
stopT();
start.disabled=true;
stop1.disabled=true;

}

function lapPrint(){
    count++;
    lapinfo.innerHTML= `Lap ${count} ${time[0]}:${time[1]}:${time[2]}:${time[3]}<hr>`+lapinfo.innerHTML;
    
    console.log(`Lap ${count} ${time[0]}:${time[1]}:${time[2]}:${time[3]}`);
    
}
start.addEventListener("click" ,startT);
reset.addEventListener("click",resetT);
stop1.addEventListener("click",stopT);
lap.addEventListener("click",lapPrint);