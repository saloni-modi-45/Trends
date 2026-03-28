
  let card=document.querySelector(".trend")
 
  let card2=document.getElementById("trendSec")
  let mainPage=document.querySelector(".main")
  let  blog=document.querySelector(".trends")
  let about =document.querySelector(".about")
  let contact=document.querySelector(".contact")
   let cart=document.querySelector(".cart")


  

  
   


  function homes(){
    mainPage.style.display="flex";
     card.style.display="block";
       card2.style.display="block";
    blog.style.display="block";
    about.style.display="none"
    cart.style.display="block"

    document.getElementById("blog").style.color="black";
     document.getElementById("home").style.color="rgb(5, 167, 167)";
     document.getElementById("shop").style.color="black";
     document.getElementById("contact").style.color="black";
     document.getElementById("about").style.color="black";
   

  }
  
 function shops(){
    mainPage.style.display="none";
    blog.style.display="none";
    about.style.display="none";
         card.style.display="block";
       card2.style.display="block";
       cart.style.display="none"

    document.getElementById("blog").style.color="black";
     document.getElementById("home").style.color="black";
     document.getElementById("shop").style.color="rgb(5, 167, 167)";
     document.getElementById("contact").style.color="black";
     document.getElementById("about").style.color="black";


}
function blogs(){
     mainPage.style.display="none";
     card.style.display="none";
       card2.style.display="none";
    blog.style.display="block";
    about.style.display="none";
           cart.style.display="none"

     document.getElementById("blog").style.color="rgb(5, 167, 167)";
     document.getElementById("home").style.color="black";
     document.getElementById("shop").style.color="black";
     document.getElementById("contact").style.color="black";
     document.getElementById("about").style.color="black";
          document.getElementById("about").style.color="black"
     
}

function abouts(){
  
      about.style.display="block"
       mainPage.style.display="none";
       card.style.display="none";
       card2.style.display="none";
        blog.style.display="none";
               cart.style.display="none"

     document.getElementById("blog").style.color="black";
     document.getElementById("home").style.color="black";
     document.getElementById("shop").style.color="black";
     document.getElementById("contact").style.color="black";
     document.getElementById("about").style.color="rgb(5, 167, 167)";


}
function contacts(){
   contact.style.display="block"

   
      about.style.display="none"
       mainPage.style.display="none";
       card.style.display="none";
       card2.style.display="none";
        blog.style.display="none";
       cart.style.display="none"

     document.getElementById("blog").style.color="black";
     document.getElementById("home").style.color="black";
     document.getElementById("shop").style.color="black";
     document.getElementById("contact").style.color="rgb(5, 167, 167)";
     document.getElementById("about").style.color="black";
}


// cart
function show(img){
   let newImg =document.getElementById("newImg");
   newImg.src=img.src;
   console.log(img)
   cart.style.display="block"

}
