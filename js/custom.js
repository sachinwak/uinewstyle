// Dropdown Menu Fade    
jQuery(document).ready(function(){


    /*$(".dropdown").hover(
        function() { $('.dropdown-menu', this).stop().fadeIn("fast");
        },
        function() { $('.dropdown-menu', this).stop().fadeOut("fast");
    });*/

    $('.top-navbar-icon1').click(function(){
    	$(".top-nav-bar-left").slideToggle();
    });

});
