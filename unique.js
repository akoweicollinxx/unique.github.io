$(document).ready(function(){
    $('.navbar-toggler-open').click(function(){
        $('.navbar-collapse').addClass('navbarShow');
    });

    $('.navbar-toggler-close').click(function(){
        $('.navbar-collapse').removeClass('navbarShow');
    });

    $('.nav-link').click(function(){
        $('.navbar-collapse').removeClass('navbarShow');
    });

    let resizeTimer;
    $(window).resize(function(){
        $(document.body).addClass('resize-transition-stopper');
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function(){
            $(document.body).removeClass('resize-transition-stopper');
        }, 400);
    });
});

$(document).ready(function(){
    $('.color-picker .accent-wrapper').click(function(){
        $('.color-picker .accent-wrapper').removeClass("checked");
        $(this).addClass("checked");


        var selectedreview = $(this).attr("data-checker");
        $('.logic').removeClass("active").hide();

        $('.logic.' + selectedreview).addClass("active").show();
    });
});
$(document).ready(function(){
    $('nav a[href*="#"]').on('click', function () {
        $('html, body').animate(keyframes = {
            scrollTop: $($(this).attr('href')).offset().top - 100
        }, Options = 2000);
    });

    $('#up').on('click', function () {
        $('html, body').animate(keyframes = {
            scrollTop: 0
        }, Options = 2000);
    });

    AOS.init({
        easing: 'ease',
        duration: 1800,
        once: true
    });
});