var around=document.querySelector(".around");
var into=document.querySelector(".into");
var topP=0;
var leftP=0;


document.body.addEventListener("keydown",function(ev){
   
   //left
     if(ev.which==37 && leftP>0){

        leftP-=10;
    }
    //down
    if(ev.which==38 && topP>0){

        topP-=10;
    }

    //right
    if(ev.which==39 && leftP<750){

        leftP+=10;
    }

    //up
    if(ev.which==40 && topP<450){

        topP+=10;
    }
    into.style.left=leftP +"px";
    into.style.top=topP +"px";
    
})