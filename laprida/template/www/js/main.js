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