function openMenu(){
    document.getElementById('side-menu').style.width = '100%';
}
function closeMenu(){
    document.getElementById('side-menu').style.width = 0;
}


// window.addEventListener('scroll', function(){
//     var scroll = window.pageYOffset || document.documentElement.scrollTop;
//     if ( scroll >= 50 ) {
//         document.getElementById('top-menu').style.top = '0px';
//     } else if ( scroll < 50 ) {
//         document.getElementById('top-menu').style.top = '50px';
//     }
// });

function toggleList(that){

    var that_id = that.id;
    var list_id = '';

    if ( that_id.indexOf('fm_toggle_child') === 0 ){
        // footer menu
        list_id = that_id.replace('fm_toggle_child','fm_child_list');

    } else if ( that_id.indexOf('am_toggle_child') === 0 ){
        // aside menu
        list_id = that_id.replace('am_toggle_child','am_child_list');

    } else if ( that_id.indexOf('radio_catalog') === 0 ){
        // radio menu
        list_id = that_id.replace('radio_catalog','hm_list');

    }    

    if ( that.className == 'fa fa-angle-right' ){
        that.className = 'fa fa-angle-down';
    } else if ( that.className == 'fa fa-angle-down' ){
        that.className = 'fa fa-angle-right';
    }

    var list = document.getElementById(list_id);

    if ( list.getAttribute('rel') == 'site_trigger' ){
        var list_arr = document.querySelectorAll('[rel=site_trigger]');
        if ( typeof list_arr == 'object' ){
            for (var i = 0; i < list_arr.length; i++){
                list_arr[i].style.height = '0px';
            }
        }
    } 

    if ( list.style.height == 'auto' ){
        list.style.height = '0px';
    } else if ( list.style.height == '0px' ) {
        list.style.height = 'auto';
    }

}

$('document').ready( function(){
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
    $('.my-carousel').slick();
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
                    slidesToShow: 3
                }
            }
        ]
    });
    $('.sort').click(function(){
        $('.sort-list').slideToggle();
        if($('.sort i').hasClass('fa-angle-right')){
            $('.sort i').removeClass('fa-angle-right');
            $('.sort i').addClass('fa-angle-down');
        }else{
            $('.sort i').removeClass('fa-angle-down');
            $('.sort i').addClass('fa-angle-right');
        };
    });
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
    $('.increm').click(function(){
        var $input = $('.sum-input input');
         $input.val(parseInt($input.val())+1);
    });
    $('.decrem').click(function(){
        var $input = $('.sum-input input');
        if($input.val() > 0 ){
            $input.val(parseInt($input.val())-1);
        }   
    });
});
