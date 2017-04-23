$(document).ready(function(){


  // Work button scroll down smooth to the end of the page
  $('.navbar-nav li a ').click(function(){
    $("html, body").animate({
      scrollTop: $($(this).attr('href')).offset().top - -600
  }, 1375);
  });
});
