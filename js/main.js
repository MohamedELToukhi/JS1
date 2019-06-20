var imgList=document.querySelectorAll(".img-item");
var overLayCont=document.querySelector(".overlay-container");
var close=document.querySelector("#close");

for (var i=0; i<imgList.length;i++)
    {
        
        imgList[i].addEventListener("click",function(){overLayCont.style.display="block" })
        
    }

close.addEventListener("click",function(){overLayCont.style.display="none" })