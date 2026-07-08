
$(document).ready(function() {
    $('h3').dblclick(function() {
        $(this).css('color', 'gold');
    });
});
 
 $('.card-img-top').click(function() {
    $(this).siblings('.contenido').toggle();
  });


