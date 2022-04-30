
let clicked =true;
$( "#theme" ).click(function() {

    if(clicked){
      $("html").css( "background-image","-webkit-linear-gradient(65deg,  #ace0e0 45%,#E4E9FD 50%)");
      $("#theme" ).css("background-color","#ace0e0");
      $(".btn").css("background-color","#ace0e0");
      $(".box").css( "background", "#cef3f3");
      clicked=false;
    }
    else{
      $("html").css( "background-image", "-webkit-linear-gradient(65deg, #625f66 30%, #E4E9FD 50%)");
      $("#theme" ).css("background-color","#A683E3");
      $(".btn" ).css("background-color","#A683E3");
      $(".box").css( "background", "#dadddd");
      clicked=true;
    }
  });

