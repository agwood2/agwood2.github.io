$(document).ready(function()){
  var nav = $('nav');
  var li = $('nav li');

$('nav a').on('click',function()){
  var elementTo = $(this).attr('data-sectionid');
  $('html, body').animate({scrollTop: $('#'+elementTo).offset().top-80}, 2000);
});
}
}
