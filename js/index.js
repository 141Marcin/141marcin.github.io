$(document).ready(function(){
  
   $(".welcome").toggle(400);
   $('.icon_next').addClass('animated bounce');
  
  ///////////reveal//////
    window.sr = ScrollReveal();
    sr.reveal('.icon', {
        reset: true,
        delay: 300,
        distance: 0
    });
  
    sr.reveal('p, #skills_img,#instruktorskie,#tapicer,#mywojownicy', {
        reset: false,
        delay: 400,
    });
   ///////////reveal//////
  
 ////////scrollto/////
  $('[href^="#"]').off().on('click', function (e) {
    if ($(this).attr('href') != '#') {
        e.preventDefault();
        $('body').animate({scrollTop: $($(this).attr('href')).offset().top}, 500);
    }
});
 ////////scrollto/////
});