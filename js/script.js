$(document).ready(function () {
    // Home Page Banner ads Slider
    $('#home-banner').owlCarousel({
        loop: true,
        margin: 1,
        nav: true,
        dots: true,
        navText: ['<i class="fal fa-angle-left"></i>', '<i class="fal fa-angle-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
    // Popular Category
    $('#popular-category').owlCarousel({
        loop: true,
        margin: 15,
        nav: true,
        dots: false,
        navText: ['<i class="fal fa-angle-left"></i>', '<i class="fal fa-angle-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 7
            }
        }
    });

    // categories-sub-dropdown
    $(".categories-sub-dropdown").mouseover(function () {
        $(".categories-sub-dropdown").siblings('a').removeClass('hoverActive');
        $(this).siblings().addClass('hoverActive');
    });
    $(".categories-sub-dropdown").mouseout(function () {
        $(".categories-sub-dropdown").siblings('a').removeClass('hoverActive');
    });


    // Back tp Top
    var btn = $('.scroll-btn');

    $(window).scroll(function () {
        if ($(window).scrollTop() > 300) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }
    });

    btn.on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, '300');
    });

    $('.search-box .form-control').bind('blur', function () {
        $('form').removeClass("add-border");
    });
    $('.search-box .form-control').bind('focus', function () {
        $('form').addClass('add-border');
    });

    $('.search-dropdown').find('option').click(function (e) {
        e.preventDefault();
        var param = $(this).attr("href").replace("#", "");
        var concept = $(this).text();
        $('.search-panel span#search_concept').text(concept);
        $('.input-group #search_param').val(param);
    });

    $(".btn-open-search-catagory").click(function(e){
        e.preventDefault();
        $("select.nav-search-dropdown").trigger("click");
    })
    

});

