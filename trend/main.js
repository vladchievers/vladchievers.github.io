function openMenu(){
    document.getElementById('side-menu').style.width = '100%';
}
function closeMenu(){
    document.getElementById('side-menu').style.width = 0;
}


window.addEventListener('scroll', function(){
    var scroll = window.pageYOffset || document.documentElement.scrollTop;
    if ( scroll >= 50 ) {
        document.getElementById('top-menu').style.top = '0px';
    } else if ( scroll < 50 ) {
        document.getElementById('top-menu').style.top = '50px';
    }
});

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

    if ( that.className == 'fa fa-angle-up' ){
        that.className = 'fa fa-angle-down';
    } else if ( that.className == 'fa fa-angle-down' ){
        that.className = 'fa fa-angle-up';
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

var blocks = document.querySelectorAll('.view-description');
var list = document.querySelectorAll('.list');
var fas = document.querySelectorAll('.view-description i')

for (var i = 0; i < blocks.length; i++) {
    blocks[i].addEventListener('click' , function(){
        for (var i = 0; i < list.length; i++) {
                
        list[i].classList.toggle('block');
        }
    })
}


var heart = document.querySelectorAll('.heart');


        for (var i = 0; i < heart.length; i++) {
            heart[i].addEventListener('click' , function(){
               this.classList.toggle('active-heart');
            })
        };

 $('document').ready(function(){
             $('.carousel-block').slick({
                infinite: false,
                slidesToShow: 6,
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 4
                        }
                    },
                    {
                        breakpoint: 880,
                        settings: {
                            slidesToShow: 3
                        }
                    },
                    {
                        breakpoint: 520,
                        settings: {
                            slidesToShow: 2
                        }
                    },
                    {
                        breakpoint: 420,
                        settings: {
                            slidesToShow: 1.5
                        }
                    }
                ]
                });
            $('.my-carousel').slick({
                infinite: false,
                slidesToShow: 6,
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 4
                        }
                    },
                    {
                        breakpoint: 880,
                        settings: {
                            slidesToShow: 3
                        }
                    },
                    {
                        breakpoint: 520,
                        settings: {
                            slidesToShow: 2
                        }
                    },
                    {
                        breakpoint: 420,
                        settings: {
                            slidesToShow: 2
                        }
                    }
                ]

                
            });
            $('.view-carousel').slick({
                dots: true
            });          
});
       


 var btn = document.getElementById('continue');
 var pink = document.querySelector('.pink');
 var order = document.querySelector('.order');
 var del = document.querySelectorAll('.js-delievery-collapse input[required]');
 var del_block = document.querySelector('.delivery');
 var edit = document.querySelector('.edit');
 var pay = document.querySelector('.pay');
 var gray = document.querySelector('.gray');
 var m = document.querySelector('.m');
 var thk = document.querySelector('.thanks');
 var info = document.querySelector('.info-about-order');


if(typeof btn !== 'undefined' && btn !== null ){
    btn.addEventListener('click' , function(){

    var a = 0;
    var b = 0;    
        for (var i = 0; i < del.length; i++) {
            if(del[i].nodeName && del[i].hasAttribute('required')){
                a++;
                    if(!del[i].value){
                         del[i].classList.add('error');
                    }
                    else{
                        del[i].classList.remove('error');
                        b++;
                    }
            }
     }
     if(a == b){
        order.classList.add('block-none');
        pay.classList.add('block');
        del_block.classList.add('block');
        gray.classList.add('block-none');
     }
    getN();
 });
}
 
if(typeof btn !== 'undefined' && btn !== null ){
     edit.addEventListener('click' , function(){
        if(order.classList.contains('block-none')){
          order.classList.remove('block-none');
          del_block.classList.remove('block');
          gray.classList.remove('block-none');
          pay.classList.remove('block');
        };
     });
};
if(typeof btn !== 'undefined' && btn !== null ){
     m.addEventListener('click' , function(){
        del_block.classList.remove('block');
        pay.classList.remove('block');
        thk.classList.toggle('block');
        info.classList.add('block-none');
     });
};
 function getN(){
    var getName = document.getElementById('getName').value;
    var getTel = document.getElementById('getTel').value;
    var getCity = document.getElementById('getCity').value;
    var getNum = document.getElementById('getNumber').value;
    var getMail = document.getElementById('getMail').value;
    var getMethod = document.getElementById('getMethod').value;

    var name = document.getElementById('name');
    var tel = document.getElementById('tel');
    var city = document.getElementById('city');
    var num = document.getElementById('number');
    var mail = document.getElementById('mail');
    var method = document.getElementById('method');

    name.textContent = getName;
    city.textContent  = getCity;
    num.textContent = getNum;
    mail.textContent  = getMail;
    method.textContent = getMethod;
 }



