$(document).ready(function(){
    // Home Page Banner ads Slider
    $('#home-banner').owlCarousel({
        loop:true,
        margin:1,
        nav:true,
        dots:true,
        navText:['<i class="fal fa-angle-left"></i>', '<i class="fal fa-angle-right"></i>'],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
    // Popular Category
    $('#popular-category').owlCarousel({
        loop:true,
        margin:15,
        nav:true,
        dots:false,
        navText:['<i class="fal fa-angle-left"></i>', '<i class="fal fa-angle-right"></i>'],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:7
            }
        }
    });

    // categories-sub-dropdown
    $(".categories-sub-dropdown").mouseover(function(){
        $(".categories-sub-dropdown").siblings('a').removeClass('hoverActive');
        $(this).siblings().addClass('hoverActive');
    });
    $(".categories-sub-dropdown").mouseout(function(){
        $(".categories-sub-dropdown").siblings('a').removeClass('hoverActive');
    })

    
});

