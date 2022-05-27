// set content on click
$('.button').click(function(e) {
    e.preventDefault();
    setContent($(this));
});

// set content on load
$('.button.active').length && setContent($('.button.active'));

function setContent($el) {
    $('.button').removeClass('active');
    $('.container').hide();
    
    $el.addClass('active');
    $($el.data('rel')).show();
}










