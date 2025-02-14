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

    if( $(".gums_thumbs_slider").length > 0 ) {
        $(".gums_thumbs_slider").not(".slick-initialized").slick({
            dots: false,
            arrows: true,
            // autoplay: true,
            autoplaySpeed: 4000,
            speed: 1200,
            slidesToShow: 5,
            slidesToScroll: 1,
            prevArrow: '<button class="slick-prev" aria-label="Previous" type="button"><img class="link" src="img/arrow_black.svg"><img class="hover" src="img/arrow_green.svg"></button>',
            nextArrow: '<button class="slick-next" aria-label="Next" type="button"><img class="link" src="img/arrow_black.svg"><img class="hover" src="img/arrow_green.svg"></button>',
            responsive: [
                {
                  breakpoint: 1240,
                  settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                  }
                },
                {
                  breakpoint: 1220,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                  }
                },
                {
                  breakpoint: 560,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
              ]
        });
    }


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

    $("[data-popup-link]").on("click", function(e) {
        e.preventDefault();
        popupName = $(this).attr("data-popup-link");
        div = document.createElement('div');
        div.style.overflowY = 'scroll';
        div.style.width = '50px';
        div.style.height = '50px';
        div.style.visibility = 'hidden';
        document.body.appendChild(div);
        scrollWidth = div.offsetWidth - div.clientWidth;
        document.body.removeChild(div);
        $("body").addClass("fixed");
        $("body").css({
            "position" : "fixed",
            "top" :  -$(document).scrollTop() + "px",
            "overflow" : "hidden",
            "right" : 0,
            "left" : 0,
            "bottom" : 0,
            "padding-right" : scrollWidth + "px"
        });
        $(".popup_bg").fadeIn(300);
        $("[data-popup = '"+ popupName +"']").fadeIn(300);
    });
    $(".close_popup, .popup_bg").on("click", function(e) {
        e.preventDefault();
        curTop = $("body").css("top");
        curTop = Math.abs(parseInt(curTop, 10));
        $("body").attr("style", "");
        if (curTop !== 0) {
            $("html").scrollTop(curTop);
        }
        $("body").removeClass("fixed");
        $(".popup_bg").fadeOut(300);
        $("[data-popup]").fadeOut(300);
    });
    $(this).keydown(function(eventObject){
        if (eventObject.which == 27 ) {
            curTop = $("body").css("top");
            curTop = Math.abs(parseInt(curTop, 10));
            $("body").attr("style", "");
            if (curTop !== 0) {
                $("html").scrollTop(curTop);
            }
            $("body").removeClass("fixed");
            $(".popup_bg").fadeOut(300);
            $("[data-popup]").fadeOut(300);
        }
    });
    $(document).on("mouseup", function(e) {
      if($(".popup").is(":visible")) {
        e.preventDefault();
        hide_element = $(".popup_content");
        if (!hide_element.is(e.target)
            && hide_element.has(e.target).length === 0) {
            curTop = $("body").css("top");
            curTop = Math.abs(parseInt(curTop, 10));
            $("body").attr("style", "");
            if (curTop !== 0) {
                $("html").scrollTop(curTop);
            }
            $("body").removeClass("fixed");
            $(".popup_bg").fadeOut(300);
            $("[data-popup]").fadeOut(300);
        }
      }
    });

    // -------------------

});