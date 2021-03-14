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
        dots: false,
        scrollbarType: "scroll",
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

    // PRoduct box Same Height
    var maxHeight = 0;

    $(".product_sec--card").each(function () {
        if ($(this).height() > maxHeight) { maxHeight = $(this).height(); }
    });

    $(".product_sec--card").height(maxHeight);

    // Mega Menu Cat

    $('.main_cat-ul li').each(function (i) {
        $(this).addClass('nav-' + i);
        i++;
    });

    $('.cat_sub_menu_all .mega_menu_cat_submenu').each(function (i) {
        $(this).attr('class', 'nav-' + i);
        i++;
    });


    // Cat Mega Menu
   

    $(".main_cat-ul li").hover(function () {
        var theClass = $(this).attr('class');
        var getClass = $(".cat_sub_menu_all").children(""+ theClass +"");
        var divClass = this.className.match(getClass);

        console.log(theClass);
        console.log(getClass);
        console.log(divClass);
        
    });
    







});
