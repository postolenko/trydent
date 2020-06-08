var w = window,
d = document,
e = d.documentElement,
g = d.getElementsByTagName('body')[0],
bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;


$(window).load(function() {



});

$(window).resize(function() {



});

$(document).scroll(function() {



});

$(document).ready(function() {

    if( $(".promo_slider").length > 0 ) {
        $(".promo_slider").not(".slick-initialized").slick({
            dots: false,
            arrows: true,
            // autoplay: true,
            autoplaySpeed: 4000,
            speed: 1200,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,
            appendArrows: $(".append_arrows"),
            prevArrow: '<button class="slick-prev" aria-label="Previous" type="button"><img class="link" src="img/arrow_pink.svg"><img class="hover" src="img/arrow_green.svg"></button>',
            nextArrow: '<button class="slick-next" aria-label="Next" type="button"><img class="link" src="img/arrow_pink.svg"><img class="hover" src="img/arrow_green.svg"></button>',
        });
    }

    var scene = document.getElementById('scene');
    var parallaxInstance = new Parallax(scene);

    var scene2 = document.getElementById('scene_2');
    var parallaxInstance2 = new Parallax(scene2);

    if( $(".slider_2").length > 0 ) {
        $(".slider_2").not(".slick-initialized").slick({
            dots: false,
            arrows: true,
            // autoplay: true,
            autoplaySpeed: 4000,
            speed: 1200,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,
            prevArrow: '<button class="slick-prev bg_unset" aria-label="Previous" type="button"><img class="link" src="img/arrow_black.svg"><img class="hover" src="img/arrow_green.svg"></button>',
            nextArrow: '<button class="slick-next bg_unset" aria-label="Next" type="button"><img class="link" src="img/arrow_black.svg"><img class="hover" src="img/arrow_green.svg"></button>',
        });
    }

    if( $(".slider_3").length > 0 ) {
        $(".slider_3").not(".slick-initialized").slick({
            dots: false,
            arrows: true,
            // autoplay: true,
            autoplaySpeed: 4000,
            speed: 1200,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,
            appendArrows: $(".slider_3_arrows"),
            prevArrow: '<button class="slick-prev" aria-label="Previous" type="button"><img class="link" src="img/arrow_pink.svg"><img class="hover" src="img/arrow_green.svg"></button>',
            nextArrow: '<button class="slick-next" aria-label="Next" type="button"><img class="link" src="img/arrow_pink.svg"><img class="hover" src="img/arrow_green.svg"></button>',
        });
    }

    // -------------------

    $(".slide_img_box").on('mousemove', function(e){
        $('#hoverCursor').addClass("visible");
        $('#hoverCursor').css('top', e.clientY);
        $('#hoverCursor').css('left', e.clientX);
    });

    $(".slide_img_box").on('mouseleave', function(e){
        $('#hoverCursor').removeClass("visible");
    });

    // ----------

});