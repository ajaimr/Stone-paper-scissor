var p1=0,p2=0,s1=0,s2=0,sc1=0,sc2=0;
var res1=0,res2=0;
document.querySelectorAll("button")[0].addEventListener("click",function(){
  p1++;
})
document.querySelectorAll("button")[1].addEventListener("click",function(){
    sc1++;
});
document.querySelectorAll("button")[2].addEventListener("click",function(){
    s1++;
});
document.querySelectorAll("button")[3].addEventListener("click",function(){
      if(sc1==1){ sc1=0;
        document.querySelector("h2").innerHTML="player1 wins"; res1++;
    document.getElementById("sp1").innerHTML=res1.toString(); }

    if(s1==1){ s1=0;
         document.querySelector("h2").innerHTML="player2 wins";res2++;
    document.getElementById("sp2").innerHTML=res2.toString();

}


    if(p1==1){ document.querySelector("h2").innerHTML="draw"; p1=0;
    }

});
document.querySelectorAll("button")[4].addEventListener("click",function(){
    if(s1==1){ s1=0; 
        document.querySelector("h2").innerHTML="player1 wins";res1++;
    document.getElementById("sp1").innerHTML=res1.toString();
}
    if(sc1==1){ sc1=0;
         document.querySelector("h2").innerHTML="draw"; 
}
    if(p1==1){ p1=0; document.querySelector("h2").innerHTML="player2 wins"; res2++;
    document.getElementById("sp2").innerHTML=res2.toString();

    }

});
document.querySelectorAll("button")[5].addEventListener("click",function(){
    s2++; 
    if(s1==1){  s1=0;
        document.querySelector("h2").innerHTML="draw";
}
    if(sc1==1){ sc1=0;
         document.querySelector("h2").innerHTML="player2 wins"; res2++; 
    document.getElementById("sp2").innerHTML=res2.toString();

}
    if(p1==1) {  p1=0; 
        document.querySelector("h2").innerHTML="player1 wins";res1++;
    document.getElementById("sp1").innerHTML=res1.toString();

    }
});
