// SLICK CAROUSEL INIT ////////////////////////////////
/////////////////////////////
////////////////////
////////////
//////
//
jQuery(document).ready(function() {

    $('.carousel').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows:false,
    autoplay:true,
    draggable:true,
    autoplaySpeed: 2000,
    responsive: [
    {
    breakpoint:768,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
        }
    },
    {
    breakpoint: 668,
        settings:{
            slidesToShow: 2,
            slidesToScroll: 1,
            }
    },
    {
    breakpoint: 480,
        settings:{
            slidesToShow: 1,
            slidesToScroll: 1,
            }
    }
    ]
    });

// FIN SLICK ******************************** 

});