let animado = document.querySelectorAll(".animado");
let animado2 = document.querySelectorAll(".animado2");
let regla = document.querySelectorAll(".regla");
let bodyalt = window.innerHeight/2;
let bodyalt2 = window.innerHeight/1.8;
function scrollanimado2(){   
    let scrolltop= document.documentElement.scrollTop;
    console.log(bodyalt2 +" body");
    for (let index = 0; index < animado2.length; index++) {
        console.log(index + " index")
        let alturaAnimado   =   animado2[index].getBoundingClientRect().top;
        let alturaAnimado2  =   animado2[index].getBoundingClientRect().bottom;
        console.log(alturaAnimado + " " +"top" +index);
        console.log(alturaAnimado2 + " " +"buttom" + index);

         if (alturaAnimado2<300){
            animado2[index].style.opacity=0;
            animado2[index].style.transform= "translateY(-20px)";
   
        }

        else if (alturaAnimado<= 582 ){
            animado2[index].style.opacity=1;
            animado2[index].style.transform= "translateY(0px)";
            console.log(animado2[index].style.opacity);
              
        }
            else{
                animado2[index].style.opacity=0;
                animado2[index].style.transform= "translateY(20px)";  
                
            }

    
  
    
}
}

function scrollanimado(){   
    let scrolltop= document.documentElement.scrollTop;
    for (let index = 0; index < animado.length; index++) {
        let alturaAnimado=animado[index].getBoundingClientRect().top;
        let alturaAnimado2=animado[index].getBoundingClientRect().bottom;
         if (alturaAnimado2<425){
            animado[index].style.opacity=0;
            animado[index].style.transform= "translateY(-20px)";
            if(animado[index].style.opacity==0 & animado[index].id!=="reloj"){
                let id = animado[index].id;
                let text = document.querySelectorAll("#"+id+" "+".textAnimation");
                for (let i = 0; i < text.length; i++){
                       text[i].style.opacity=0;
                }
               
           } 
            
        }

        else if (alturaAnimado<= bodyalt ){
            animado[index].style.opacity=1;
            animado[index].style.transform= "translateY(0px)";
            if(animado[index].style.opacity==1 & animado[index].id!=="reloj"){
                 let id = animado[index].id;
                 let text = document.querySelectorAll("#"+id+" "+".textAnimation");
                 for (let i = 0; i < text.length; i++){
                        text[i].style.opacity=1;
                 }
                
            }  
        }
            else{
                animado[index].style.opacity=0;
                animado[index].style.transform= "translateY(20px)";
                if(animado[index].style.opacity==0 & animado[index].id!=="reloj"){
                    let id = animado[index].id;
                    let text = document.querySelectorAll("#"+id+" "+".textAnimation");
                    for (let i = 0; i < text.length; i++){
                           text[i].style.opacity=0;
                    }
                   
               }  
                
            }

    
  
    
}
}

document.addEventListener("DOMContentLoaded", function(event) {
    window.scrollTo( 0, 0 );
    for (let index = 0; index < animado.length; index++) {
     animado[index].style.opacity=0; 
    }
 
 });

window.addEventListener('scroll', scrollanimado);
window.addEventListener('scroll', scrollanimado2);
$("nav a").on("click", function (e) {
    e.preventDefault();
    const href = $(this).attr("href");
    let alturaRegla=regla[0].getBoundingClientRect().height/2;
    $("html, body").animate({ scrollTop: $(href).offset().top-alturaRegla }, 1000);
  });

  $( ".menu" ).click(function() {
    $( "nav" ).toggle("slide");
  });
  $(document).on("click",function(e) {                  
    var container = $(".menu"); 
    let men=$("nav");
    if(document.body.clientWidth<600){
                   
       if (!container.is(e.target) && container.has(e.target).length === 0) { 
           
        $( "nav" ).toggle("slide");
      
       }
    }
});

$(document).ready(function () {

    var winHeight = $(window).height();
    $(window).scroll(function () {
        $(".menu").css("top", $(window).scrollTop()  + "px");
    });

});
