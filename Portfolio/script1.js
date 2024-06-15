$(document).ready(function() {
    // Preloader
    $(window).on('load', function() {
        $('#preloader').fadeOut('slow', function() { $(this).remove(); });
    });

    // Navbar scroll effect
    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 50) {
            $('.navbar').addClass('sticky');
        } else {
            $('.navbar').removeClass('sticky');
        }
    });

    // Typed.js effect
    var typed = new Typed('.typing', {
        strings: ['Web Designer', 'Web Developer', 'Graphic Designer'],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // Smooth scroll for menu links
    $('.menu-btn').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 500);
    });
});
