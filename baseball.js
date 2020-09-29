let randnum;
let input;
let gtype;
let strike;
let ball;
let Tabletr;
let Tableth;
let count=0;
let CText;
let SText;
let BText;
let srandnum;
let leng;
window.onload=function(){
    let game_type=document.getElementsByClassName("game_type")[0];
    let replay=document.getElementById("replay");
    Random_Num();
    console.log(randnum);
    game_type.childNodes[1].onclick=function(){
        Game_Display();
        gtype=String("easy");
    }
    game_type.childNodes[3].onclick=function(){
        Game_Display();
        gtype=String("n");
    }
    game_type.childNodes[5].onclick=function(){
        Game_Display();
        gtype=String("hard");
    }
    replay.onclick=function(){
        location.reload();
    }
}
function Game_Display(){
    document.getElementById("game_ready").style.display="none";
    document.getElementById("game_play").style.display="flex";
}
function Random_Num(){
    let n1,n10,n100;
    randnum=Math.floor(Math.random()*899)+100;
    n100=Math.floor(randnum/100);
    n10=Math.floor((randnum%100)/10);
    n1=Math.floor(randnum%10);
    if(n1==n10){
        Random_Num();
    }else{
        if(n10==n100){Random_Num();}
        if(n1==n100){Random_Num();}
    }
}
function Submit(){
    input=document.getElementById("input").value;
    let leng=input.length;
    if(leng>3||isNaN(input)||leng==0||leng<3){
        alert("3자리 정수를 입력해 주세요.");
        document.getElementById("input").value="";
        return 0;
    }
    switch(gtype){
        case "easy":
            Easy();
            break;
        case "n":
            Normal();
            break;
        case "hard":
            Hard();
            break;
    }
}
function Play(){
    leng=input.length;
    srandnum=String(randnum);
    strike=0;
    ball=0;
    for(let i=0;i<leng;i++){
        for(let j=0;j<leng;j++){
            if(input[i]==srandnum[j]){
                if(i==j){
                    strike++;
                }else{
                    ball++;
                }
            }
        }
    }
    document.getElementById("input").value="";
}
function Disable(){
    document.getElementById("input_btn").style.background='gray';
    document.getElementById("input").style.background='gray';
    document.getElementById("input_btn").disabled = true;
    document.getElementById("input").disabled = true;
}
function Change_Color(color){
    document.getElementsByTagName('tr')[count].childNodes[1].style.background=color;
    document.getElementsByTagName('tr')[count].childNodes[2].style.background=color;
    document.getElementsByTagName('tr')[count].childNodes[3].style.background=color;
}
function Easy(){
    Play();
    count++;
    let j=0;
    Tabletr=document.createElement('tr');
    document.getElementsByTagName('table')[0].append(Tabletr);
    for(let i=0;i<5;i++){
        Tableth=document.createElement('th');
        document.getElementsByTagName('tr')[count].append(Tableth);
        if(i==0){
            CText=document.createTextNode(count);
            Tableth.appendChild(CText);
        }
        if(i==1||i==2||i==3){
            CText=document.createTextNode(input[j]);
            Tableth.appendChild(CText);
            j++;
        }
    }
    if(strike==0&&ball==0){
        SText=document.createTextNode("OUT");
        Tableth.appendChild(SText);
        Change_Color("red");
    }
    else if(strike==3){
        SText=document.createTextNode("STRIKE!!!");
        Tableth.appendChild(SText);
        Change_Color("green");
        document.getElementsByClassName('answer')[0].innerHTML="Finish!<br>Answer : "+randnum;
        Disable();
    }
    else{
        SText=document.createTextNode(strike+"S");
        BText=document.createTextNode(ball+"B");
        Tableth.appendChild(SText);
        Tableth.appendChild(BText);
        for(let i=0;i<leng;i++){
            for(let j=0;j<leng;j++){
                if(input[i]==srandnum[j]){
                    if(i==j){
                        document.getElementsByTagName('tr')[count].childNodes[i+1].style.background="green";
                    }else{
                        document.getElementsByTagName('tr')[count].childNodes[i+1].style.background="yellow";
                    }
                }
            }
        } 
    }
}
function Normal(){
    Play();
    count++;
    let j=0;
    Tabletr=document.createElement('tr');
    document.getElementsByTagName('table')[0].append(Tabletr);
    for(let i=0;i<5;i++){
        Tableth=document.createElement('th');
        document.getElementsByTagName('tr')[count].append(Tableth);
        if(i==0){
            CText=document.createTextNode(count);
            Tableth.appendChild(CText);
        }
        if(i==1||i==2||i==3){
            CText=document.createTextNode(input[j]);
            Tableth.appendChild(CText);
            j++;
        }
    }
    if(strike==0&&ball==0){
        SText=document.createTextNode("OUT");
        Tableth.appendChild(SText);
    }
    else if(strike==3){
        SText=document.createTextNode("STRIKE!!!");
        Tableth.appendChild(SText);
        document.getElementsByClassName('answer')[0].innerHTML="Finish!<br>Answer : "+randnum;
        Disable();
    }
    else{
        SText=document.createTextNode(strike+"S");
        BText=document.createTextNode(ball+"B");
        Tableth.appendChild(SText);
        Tableth.appendChild(BText);
    }
}
function Hard(){
    Play();
    count++;
    let j=0;
    Tabletr=document.createElement('tr');
    document.getElementsByTagName('table')[0].append(Tabletr);
    for(let i=0;i<5;i++){
        Tableth=document.createElement('th');
        document.getElementsByTagName('tr')[count].append(Tableth);
        if(i==0){
            CText=document.createTextNode(count);
            Tableth.appendChild(CText);
        }
        if(i==1||i==2||i==3){
            CText=document.createTextNode(input[j]);
            Tableth.appendChild(CText);
            j++;
        }
    }
    if(strike==0&&ball==0){
        SText=document.createTextNode("OUT");
        Tableth.appendChild(SText);
    }
    else if(strike==3){
        SText=document.createTextNode("STRIKE!!!");
        Tableth.appendChild(SText);
        Disable();
    }else{
        SText=document.createTextNode(strike+"S");
        BText=document.createTextNode(ball+"B");
        Tableth.appendChild(SText);
        Tableth.appendChild(BText);
    }
    if(count==10){
        console.log("Game Over");
        Disable();
        document.getElementsByClassName('answer')[0].innerHTML="Finish!<br>Answer : "+randnum;
        return 0;
    }
}