function openMenu(){
    document.getElementById('side-menu').style.display = 'block';
    $('#side-nav').animate({
        marginRight: '0'
    }, 500);
};
function closeMenu(){
    document.getElementById('side-menu').style.display = 'none';
    document.getElementById('#side-nav').style.marginRight = '-280px';
}

$('document').ready( function(){
    $('.menu i').click(function(){
        $(this).parent().next().toggleClass('active');
        if($(this).hasClass('fa-angle-right')){
            $(this).removeClass('fa-angle-right').addClass('fa-angle-down');
        }else{
             $(this).removeClass('fa-angle-down').addClass('fa-angle-right');
        }
    })
    $('.button-call').click( function(){
        var phone = $('.phone-block');
        if(phone.css('display') === 'none'){
            phone.css('display' , 'block');
        }else{
            phone.css('display' , 'none');
        };
    });
    $('.close-block').click(function(){
            $(this).parent().css('display','none');
    });
    $('.expand').click(function(){
        $(this).prev().css('height', 'auto');
        $(this).hide();
        $(this).next().show();
    });
    $('.turn').click(function(){
        $(this).prev().show();
        $(this).prev().prev().css('height' , '300px');
        $(this).hide();
    })
    $('.expand-content').click(function(){
        $(this).prev().css('height', 'auto');
        $(this).hide();
        $(this).next().show();
    });
    $('.turn-content').click(function(){
        $(this).prev().show();
        $(this).prev().prev().css('height' , '200px');
        $(this).hide();
    })
    $('.my-carousel').slick({
        autoplay: true,
        autoplaySpeed: 5000
    });
    $('.my-carousel-dots').slick({
        dots: true,
        infinite: false
    });
    $('.carousel-list').slick({
        infinite: false,
        slidesToShow: 8,
        responsive: [
            {
                breakpoint: 1090,
                settings: {
                    slidesToShow: 6 
                }
            },
            {
                breakpoint: 720,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2.5
                }
            }
        ]
    });
    $('.my-carousel-product').slick({
        slidesToShow: 5,
        responsive: [
            {
                breakpoint: 1090,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 720,
                settings: {
                    slidesToShow: 3
                }
            }
        ]
    });
    $('.sort').click(function (){
        if($(window).width() < 720){
            $('.sort-list').slideToggle();
            if($('.sort i').hasClass('fa-angle-right')){
                $('.sort i').removeClass('fa-angle-right').addClass('fa-angle-down');
            }else{
                $('.sort i').removeClass('fa-angle-down').addClass('fa-angle-right');
            };
        };
    });
     $(window).resize( function(){
        if($(window).width() > 720){
            $('.sort-list').css('display' , 'inline-block');
        }else{
            $('.sort-list').css('display' , 'none');
        }
    });


    // filter for catalog-page
    $('.icon-filter-vertical').click(function(){
        if($(this).hasClass('') !== 'active' ){
            $(this).addClass('active');
            $('.icon-filter-horizontal').removeClass('active');
            $('.product-block').addClass('vertical');
            $('.product-block').removeClass('horizontal');
        }
    });
    $('.icon-filter-horizontal').click(function(){
        if($(this).hasClass('') !== 'active' ){
            $(this).addClass('active');
            $('.icon-filter-vertical').removeClass('active');
            $('.product-block').addClass('horizontal');
            $('.product-block').removeClass('vertical');
        }
    });

    // sum-input block
    $('.sum-input').each(function(){
        var $par = $(this);
        $par.find('.increm').click(function(){
            var $input = $par.find('input');
            if($input.val() >= 1 || $input.val() == '')
            $input.val(parseInt($input.val())+1);
        });

        $par.find('.decrem').click(function(){
            var $input = $par.find('input');
            if($input.val() > 1 ){
                $input.val(parseInt($input.val())-1);
            }   
        });
    });

    // order for basket
    $('.btn-order').click(function(){
    	if($(this).hasClass('none-user')){
    		window.location('/login/');
    	}else{
    		$('.order-block').addClass('active');
        	$('.basket').hide();
            $('html').scrollTop(0);
    	}
        
    });

    // icons for select
    $('.select-icon').click(function(){
        if($(this).find('i').hasClass('fa-angle-right')){
            $(this).find('i').removeClass('fa-angle-right').addClass('fa-angle-down');
        }else{
             $(this).find('i').removeClass('fa-angle-down').addClass('fa-angle-right');
        }
    });

    //resize window for product-page
    function myFunction() {
        var $res = $('.product-page').find('.product-block');
        if($(window).width() > 720){
            $res.removeClass('horizontal').addClass('vertical');
        }else{
            $res.removeClass('vertical').addClass('horizontal');
        }
    }; 
    myFunction();
    $(window).resize( function(){
        myFunction();
    });

    // tabs
     $('.tab').click( function () {
        var tempRel = $(this).attr('rel');
        $(this).closest('ul').find('.tab').removeClass('active');
        $(this).addClass('active');
        $('.tab-block').each(function () {
            if ($(this).attr('rel') == tempRel) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    });


     // lc_lightbox('#lcl_elems_wrapper div a' , {
     //    thumbs_nav: true,
     //    slideshow: true,
     //    img_zoom: true
     // });



     // lightgallery
     // $("#lightgallery").lightGallery({
     //    selector: '.slide-img'
     // }); 
     //

     // phone input
     
      $('#phone').mask('+38 (000) 000-00-00', {placeholder: "+38 (__) ___-__-__"});

     $(window).bind('scroll' , function() {
        var up = $(this).scrollTop();
        if(up > 400){
            $('#scroll-top').show();
        }else{
            $('#scroll-top').hide();
        }
     });

});
function scrollToTop(scrollDuration, scrollParts) {
        if (scrollDuration == undefined) {
            scrollDuration = 500;
        }
        if (scrollParts == undefined) {
            scrollParts = 15;
        }
        var scrollStep = -window.scrollY / (scrollDuration / scrollParts),
                scrollInterval = setInterval(function () {
                    if (window.scrollY != 0) {
                        window.scrollBy(0, scrollStep);
                    }
                    else clearInterval(scrollInterval);
                }, 15);
    }
