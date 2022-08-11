// Code for preloader will be disappeared after all contents being loaded 
$(window).on('load', function () {
    $("#preloader").fadeOut("slow",function(){
      $("#main").css({'overflow':'unset', 'margin-top':'70px'}); 
    });

});
// Code for preloader will be disappeared after all contents being loaded -------------------------- Ended 


// Java script for dropdown with hover 
$('ul.navbar-nav li.dropdown').hover(function() {
    $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
  }, function() {
    $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
  });




 
  //Custome code for  slick auto ratio slider 
  $(document).ready(function(){
    $window_width = $(window).width();

    if($window_width > 992){
      company_slider();
    }
   
  });






  function company_slider(){
    $hovered_on =""; //Global variablr 
    $(".company_logo_container ").hover(function(){

      //Initializing the first step......
      $max_scale = 1.8; //declare max scale
      $change_ratio = .2;
      $left_max_scale = $max_scale - $change_ratio;
      $right_max_scale = $max_scale - $change_ratio;


      $(this).find("svg").css({'transform': 'scale('+$max_scale+')'}); //Set max scale

      // Get total no of  elements 
      $total_element = -1; // carouse data index started from 0 so let start from -1;
      $(".company_logo_container").each(function(){
        $total_element += 1 ;
      });
  

       $hovered_on =  parseInt($(this).attr("data-slick-index")); //Hoverded on means that is active 
       $prev_no_of_elements = $hovered_on ; //Number of previoud element is equal to recent clickeed data index value
       $next_no_of_elements = $total_element - $hovered_on;

       $left_targeted_elements = $hovered_on; //starting point
       $right_targeted_elements = $hovered_on;//starting point

      //  console.log("hovered _on_ " + $hovered_on)

      //  Decreasing scale for   Prev elements  
      for (let $index = 0; $index < $prev_no_of_elements  ; $index++) {

        $left_targeted_elements -= 1;
        $left_max_scale -= $change_ratio;
        if($left_max_scale == 0){
          $left_max_scale = $change_ratio ;
        }
        $("[data-slick-index="+$left_targeted_elements+"] svg").css({'transform': 'scale('+$left_max_scale+')'});
        // console.log( "Left "+' '+$left_targeted_elements+' taking scale '+$right_max_scale);
      }

      // Decreasing scales for next elements-------------------------------------------------------------------
      for (let $index = 0; $index < $next_no_of_elements  ; $index++) {
        $right_targeted_elements += 1;  // # -> # -> #-> #
        $right_max_scale = $right_max_scale - $change_ratio ;
        if($right_max_scale == 0){
          $right_max_scale = $change_ratio ;
        }
        $("[data-slick-index="+$right_targeted_elements+"] svg").css({'transform': 'scale('+$right_max_scale+')'});
        // console.log( "right "+' '+$left_targeted_elements+' taking scale '+$right_max_scale);
        
      }

      
    },function(){
      $(".company_logo_container svg").css({'transform':'scale(1.2)'});
    });

    
    
  }