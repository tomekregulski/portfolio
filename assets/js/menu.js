// $(function() {
//     $('#menu').click(function(){
//       $('.open').slideToggle();
//     });
// });


$( document ).ready(function() {

    $( ".burger" ).on("click", function(){

        $( "header nav ul" ).toggleClass("open");
    });
});