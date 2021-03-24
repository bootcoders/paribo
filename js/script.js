$(document).ready(function () {
    // shop_name
    $(function () {
        $('.shop_name--shop').mixitup();
    });
    // popular--sho
    $(function () {
        $('.global-popular--shop .row').mixitup();
    });
    // picup_pro_items
    $(function () {
        $('.picup_pro_items').mixitup();
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
    $('#banner_sec_daily').owlCarousel({
        loop: true,
        margin: 1,
        nav: false,
        dots: true,
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
    $('#essentials_deals_slider').owlCarousel({
        loop: false,
        margin: 10,
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
                items: 4
            }
        }
    });
    // Home Page Banner ads Slider
    $('#essentials_deals_slider_2').owlCarousel({
        loop: false,
        margin: 10,
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
                items: 4
            }
        }
    });
    // Home Page Banner ads Slider
    $('#top_selling_groceries').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        stagePadding: 50,
        navText: ['<i class="fal fa-angle-left"></i>', '<i class="fal fa-angle-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 2
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
     // Home Page Banner ads Slider
     $('#shipment_slider').owlCarousel({
        loop: true,
        margin: 15,
        nav: true,
        dots: false,
        scrollbarType: "scroll",
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

    // Product Slider

    var bigimage = $("#big_product");
    var thumbs = $("#thumbs_product");
    //var totalslides = 10;
    var syncedSecondary = true;

    bigimage.owlCarousel({
        items: 1,
        slideSpeed: 2000,
        nav: false,
        autoplay: false,
        dots: false,
        loop: true,
        responsiveRefreshRate: 200,

    }).on("changed.owl.carousel", syncPosition);

    thumbs.on("initialized.owl.carousel", function () {
        thumbs.find(".owl-item").eq(0).addClass("current");
    }).owlCarousel({
        dots: false,
        margin: 5,
        nav: false,
        smartSpeed: 200,
        slideSpeed: 500,
        slideBy: 4,
        autoplay: false,
        responsiveRefreshRate: 100,
        responsive: {
            0: {
                items: 2,
                margin: 5
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    }).on("changed.owl.carousel", syncPosition2);

    function syncPosition(el) {
        //if loop is set to false, then you have to uncomment the next line
        //var current = el.item.index;

        //to disable loop, comment this block
        var count = el.item.count - 1;
        var current = Math.round(el.item.index - el.item.count / 2 - 0.5);

        if (current < 0) {
            current = count;
        }
        if (current > count) {
            current = 0;
        }
        //to this
        thumbs
            .find(".owl-item")
            .removeClass("current")
            .eq(current)
            .addClass("current");
        var onscreen = thumbs.find(".owl-item.active").length - 1;
        var start = thumbs
            .find(".owl-item.active")
            .first()
            .index();
        var end = thumbs
            .find(".owl-item.active")
            .last()
            .index();

        if (current > end) {
            thumbs.data("owl.carousel").to(current, 100, true);
        }
        if (current < start) {
            thumbs.data("owl.carousel").to(current - onscreen, 100, true);
        }
    }

    function syncPosition2(el) {
        if (syncedSecondary) {
            var number = el.item.index;
            bigimage.data("owl.carousel").to(number, 100, true);
        }
    }

    thumbs.on("click", ".owl-item", function (e) {
        e.preventDefault();
        var number = $(this).index();
        bigimage.data("owl.carousel").to(number, 300, true);
    });

    // Product Images Zoom
    $('.zoom').zoom();

    // Product increment decrement
    $('.item_decrement').click(function () {
        quantityField = $(this).next();
        if (quantityField.val() != 0) {
            quantityField.val(parseInt(quantityField.val(), 10) - 1);
        }
    });
    $('.item_increment').click(function () {
        quantityField = $(this).prev();
        quantityField.val(parseInt(quantityField.val(), 10) + 1);
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
    // Sidebar Toggle
    $(".has_toggle a.product_leftbar--card_head").click(function () {
        $('i', this).toggleClass("far fa-angle-down far fa-angle-up");
        $(this).siblings(".product_leftbar--card__content").slideToggle(500);
        return false;
    });



    






    // Change Ship Location
    $(".change_ship_loc").click(function () {
        $(".location_select_box").slideToggle(500);
        return false;
    });

    // Return Toggle
    $(".product_return--card__head").click(function () {
        $(".product_return--card").toggleClass('show');

    });

    // Body overlay
    $(".all_category_menu_open, .all_category_menu__wrap, .main_nav a, .mega_menu").mouseover(function () {
        $("body").addClass("body_dark")
    });
    $(".all_category_menu_open, .all_category_menu__wrap, .main_nav a, .mega_menu").mouseout(function () {
        $("body").removeClass("body_dark")
    });

    // Mega Menu Cat

    $('.all_category_items a').each(function (i) {
        $(this).addClass('cat_item-' + i);
        i++;
    });
    $('.all_category_menu_box .category_data_item').each(function (i) {
        $(this).attr('class', 'category_data_item cat_item-' + i);
        i++;
    });
    // Cat Mega Menu
    $(function(){
        $(".all_category_items a").mouseover(function(){
            var cat_item_class = $(this).attr('class');
            $(this).siblings().removeClass("active");
            $(this).addClass('active');
            $(".category_data_item." + cat_item_class).css({
                'display' : 'block'
            });
        });
        $(".all_category_items a").mouseout(function(){
            $(".category_data_item").removeAttr("style");
        });
        $(".category_data_item").hover(function(){
            $(this).css({
                'display' : 'block'
            });
        })
    });

    // Flash sale timerr
    $('.flash_sale').attr('data-date', dateText);
});



$(document).mouseup(function (e) {
    var container = $(".location_select_box");
    if (!container.is(e.target) && container.has(e.target).length === 0) {
        container.slideUp();
    }
});