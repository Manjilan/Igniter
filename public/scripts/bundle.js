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
