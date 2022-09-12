var timingLeftRight;
var timingUpDown;
var timingArrow;

//Toimii nappulaa painamalla. Käynnistää funktiot ja timing asettaa ajastuksen. Kun timing ajastus 52 sekuntia täynnä, funktiot alkaa alusta.
function startLight()
{
    startLightLeft();
    startLightRight();
    startLightUp();
    startLightDown();
    startLightArrowLeft();
    startLightArrowRight();
    timingLeftRight= setInterval(timerLeftRight,52000);
    timingUpDown= setInterval(timerUpDown,52000);
    timingArrow= setInterval(timerArrowLight,52000);
}

//Ajastuksen lopetus. Toimii viiveellä eli valot pysähtyy kun setInterval asetetut sekunnit kuluneet.
function stopLight()
{
    clearInterval(timingLeftRight);
    clearInterval(timingUpDown);
    clearInterval(timingArrow);
}

// Ajastaa länsi ja itä suunnan valot
function timerLeftRight () 
{
    startLightLeft();
    startLightRight();
}

//Ajastaa pohjois ja etelä suunnan valot
function timerUpDown () 
{
    startLightUp();
    startLightDown();
}

//Ajastaa nuolivalot
function timerArrowLight()
{
    startLightArrowLeft();
    startLightArrowRight();
}

//Säädetään ajastuksella kuinka kauan mikäkin väri palaa
function startLightLeft() 
{
    var red=document.getElementById("red");
    var yellow=document.getElementById("yellow");
    var green=document.getElementById("green");
    
    
     //Vihreä palaa 12 sekuntia
     setTimeout(function () {
        green.style.opacity=1;
        red.style.opacity=.3;
        yellow.style.opacity=.3;
    },0);

    //Keltainen palaa kaksi sekuntia
    setTimeout(function () {
        green.style.opacity=.3;
        red.style.opacity=.3;
        yellow.style.opacity=1;
    },12000);

    //Punainen palaa 36 sekuntia
    setTimeout(function () {
        green.style.opacity=.3;
        red.style.opacity=1;
        yellow.style.opacity=.3;
    },14000);

    //Keltainen palaa kaksi sekuntia. setInterval ajastus säädetty 52, joten siksi keltainen palaa kaksi sekuntia.
    setTimeout(function () {
        green.style.opacity=.3;
        red.style.opacity=.3;
        yellow.style.opacity=1;
    },50000);

}




//Säädetään ajastuksella kuinka kauan mikäkin väri palaa
function  startLightRight () 
{
    var red=document.getElementById("red2");
    var yellow=document.getElementById("yellow2");
    var green=document.getElementById("green2");
    
    
     //Vihreä
     setTimeout(function () {
        green.style.opacity=1;
        red.style.opacity=.3;
        yellow.style.opacity=.3;
    },0);

    //Keltainen
    setTimeout(function () {
        green.style.opacity=.3;
        red.style.opacity=.3;
        yellow.style.opacity=1;
    },12000);

    //Punainen
    setTimeout(function () {
        green.style.opacity=.3;
        red.style.opacity=1;
        yellow.style.opacity=.3;
    },14000);

    //Keltainen
    setTimeout(function () {
        green.style.opacity=.3;
        red.style.opacity=.3;
        yellow.style.opacity=1;
    },50000);

}

//Säädetään ajastuksella kuinka kauan mikäkin väri palaa
function startLightUp () 
{
    var red=document.getElementById("red3");
    var yellow=document.getElementById("yellow3");
    var green=document.getElementById("green3");
    
    
     //Punainen
     setTimeout(function () {
        green.style.opacity=.3;
        red.style.opacity=1;
        yellow.style.opacity=.3;
    },0);

    //Keltainen
    setTimeout(function () {
        green.style.opacity=.3;
        red.style.opacity=.3;
        yellow.style.opacity=1;
    },16000);

    //Vihreä
    setTimeout(function () {
        green.style.opacity=1;
        red.style.opacity=.3;
        yellow.style.opacity=.3;
    },18000);

    //Keltainen
    setTimeout(function () {
        green.style.opacity=.3;
        red.style.opacity=.3;
        yellow.style.opacity=1;
    },30000);

    //Punainen
    setTimeout(function () {
        green.style.opacity=.3;
        red.style.opacity=1;
        yellow.style.opacity=.3;
    },32000);
}

//Säädetään ajastuksella kuinka kauan mikäkin väri palaa
function startLightDown () 
{
    var red=document.getElementById("red4");
    var yellow=document.getElementById("yellow4");
    var green=document.getElementById("green4");
    
    
    //Punainen
    setTimeout(function () {
        green.style.opacity=.3;
        red.style.opacity=1;
        yellow.style.opacity=.3;
    },0);

    //Keltainen
    setTimeout(function () {
        green.style.opacity=.3;
        red.style.opacity=.3;
        yellow.style.opacity=1;
    },16000);

    //Vihreä
    setTimeout(function () {
        green.style.opacity=1;
        red.style.opacity=.3;
        yellow.style.opacity=.3;
    },18000);

    //Keltainen
    setTimeout(function () {
        green.style.opacity=.3;
        red.style.opacity=.3;
        yellow.style.opacity=1;
    },30000);

    //Punainen
    setTimeout(function () {
        green.style.opacity=.3;
        red.style.opacity=1;
        yellow.style.opacity=.3;
    },32000);
}

//Säädetään ajastuksella kuinka kauan mikäkin väri palaa
function  startLightArrowLeft () 
{
    var red=document.getElementById("red5");
    var yellow=document.getElementById("yellow5");
    var green=document.getElementById("green5");
    
    
    //Punainen
    setTimeout(function () {
        green.style.opacity=.3;
        red.style.opacity=1;
        yellow.style.opacity=.3;
    },0);

    //Keltainen
    setTimeout(function () {
        green.style.opacity=.3;
        red.style.opacity=.3;
        yellow.style.opacity=1;
    },34000);

    //Vihreä
    setTimeout(function () {
        green.style.opacity=1;
        red.style.opacity=.3;
        yellow.style.opacity=.3;
    },36000);

    //Keltainen
    setTimeout(function () {
        green.style.opacity=.3;
        red.style.opacity=.3;
        yellow.style.opacity=1;
    },46000);

    //Punainen
    setTimeout(function () {
        green.style.opacity=.3;
        red.style.opacity=1;
        yellow.style.opacity=.3;
    },48000);
}

//Säädetään ajastuksella kuinka kauan mikäkin väri palaa
function startLightArrowRight () 
{
    var red=document.getElementById("red6");
    var yellow=document.getElementById("yellow6");
    var green=document.getElementById("green6");
    

    //Punainen
     setTimeout(function () {
        green.style.opacity=.3;
        red.style.opacity=1;
        yellow.style.opacity=.3;
    },0);

    //Keltainen
    setTimeout(function () {
        green.style.opacity=.3;
        red.style.opacity=.3;
        yellow.style.opacity=1;
    },34000);

    //Vihreä
    setTimeout(function () {
        green.style.opacity=1;
        red.style.opacity=.3;
        yellow.style.opacity=.3;
    },36000);

    //Keltainen
    setTimeout(function () {
        green.style.opacity=.3;
        red.style.opacity=.3;
        yellow.style.opacity=1;
    },46000);

    //Punainen
    setTimeout(function () {
        green.style.opacity=.3;
        red.style.opacity=1;
        yellow.style.opacity=.3;
    },48000);
}