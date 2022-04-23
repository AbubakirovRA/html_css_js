function count(){
    alert("Hello, world!")
    for(var i=1; i<=3; i++){
        alert("Count = "+i+"step")
    }
}


function getObj(objID) {
    if (document.getElementById) {return document.getElementById(objID);}
    else if (document.all) {return document.all[objID];}
    else if (document.layers) {return document.layers[objID];}
    }
      
    var ie4=document.all
    var ns6=document.getElementById&&!document.all
    cobj=getObj("button1");
      
function moveIt(){
    y=Math.floor(Math.random()*101);
    x=Math.floor(Math.random()*201);
    if (ie4){
        cobj.style.top  = y;
        cobj.style.left = x;
        }
    else if (ns6){
        cobj.style.top  = y+"px";
        cobj.style.left = x+"px";
        }
    }