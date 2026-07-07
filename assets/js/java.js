$(document).ready(function() {
    $('.card-img-top').click(function() {
        $(this).next('.card-body').slideToggle();
    });
});