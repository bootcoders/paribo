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
    // Home Page Banner ads Slider
    $('#shop_feature__slide').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        navText: ['<i class="fal fa-angle-left"></i>', '<i class="fal fa-angle-right"></i>'],
        responsive: {
            0: {
                items: 3
            },
            600: {
                items: 5
            },
            1000: {
                items: 5
            }
        }
    });
    // Popular Category
    $('#popular-category').owlCarousel({
        loop: true,
        margin: 15,
        nav: true,
        dots: true,
        slideBy:7,
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
    // Popular Category scrollbar
    var dot_item = $(".popular_cat--items .owl-dots button").length;
    var single_item = 100 / dot_item;
    $(".popular_cat--items .owl-dots button").css({
        "width": single_item+"%",
    })
    // Header Stiky
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 10) {
            $('.header').addClass('fixed-header');
        }
        else {
            $('.header').removeClass('fixed-header');
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


    // Search focus border
    $('.search-box .form-control').bind('blur', function () {
        $('form').removeClass("add-border");
    });
    $('.search-box .form-control').bind('focus', function () {
        $('form').addClass('add-border');
    });

    //    Search category Dropdown
    $(".btn-open-search-catagory").click(function (e) {
        e.preventDefault();
        $(".scrollable-dropdown").toggleClass('show');
        $('.scrollable-dropdown').find('a').click(function (e) {
            e.preventDefault();
            var concept = $(this).text();
            $('.btn-open-search-catagory .cat_item').text(concept);
            $(this).parents(".scrollable-dropdown").removeClass("show");
        });
    });
    $('.main_cat-ul li').each(function (i) {
        $(this).attr('class', 'nav-' + i);
        i++;
    });

    $('.cat_sub_menu_all .mega_menu_cat_submenu').each(function (i) {
        $(this).attr('class', 'nav-' + i);
        i++;
    });


    // Cat Mega Menu
   

    $(".main_cat-ul li").mouseover(function () {
        var theClass = $(this).attr('class');
        $(".cat_sub_menu_all").find("."+ theClass +"").css({
            "display": "block"
        })
    });
    $(".main_cat-ul li").mouseout(function () {
        var theClass = $(this).attr('class');
        $(".cat_sub_menu_all").find("."+ theClass +"").css({
            "display": "none"
        })
    });




});
