/* -------------------------------------------------------------------
 * Template Name         : Bollin - Portfolio Template
 * Theme Author Name     : Yucel Yilmaz
 * Author URI            : https://www.aipthemes.com/
 * Created Date          : 10 March 2020
 * Version               : 1.0
------------------------------------------------------------------- */
/* -------------------------------------------------------------------
 [Table of contents]
 * 01.Preloader
 * 02.Wow Js
 * 03.Navbar
 * 04.Counter Up
 * 05.Owl Carousel
 * 06.ScrollSpy
 * 07.ScrollIt
 * 08.Magnific Popup
 * 09.Isotopğe Gallery
 * 10.Copyright
 * 11.Skills Bar
 * 12.Ripples Effect
 * 13.Glitch Effect
 * 14.Resume Tab Toggle
 * 15.Pricing Tab Toggle
 * 16.Contact Form
 * 17.Review Rating
*/

$(function() {
    "use strict";

    // Call all ready functions
    bollin_preloader(),
    bollin_wowJs(),
    bollin_navbar(),
    bollin_counterUp(),
    bollin_owlCarousel(),
    bollin_navScrollSpy(),
    bollin_scrollIt(),
    bollin_magnificPopup(),
    bollin_isotopeGallery(),
    bollin_copyrightDynamicYear(),
    bollin_skillsBar(),
    bollin_ripplesEffect(),
    bollin_glitchEffect(),
    bollin_resumeTabToggle(),
    bollin_pricingTabToggle(),
    bollin_contactForm(),
    bollin_reviewRating();

    $(document).contextmenu(function() {
        return false;
    });

    $(document).on("keydown",window,function(a){
        if(a.which == 123)
        return false;
    });

    document.onkeydown = function(e) {
        if (e.ctrlKey && 
            (e.keyCode === 67 || 
            e.keyCode === 86 || 
            e.keyCode === 85 || 
            e.keyCode === 115 || 
            e.keyCode === 19 || 
            e.keyCode === 117)) {
            alert('not allowed');
            return false;
        } else {
            return true;
        }
    };
});
/* ------------------------------------------------------------------- */
/* 01.Preloader
/* ------------------------------------------------------------------- */
function bollin_preloader() {
    "use-strict";

    // Variables
    var preloaderWrap           = $('.preloader-wrap'),
        loaderInner             = $('.preloader-wrap .preloader-inner');

    $(window).load("body",function(){
        loaderInner.fadeOut(); 
        preloaderWrap.delay(350).fadeOut('slow');
    });   
}
/* ------------------------------------------------------------------- */
/* 02.Wow Js
/* ------------------------------------------------------------------- */
function bollin_wowJs(){
    "use-strict";
    
    var wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 0,
        mobile: true,
        live: true,
        scrollContainer: null
    });
    wow.init();
}
/* ------------------------------------------------------------------- */
/* 03.Navbar
/* ------------------------------------------------------------------- */
function bollin_navbar() {
    "use-strict";

        // Variables
        let header              = $('.header'),
        logoTransparent     = $(".logo-transparent"),
        scrollTopBtn        = $(".scroll-top-btn"),
        logoNormal          = $(".logo-normal"),
        windowWidth         = $(window).innerWidth(),
        scrollTop           = $(window).scrollTop(),
        $dropdown           = $(".dropdown"),
        $dropdownToggle     = $(".dropdown-toggle"),
        $dropdownMenu       = $(".dropdown-menu"),
        showClass           = "show";

    // When Window On Scroll
    $(window).on('scroll',function(){
        let scrollTop       = $(this).scrollTop();

        if(scrollTop > 100 ) {
            header.addClass('header-shrink');
            scrollTopBtn.addClass('active');
            logoTransparent.hide();
            logoNormal.show();
        }else {
            header.removeClass('header-shrink');
            scrollTopBtn.removeClass('active');
            logoTransparent.show();
            logoNormal.hide();
        }
    });

    // The same process is done without page scroll to prevent errors.
    if(scrollTop > 100 ) {
        header.addClass('header-shrink');
        scrollTopBtn.addClass('active');
        logoTransparent.hide();
        logoNormal.show();
    }else {
        header.removeClass('header-shrink');
        scrollTopBtn.removeClass('active');
        logoTransparent.show();
        logoNormal.hide();
    }

    // Window On Resize Hover Dropdown
    $(window).on("resize", function() {
        let windowWidth  = $(this).innerWidth();

        if ( windowWidth > 991 ) {
            $dropdown.hover(
                function() {
                    let hasShowClass  =  $(this).hasClass(showClass);
                    if( hasShowClass!==true ){
                        $(this).addClass(showClass);
                        $(this).find($dropdownToggle).attr("aria-expanded", "true");
                        $(this).find($dropdownMenu).addClass(showClass);
                    }
                },
                function() {
                    $(this).removeClass(showClass);
                    $(this).find($dropdownToggle).attr("aria-expanded", "false");
                    $(this).find($dropdownMenu).removeClass(showClass);
                }
            );
        }else {
            $dropdown.off("mouseenter mouseleave");
            header.find('.main-menu').collapse('hide');
        }
    });
    // The same process is done without page scroll to prevent errors.
    if (windowWidth > 991 ) {
        $dropdown.hover(
            function() {
                const $this = $(this);

                var hasShowClass  = $this.hasClass(showClass);

                if(hasShowClass!==true){
                    $this.addClass(showClass);
                    $this.find($dropdownToggle).attr("aria-expanded", "true");
                    $this.find($dropdownMenu).addClass(showClass);
                }
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
        );
    }else {
        $dropdown.off("mouseenter mouseleave");
    }

}
/* ------------------------------------------------------------------- */
/* 04.Counter Up
/* ------------------------------------------------------------------- */
function bollin_counterUp(){
    "use-strict";

    // Variables
    var counterItem         = $('.counter');

    counterItem.counterUp({
        delay: 10,
        time: 1000
    });
}
/* ------------------------------------------------------------------- */
/* 05.Owl Carousel
/* ------------------------------------------------------------------- */
function bollin_owlCarousel() {
    "use-strict";

    // Variables
    var testimonialsCarousel   = $('.testimonials-carousel'),
        portfolioCarousel      = $('.portfolio-carousel'),
        blogSlider             = $('.latest-blog-slider');

    // Testimonial Carousel
    testimonialsCarousel.owlCarousel({
        loop:true,
        margin:30,
        nav:true,
        dots:false,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        stagePadding:0,
        smartSpeed:1000,
        navText: ["<span class='fa fa-arrow-left'></span>","<span class='fa fa-arrow-right'></span>"],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            768: {
                items:2
            },
            1000:{
                items:3
            }
        }
    });
    // Testimonial Carousel
    portfolioCarousel.owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        dots:false,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        stagePadding:0,
        smartSpeed:1000,
        navText: ["<span class='fa fa-arrow-left'></span>","<span class='fa fa-arrow-right'></span>"],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            768: {
                items:1
            },
            1000:{
                items:1
            }
        }
    });

    blogSlider.owlCarousel({
        loop:true,
        margin:30,
        nav:true,
        dots:false,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        stagePadding:0,
        smartSpeed:1000,
        navText: ["<span class='fa fa-arrow-left'></span>","<span class='fa fa-arrow-right'></span>"],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            768: {
                items:2
            },
            1000:{
                items:3
            }
        }
    });
}
/* ------------------------------------------------------------------- */
/* 06.ScrollSpy
/* ------------------------------------------------------------------- */
function bollin_navScrollSpy() {
    "use-strict";

    // Scroll Spy
    $('body').scrollspy({
        target: '#fixedNavbar',
        offset: 95
    });
}
/* ------------------------------------------------------------------- */
/* 07.ScrollIt
/* ------------------------------------------------------------------- */
function bollin_scrollIt() {
    "use-strict";
     
    $.scrollIt({
        upKey: 38,
        downKey: 40,
        easing: "swing",
        scrollTime: 600,
        activeClass: "active",
        onPageChange: null,
        topOffset: -15
    });
}
/* ------------------------------------------------------------------- */
/* 08.Magnific Popup
/* ------------------------------------------------------------------- */
function bollin_magnificPopup() {

    "use-strict";

    // Variables
    var portfolioGrid          = $('.portfolio-grid');
        videoPopup             = $('.popup-youtube');

    // Magnific Popup Video Iframe
    videoPopup.magnificPopup({
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false,
        removalDelay: 300
    });

    //  Portfolio Gallery Popup */
    portfolioGrid.magnificPopup({
        delegate: '.portfolio-zoom-link',
        type: 'image',
		gallery: {
			enabled: true
        }
    });
}
/* ------------------------------------------------------------------- */
/* 09.Isotopğe Gallery
/* ------------------------------------------------------------------- */
function bollin_isotopeGallery() {
    "use-strict";

    // Variables 
    var portfolioFilterBtn     = $('.portfolio-filter > a'),
        portfolioGalleryWrap   = $('.portfolio-gallery');

    // Porfolio Filtering Click Events
    portfolioFilterBtn.on("click", function() {
        portfolioFilterBtn.removeClass('current');
        $(this).addClass('current');
    });

    // Portfolio Masonary Gallery
    portfolioGalleryWrap.imagesLoaded(function() {
        var grid = $('.portfolio-gallery').isotope({
            itemSelector: '.glry-item',
            percentPosition: true,
            masonry: {
                columnWidth: '.glry-item',
            }
        });

        // filter items on button click
        portfolioFilterBtn.on('click', function() {
            var filterValue = $(this).attr('data-gallery-filter');
            grid.isotope({
                filter: filterValue
            });
        });
    });
}
/* ------------------------------------------------------------------- */
/* 10.Copyright
/* ------------------------------------------------------------------- */
function bollin_copyrightDynamicYear() {
    "use-strict";

    // Variables
    var fullYearCopyright       = $('#fullYearCopyright'),
        getFullYearDate         = new Date().getFullYear();

    fullYearCopyright.text(getFullYearDate);

    $('[data-toggle="tooltip"]').tooltip();
}   
/* ------------------------------------------------------------------- */
/* 11.Skills Bar
/* ------------------------------------------------------------------- */ 
function bollin_skillsBar(){
    "use-strict";

    // Variables
    var skillsItem              = $('.skills-item');

    skillsItem.each(function(){
        // Variables
        var skillPercent        = $(this).find(".skills-progress-value").attr("data-percent");

        $(this).find(".skills-progress-value").css("width",skillPercent +"%");
        $(this).find(".skills-item-text .skill-percent").html(skillPercent+"%");
    });
}
/* ------------------------------------------------------------------- */
/* 12.Ripples Effect
/* ------------------------------------------------------------------- */ 
function bollin_ripplesEffect() {
    "use-strict";
    
    $('.hero-ripless-banner').ripples({
        resolution: 500,
        dropRadius: 20,
        perturbance: 0.04
    });
}
/* ------------------------------------------------------------------- */
/* 13.Glitch Effect
/* ------------------------------------------------------------------- */ 
function bollin_glitchEffect() {
    "use-strict";

    $(".glitch-img").mgGlitch();
}
/* ------------------------------------------------------------------- */
/* 14.Resume Tab Toggle
/* ------------------------------------------------------------------- */
function bollin_resumeTabToggle(){
    "use-scrict";

    // Variables
    var resumeTabLink       = $('.resume-toggle-wrap > a'),
        resumeTabContent    = $('.resume-tab-content');

    resumeTabLink.on("click",function(){
        resumeTabLink.removeClass('active');
        $(this).addClass('active');
        resumeTabContent.removeClass('active');
        resumeTabContent.eq($(this).index()).addClass("active animated fadeInUp");
    });
}
/* ------------------------------------------------------------------- */
/* 15.Pricing Tab Toggle
/* ------------------------------------------------------------------- */
function bollin_pricingTabToggle(){
    "use-scrict";

    // Variables
    var priceTabLink       = $('.price-toggle-wrap > a'),
        priceTabContent    = $('.pricing-tab-content');

    priceTabLink.on("click",function(){
        priceTabLink.removeClass('active');
        $(this).addClass('active');
        priceTabContent.removeClass('active');
        priceTabContent.eq($(this).index()).addClass("active animated fadeInUp");
    });
}
/* ------------------------------------------------------------------- */
/* 16.Contact Form
/* ------------------------------------------------------------------- */
function bollin_contactForm(){
    "use-scrict";
    
    // Added AutoComplete Attribute Turned Off
    $('.form-input').attr("autocomplete","off");

    $("#contactForm").on("submit",function(event) {

        // E-Mail Validation Function 
        function validateEmail(email) {
            var regexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return regexp.test(String(email).toLowerCase());
        }

        //  Variables 
        var $this           = $(this),
            name            = $("#contactName").val().trim(),
            email           = $("#contactEmail").val().trim(),
            subject         = $("#contactSubject").val().trim(),
            message         = $("#contactMessage").val().trim(),
            validateEmail   = validateEmail(email);

        // Check empty fields
        if(name===''||email===''||message===''||subject===''){
            if($('div.empty-form').css("display") == "none"){
                $('div.empty-form').stop().slideDown(500).delay(3000).slideUp(500);
            }else {
                return false;
            }
        }else if (!validateEmail===true) {
            if($('div.email-invalid').css("display") == "none"){
                $('div.email-invalid').stop().slideDown(500).delay(3000).slideUp(500);
            }else {
                return false;
            }
        }else {
            // Once the information entered is verified, the mail form is sent. 
            $this.find(':submit').append('<span class="fas fa-spinner fa-pulse ml-3"></span>');
            $("#contactForm").find(':submit').attr('disabled','true');

            $.ajax({
                url: "vendor/send_mail.php?mail=request",
                data: {
                    contact_name:name,
                    contact_email:email,
                    contact_subject:subject,
                    contact_message:message
                },
                type: "POST",
                success: function(response) {
                    $this.find(':submit').find("span").fadeOut();
                    $("#contactForm")[0].reset();   
                    $("#contactForm").find(':submit').removeAttr('disabled');
                    $(".success-form").html(response).slideDown(500).delay(5000).slideUp(500);  
                }
            });
        }
        event.preventDefault();
    });
}

/* ------------------------------------------------------------------- */
/* 17.Review Rating
/* ------------------------------------------------------------------- */
function bollin_reviewRating(){
    "use-strict";

    // Variables
    let reviewRatingList      = $('.review-rating-list'),
        reviewRatingListItem  = reviewRatingList.find('li');

    reviewRatingListItem.on("click",function(event){
        let itemIndex      = $(this).index()+1; 

        reviewRatingListItem.removeClass('active');
        $('.review-rating-list li:lt('+itemIndex+')').addClass('active clickrate');
        event.preventDefault(); 
    });
}