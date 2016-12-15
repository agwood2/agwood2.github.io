// $(document).ready(function()){
//   var nav = $('nav');
//   var li = $('nav li');
//
// $('nav a').on('click',function()){
//   var elementTo = $(this).attr('data-sectionid');
//   $('html, body').animate({scrollTop: $('#'+elementTo).offset().top-80}, 2000);
// });
// }
// }
//
// <script type="text/javascript">
// $(document).ready(function(){
//   $('#navigation a, #fixedbar a').onlick="document.getElementById().scrollIntoView('slow');"{
//
//   });
//
//   $(window).on('scroll',function() {
//     var scrolltop = $(this).scrollTop();
//
//     if(scrolltop >= 215) {
//       $('#fixedbar').fadeIn(250);
//     }
//
//     else if(scrolltop <= 210) {
//       $('#fixedbar').fadeOut(250);
//     }
//   });
// });
// </script>
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
