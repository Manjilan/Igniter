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
  console.log(window.scrollY);
  if(window.scrollY > 975){
    $('.statistics div h3').addClass('zoomIn');
  }
  if(window.scrollY > 1246){
    $('.checkerboard').addClass('fadeIn');
  }
});
