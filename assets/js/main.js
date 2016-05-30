$('document').ready(function(){
   $("#load-screen").animate({
       opacity: 0
   }, 2000, function(){
       $("#load-screen").remove();
   })
});