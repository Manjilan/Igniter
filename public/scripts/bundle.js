$(document).ready(function(){
  $('button, .envelope').on('click', function(){
    $('.modal').css('display', 'flex').fadeIn();
  })
  $('.contact').on('click', function(){
    event.preventDefault();
    $('form').empty();
    $('#thankyou').text("Thank you for your Message");
  })
})
$(window).on('scroll', function () {
  // console.log(window.scrollY);
  if(window.scrollY > 975){
    $('.statistics div h3').addClass('zoomIn');
  }
  if(window.scrollY > 1246){
    $('.checkerboard').addClass('fadeIn');
  }
});
var backgroundImages=['public/assets/hero-img.jpg','public/assets/img1.jpg','public/assets/img2.jpg'];
$('.round-button').on('click', function(){
  $('.round-button').removeClass('active');
  $('header').css('background', `linear-gradient(to right, rgba(243, 104, 25, 0.3) , rgba(0, 0, 0, 0.3)), url("${backgroundImages[$(this).attr('data-slide-number')]}") no-repeat center`)
  $(this).toggleClass('active');
})
var slideIndex=0;
var sliderTransition=setInterval(slideTimer, 4000);
function slideTimer(){
  if(slideIndex === $('.active').data('slide-number') && slideIndex < backgroundImages.length-1){
    slideIndex+=1;
    $('header').css('background', `linear-gradient(to right, rgba(243, 104, 25, 0.3) , rgba(0, 0, 0, 0.3)), url("${backgroundImages[slideIndex]}") no-repeat center`);
    $('.active').next().toggleClass('active');
    $('.active').prev().toggleClass('active');
    if(slideIndex==backgroundImages.length-1){
      $('.round-button:first-child').toggleClass('active');
    }
  } else {
    slideIndex=0;
    $('header').css('background', `linear-gradient(to right, rgba(243, 104, 25, 0.3) , rgba(0, 0, 0, 0.3)), url("${backgroundImages[slideIndex]}") no-repeat center`);
    $('.round-button:last-child').toggleClass('active');
    $('.round-button:first-child').toggleClass('active');

  }
}
