
$(document).ready(function() {
    $('h3').dblclick(function() {
        $(this).css('color', 'silver');
    });
});
 
 $('.card-img-top').click(function() {
    $(this).siblings('.contenido').toggle();
  });


