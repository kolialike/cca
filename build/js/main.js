jQuery(function($){
  // var appendNumber = 7;
  //   var prependNumber = 1;
    // var swiper = new Swiper('.event-content .swiper-container', {
    //     nextButton: '.swiper-button-next',
    //     prevButton: '.swiper-button-prev',
    //     slidesPerView: 7,
    //     // centeredSlides: true,
    //     paginationClickable: true,
    //     spaceBetween: 10,
    // });
    
    //Табы по индексу
      var poBannerMenu = $(".po-banner-menu li");
      var poMenuContent = $(".po-menu-content > div");
      poBannerMenu.on('click', function(event) {
          event.preventDefault();
          $(this).addClass('active').siblings().removeClass('active');
          var index = poBannerMenu.index($(this));
          poMenuContent.eq(index).addClass('active').siblings().removeClass('active');    
      }); 

      // var institutionSmallPictures = $(".filter-category a");
      // var institutionBigPictures = $(".po-menu-content > div");
      // institutionSmallPictures.on('click', function(event) {
      //     event.preventDefault();
      //     $(this).addClass('active').siblings().removeClass('active');
      //     var index = institutionSmallPictures.index($(this));
      //     institutionBigPictures.eq(index).addClass('active').siblings().removeClass('active');    
      // });

    var swiper = new Swiper('.expired-content .swiper-container', {
        pagination: '.swiper-pagination',
        direction: 'vertical',
        slidesPerView: 1,
        paginationClickable: true,
        spaceBetween: 30,
        mousewheelControl: true
    });


    var swiper = new Swiper('.partners-content .swiper-container', {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        slidesPerView: 4,
        // slidesPerColumn: 2,
        paginationClickable: true,
        spaceBetween: 10,
        loop: true,
    });

    // var bannerText = $(".banner-text .banner-text-content");
    // var bannerImg = $(".banner-img img");
    // $(".banner-text-next").on('click', function(event) {
    //     event.preventDefault();
    //     bannerText.index(0).addClass('active').siblings().removeClass('active');
    //     var index = institutionSmallPictures.index($(this));
    //     institutionBigPictures.eq(index).addClass('active').siblings().removeClass('active');    
    // });


 


    $(document).on('click', '.banner-text-prev, .banner-text-next', function(event) { 
        event.preventDefault(); 
        if($(this).hasClass('banner-text-next')) { 
            $(".banner-img img.active").next().addClass('active').siblings().removeClass('active'); 
            $(".banner-text-container .banner-text-content.active").next().addClass('active').siblings().removeClass('active'); 
        } else { 
            $(".banner-img img.active").prev().addClass('active').siblings().removeClass('active'); 
            $(".banner-text-container .banner-text-content.active").prev().addClass('active').siblings().removeClass('active'); 
        } 

    });


    var language = $(".language a");
    var languageAll = $(".language-all");
    language.on('click', function(event) {
        event.preventDefault();
        $(this).parent().toggleClass('language-open');
    });


    var enter = $(".enter");
    var body = $("body");
    enter.on('click', function(event) {
        event.preventDefault();
        body.toggleClass('enter-container-open');
    });

    // var header = $("#header");
    // var top = $(document).scrollTop(); 
    // if(top >= 118) header.addClass('header-fixed'); 
    // else header.removeClass('header-fixed'); 
    

    var $window = $(window);
      var $menu = $('#header'); 
      setTimeout(function(){    
        // var menuTop = $menu.offset().top;
        $window.on('scroll', function() {
          var windowTop = $window.scrollTop();
          if(windowTop >= 119){
            $menu.addClass("header-fixed");
          }else{
            $menu.removeClass("header-fixed");
          }
        });
      }, 1500);





      var swiper = new Swiper('.event-content .swiper-container', {
       nextButton: '.swiper-button-next',
       prevButton: '.swiper-button-prev',
       slidesPerView: 7,
       paginationClickable: true,
       spaceBetween: 10,
       slidesPerGroup: 7,
   });




    var answerDescription = $(".answer-description a");
    answerDescription.on('click', function(event) {
        event.preventDefault();
        $(this).parent().toggleClass('answer-description-text-open');
    });
});


    
$(document).ready(function(e) {
    $(".fixtotop").hide(); 
    $(window).scroll(function(e) { 
    var top = $(document).scrollTop(); 
    if(top >= 1050) $('.fixtotop').fadeIn(); 
    else $('.fixtotop').fadeOut(); 
    e.preventDefault(); 
    return false; 
    }); 
    $(document).on('click', '#totop', function(e) { 
    $('body, html').animate({scrollTop: 0}, 1000); 
    e.preventDefault(); 
    return false; 
    });

    var blocks = $(".ukraine-china");
    for (var i = 0; i < blocks.length; i++) {
        var heightUk = $(".ukraine-china-r")[i].clientHeight;
        var heightUk2 = $(" .ukraine-china-l")[i].clientHeight;
        var tmp_h;
        // console.log(heightUk);
        // console.log(heightUk2);
        // console.log("---");
        if (heightUk > heightUk2) {
            tmp_h = heightUk;
        }
        else{
            tmp_h = heightUk2;
        }

        $(".ukraine-china-r")[i].style.height = tmp_h+"px";
        $(" .ukraine-china-l")[i].style.height = tmp_h+"px";
    }
    

});

function selectCheckAll(e, id) {
    $(id+" input[type='checkbox']:not(.disable)").each(function() {
        if(e.checked == true) {
            $(this).prop('checked', true);
        } else {
            $(this).prop('checked', false);
        }
    });
}

$(document).ready(function(e) {

    if($(".news-full").length > 0) {


        $(document).on('scroll', function(event) {
        var $window = $(window);
        var $newsFullR = $('.news-full-r'); 
        var newsFullTop = $(".news-full").offset().top-118;
        var blockHeight = $(".news-full > .wrapper").height()+$(".news-full > .wrapper").offset().top;
        var windowTopV = $window.scrollTop();
          var windowTopV = $window.scrollTop();
          if(windowTopV > newsFullTop) $newsFullR.addClass("news-full-r-f-fixed");
          else  $newsFullR.removeClass('news-full-r-f-fixed').removeClass('bottabs-news');
          if(  windowTopV >= $(".news-full > .wrapper").height()-372) $newsFullR.addClass('bottabs-news').removeClass('news-full-r-f-fixed');

            
        });


    };
});

$(document).ready(function(e) {
    if($(".vacancies").length > 0) {


        $(document).on('scroll', function(event) {
        var $window = $(window);
        var $vacanciesR = $('.vacancies-r'); 
        var vacanciesTop = $(".vacancies").offset().top-118;
        var blockHeight = $(".vacancies > .wrapper").height()+$(".vacancies > .wrapper").offset().top;
        var windowTopV = $window.scrollTop();
          var windowTopV = $window.scrollTop();
          if(windowTopV > vacanciesTop) $vacanciesR.addClass("vacancies-r-f-fixed");
          else  $vacanciesR.removeClass('vacancies-r-f-fixed').removeClass('bottabs');

          if(  windowTopV >= $(".vacancies > .wrapper").height()+70 ) $vacanciesR.addClass('bottabs').removeClass('vacancies-r-f-fixed');
            
        });


    };
});