$(document).ready(function(){
    
    
    $(window).scroll(function(){
        //sticky navbar when scroll---------------------------------------
           var sc=$(this).scrollTop();
            if(sc>20){
                $('nav').addClass('sticky-nav');
            }
            else{
               $('nav').removeClass('sticky-nav'); 
            }
        
        //count to plugin in expert section---------------------------------
        
        var expertOffset = $('.statics').offset().top;
        if (sc>(expertOffset-200)){
            $('.time').countTo();
            //to stop count after terminate
            $(window).off('scroll')
        }
        //fade the scrolltop button
        if(sc>500){
                $('.scroll-top i').fadeIn();
            }
            else{
               $('.scroll-top i').fadeOut();
            }
    });
    
    //services section    -----------------------------------------------------------------
    //services background when hover
    
    $('.service .serv').hover(function(){
        $(this).css('background','#7cb62f').removeClass('bg-white').css('color','#fff');
        $(this).find('i').css('background','#fff').css('color','#7cb62f');
    },function(){
        $(this).css('background','#fff').css('color','#333').addClass('bg-white');
        $(this).find('i').css('background','#7cb62f').css('color','#fff');
    });
    
    
    
    //portifolio section  -----------------------------------------------------------------
    //image filter
    
   $('.portifolio .buttons button').click(function(){
      $(this).addClass('active-btn').siblings().removeClass('active-btn'); 
        
        var cssfilter = $(this).attr('id');
       if( cssfilter === 'all' ) {
           $('.images .row > div ').fadeIn();
       }else {
           $('.images .row > div ').fadeOut();
           $('.images .row').contents().filter('.' + cssfilter).fadeIn();
       }                
    });
    
    
    
    //toggle hidden images by view more button
    
    $('.portifolio .more').click(function(){
        $('.images .hide-img').toggle(1000,'swing');
        let txt =$(this).html();
        if(txt=='View Less'){
            $(this).html('View More');
        }else{
            $(this).html('View Less');
        }
    })

    
    //Exprtes section----------------------------------------------------------
    //circle progress bar
   
    $('#circle1').circleProgress({
        value:0.9,
        lineCap:"round",
        emptyFill:"#fff",
        fill:{
            color:"#049dff"
        }
    }).on('circle-animation-progress',function(event,progress){
        $(this).find('.circle-inner').html(Math.round(90*progress)+'<span>%</span>');
    });
    
    
    
    $('#circle2').circleProgress({
        value:0.8,
        lineCap:"round",
        emptyFill:"#fff",
        fill:{
            color:"#fdba04"
        }
    }).on('circle-animation-progress',function(event,progress){
        $(this).find('.circle-inner').html(Math.round(80*progress)+'<span>%</span>');
    });
    
    
    
    $('#circle3').circleProgress({
        value:0.1,
        lineCap:"round",
        emptyFill:"#fff",
        fill:{
            color:"#049dff"
        }
    }).on('circle-animation-progress',function(event,progress){
        $(this).find('.circle-inner').html(Math.round(10*progress)+'<span>%</span>');
    });
    
    
    
    $('#circle4').circleProgress({
        value:0.5,
        lineCap:"round",
        emptyFill:"#fff",
        fill:{
            color:"#fdba04"
        }
    }).on('circle-animation-progress',function(event,progress){
        $(this).find('.circle-inner').html(Math.round(50*progress)+'<span>%</span>');
    });
    
    
    
    //price section-------------------------------------------------
    //card hover
    
    $('.price .card').hover(function(){
        $(this).find('.card-header').css('background','#7cb62f'); 
        $(this).find('.footer').css('background','#7cb62f');
        $(this).css('position','relative');
        $(this).css('top','-10px');
        
    },function(){
        $(this).find('.card-header').css('background','#334');
        $(this).css('position','static');
        $(this).find('.footer').css('background','#334');
        $(this).css('top','10px');
    });
    
    
    
    // Team section-------------------------------------------------------------
    //owl carousel 
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
    });
    
    
    
    // choose section-------------------------------------------------------------
    //navigation bar
    $('.choose .card-header li').click(function(){
        $(this).addClass('active-btn').siblings().removeClass('active-btn');
        
        var chooseFilter = $(this).attr('id');
        if( chooseFilter === 'p-services'){
            $('.choose .card-body ').contents().filter('#' + chooseFilter);
            $('.choose .card-body .content2').addClass('d-block').siblings().removeClass('d-block').addClass('d-none');
       }else if( chooseFilter === 'p-contact'){
            $('.choose .card-body ').contents().filter('#' + chooseFilter);
            $('.choose .card-body .content3').addClass('d-block').siblings().removeClass('d-block').addClass('d-none');
           
       }else{
           $('.choose .card-body ').contents().filter('#' + chooseFilter);
            $('.choose .card-body .content1').addClass('d-block').siblings().removeClass('d-block');
       }
        
    });
    
    
    // pleasure section-----------------------------------------------------------
    //slick content
    $('.slick').slick({
        nextArrow:false,
        prevArrow:false
    });
    
    
    
    //contact section----------------------------------------------------------
    //form validation
    //user name
    $('.contact form .userName').blur(function(){
       if($(this).val()==""){
           $(this).parent().parent().find('.username').fadeIn(200);
           $(this).css('border','1px solid #f00');
       }else{
           $(this).parent().parent().find('.username').fadeOut(200);
           $(this).css('border','1px solid #ced4da');
       }email
    });
    
    //user email
    $('.contact form .email').blur(function(){
        if($(this).val().match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/)==null){
            $(this).parent().parent().find('.useremail').fadeIn(200);
           $(this).css('border','1px solid #f00');
        }else{
           $(this).parent().parent().find('.useremail').fadeOut(200);
           $(this).css('border','1px solid #ced4da');
       }
    });
    
    
    
    
    // scrolltop section-----------------------------------------------------------
    $('.scroll-top i').click(function(){
        $('body,html').animate({
            scrollTop:0
        },2000);
    });
    
    
    
    //smooth scroll------------------------------
    
    $('.nav-item a').click(function(){
        $(this).css('color','#7cb62f').parent().siblings().children().css('color','#fff');
        $('body,html').animate({
            scrollTop:$($(this).attr('href')).offset().top-70
        });
    });
    
    
    
    
    
    
    
    
    
});