function setCap(){

    var letter = new Array('A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','0','1','2','3','4','5','6','7','8','9')

    var a= letter[Math.floor(Math.random() * letter.length)];
    var b= letter[Math.floor(Math.random() * letter.length)];
    var c= letter[Math.floor(Math.random() * letter.length)];
    var d= letter[Math.floor(Math.random() * letter.length)];
    var e= letter[Math.floor(Math.random() * letter.length)];
    var f= letter[Math.floor(Math.random() * letter.length)];
    
    var captcha =a+b+c+d+e+f;

    document.getElementById("display").innerHTML=captcha;
    document.getElementById("display").value=captcha;
}

function enteredValue(val)
{
    document.getElementById("submit").value=val;
}

function cls(){
    document.getElementById("inpt").value= ' ';
}

function checkCap(){
    var actual=document.getElementById("display").value;
    var entered=document.getElementById("submit").value;
    if(actual==entered)
    {
        document.getElementById("result").innerHTML="IT MATCHES :)";  
        document.getElementById("result").style.color="navy";
    }
    else
    {
        document.getElementById("result").innerHTML="YOU'RE A SUS!!";
        document.getElementById("result").style.color="red";
    }

    setTimeout(function(){
        document.getElementById("result").innerHTML = ' ';
    },6000)

}

