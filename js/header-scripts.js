document.addEventListener('scroll', function () {
    if (window.scrollY > 50 && !$('header').hasClass('collapsed')) {
        $('header').addClass('collapsed');
    }
    if (window.scrollY < 50 && $('header').hasClass('collapsed')) {
        $('header').removeClass('collapsed');
    }
})
// companies popup
$('.companies').on('click', function () {
    $('.companies .pop').toggleClass('--active')
})
