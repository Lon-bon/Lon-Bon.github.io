/*function navBar() {
    var x = document.getElementById("topNav");
    if (x.className === "navbar") {
        x.className += " responsive";
    } 
    else {
        x.className = "navbar";
    }
}*/

$(document).ready(() => {
    /* Dropdown Toggle Effects */
   $('.dropdown-toggle').on('mouseenter', () => {
       $('.dropdown-menu').slideDown();
       $('.caret').css({"-webkit-transform": "rotate(180deg) translate(0px, 0px)", "transform": "rotate(180deg) translate(0px, 0px)"})
   });
    $('.dropdown-menu').on('mouseleave', () => {
        $('.dropdown-menu').slideUp('fast');
        $('.caret').css({"-webkit-transform": "rotate(0deg) translate(0px, 0px)", "transform": "rotate(0deg) translate(0px, 0px)"});
        
    });
    $(document).on('click', () => {
        $('.dropdown-menu').slideUp('fast');
        $('.caret').css({"-webkit-transform": "rotate(0deg) translate(0px, 0px)", "transform": "rotate(0deg) translate(0px, 0px)"});
    });
    /*$('#marketing').on('click', () => {
        $('#marketingInfo').slideToggle();
    });*/
    
    /* btn-primeary resizing */
    function resize() {
        if ($(window).width() <= 768) {
            $('.btn-primary').addClass('btn-xs');
        }
        else {
            $('.btn-primary').removeClass('btn-xs');}
        }
    $(window).resize(resize);
        resize();
    $('#navIcon').on('click', () => {
        $('#navIcon').toggleClass('fa-times').toggleClass('fa-bars');
    });
    
    /* Hide Initiative on Load Small Screen */
    /*$(window).on('load', () => {
        if ($(window).width() <= 768) {
            $('.marketingInfo, .fundraisingInfo, .communityOutreachInfo, .educationInfo, .adminInfo').hide();
        }
    });
     $(window).on('load', () => {
        if ($(window).width() <= 768) {
            $('.fundraisingInfo').hide();
        }
    });
    $(window).on('load', () => {
        if (($window).width() <= 768) {
        $('.communityOutreachInfo').hide();
        }
    });
    $(window).on('load', () => {
        $('.educationInfo').hide();
    });
    $(window).on('load', () => {
        $('.adminInfo').hide();
    }); */
    
    /* Toggle Initaitives Info */
    $('.marketingInfo, .fundraisingInfo, .communityOutreachInfo, .educationInfo, .adminInfo').hide();
    $('#marketingPlus').on('click', () => {
        $('#marketingPlus').toggleClass('fa-minus').toggleClass('fa-plus').fadeToggle('.fa-minus').fadeToggle('.fa-plus')
        $('.marketingInfo').slideToggle();
    });
    $('#fundraisingPlus').on('click', () => {
        $('#fundraisingPlus').toggleClass('fa-minus').toggleClass('fa-plus').fadeToggle('.fa-minus').fadeToggle('.fa-plus')
        $('.fundraisingInfo').slideToggle();
    });
    $('#outreachPlus').on('click', () => {
        $('#outreachPlus').toggleClass('fa-minus').toggleClass('fa-plus').fadeToggle('.fa-minus').fadeToggle('.fa-plus')
        $('.communityOutreachInfo').slideToggle();
    });
    $('#educationPlus').on('click', () => {
        $('#educationPlus').toggleClass('fa-minus').toggleClass('fa-plus').fadeToggle('.fa-minus').fadeToggle('.fa-plus')
        $('.educationInfo').slideToggle();
    });
    $('#adminPlus').on('click', () => {
        $('#adminPlus').toggleClass('fa-minus').toggleClass('fa-plus').fadeToggle('.fa-minus').fadeToggle('.fa-plus')
        $('.adminInfo').slideToggle();
    });
    if(window.location.hash === '#marketing') {
        $('.marketingInfo').show();
        $('#marketingPlus').removeClass('fa-plus').addClass('fa-minus');
    };
    if(window.location.hash === '#fundraising') {
        $('.fundraisingInfo').show();
        $('#fundraisingPlus').removeClass('fa-plus').addClass('fa-minus');
    };
    if(window.location.hash === '#communityOutreach') {
        $('.communityOutreachInfo').show();
        $('#outreachPlus').removeClass('fa-plus').addClass('fa-minus');
    };
    if(window.location.hash === '#educationInitiative') {
        $('.educationInfo').show();
        $('#educationPlus').removeClass('fa-plus').addClass('fa-minus');
    };
    if(window.location.hash === '#administration') {
        $('.adminInfo').show();
        $('#adminPlus').removeClass('fa-plus').addClass('fa-minus');
    }
    window.scrollTo(0,$(window.location.hash).offset().top);
});