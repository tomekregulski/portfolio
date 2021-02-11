// $(function() {
//     $('#menu').click(function(){
//       $('.open').slideToggle();
//     });
// });


$( document ).ready(function() {

    $( ".burger" ).on( "click", function() {

        $( "#menu" ).toggleClass("open");
    });
});