$(document).ready(function () {
    // 
    $(function () {
        $('.shop_name--shop').mixitup();
    });
    $(function () {
        $('.global-popular--shop .row').mixitup();
    });
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

    // flash-categories
    $('#flash-categories').owlCarousel({
        loop: true,
        margin: 5,
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

    // avi_shop_name
    $('#avi_shop_name').owlCarousel({
        loop: true,
        margin: 10,
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
                items: 5
            }
        }
    });

    // Global button slider 
    $('#global-popular-slider').owlCarousel({
        loop: false,
        margin: 0,
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
                items: 6
            }
        }
    });


    // sub-category
    $('#sub-category').owlCarousel({
        loop: true,
        margin: 5,
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
                items: 6
            }
        }
    });

    // Global button slider 
    var pro_sl = $('.product_has_slider');
    pro_sl.on('initialized.owl.carousel changed.owl.carousel', function (e) {
        if (!e.namespace) {
            return;
        }
        var carousel = e.relatedTarget;
        $('.counter').text(carousel.relative(carousel.current()) + 1 + '/' + carousel.items().length);
    }).owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        dots: false,
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
    $('.play').on('click', function () {
        $(this).parents(".all_product--card__imgs").children(pro_sl).trigger('play.owl.autoplay', [2000]);

        $(this).hide();
        $(this).siblings(".stop").show();
    })
    $('.stop').on('click', function () {
        $(this).parents(".all_product--card__imgs").children(pro_sl).trigger('stop.owl.autoplay');
        $(this).hide();
        $(this).siblings(".play").show();
    });


    // premium_rel
    $('#premium_rel').owlCarousel({
        loop: false,
        margin: 10,
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
                items: 5
            }
        }
    });

    // product_top_cat_slider
    $('#product_top_cat_slider').owlCarousel({
        loop: false,
        margin: 0,
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
                items: 12
            }
        }
    });
    // Popular Category campain
    $('#popular-category-campain').owlCarousel({
        loop: false,
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


    // Mega Menu Cat

    $('.main_cat-ul li').each(function (i) {
        $(this).addClass('nav-' + i);
        i++;
    });

    $('.cat_sub_menu_all .mega_menu_cat_submenu').each(function (i) {
        $(this).attr('class', 'nav-' + i);
        i++;
    });
    // Sidebar Toggle
    $(".has_toggle a.product_leftbar--card_head").click(function () {
        $('i', this).toggleClass("far fa-angle-down far fa-angle-up");
        $(this).siblings(".product_leftbar--card__content").slideToggle(500);
        return false;
    });

    // Cat Mega Menu


    $(".main_cat-ul li").hover(function () {
        var theClass = $(this).attr('class');
        var getClass = $(".cat_sub_menu_all").children("" + theClass + "");
        var divClass = this.className.match(getClass);

        console.log(theClass);
        console.log(getClass);
        console.log(divClass);

    });
    // Flash sale timerr
    $('.flash_sale').attr('data-date', dateText);


});


