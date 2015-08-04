// FONCTIONS JS ////////////////////////////////
/////////////////////////////
////////////////////
////////////
//////
//


function alignVertical(){
	$('.align-vertical').each(function(){
	var that = $(this);
	var height = that.height();
	var parentHeight = that.parent().height();
	var padAmount = (parentHeight / 2) - (height/2);
	that.css('padding-top', padAmount);
	});
}

// LOAD ////////////////////////////////
/////////////////////////////
////////////////////
////////////
//////
//

jQuery(window).load(function() {
$("#slider").rangeSlider();
}); 

// READY ////////////////////////////////
/////////////////////////////
////////////////////
////////////
//////
//

jQuery(document).ready(function() {

// SMOOTH SCROLL ***********************	
$('.scrollTo').click( function() { // Au clic sur un élément
	var page = $(this).attr('href'); // Page cible
	var speed = 750; // Durée de l'animation (en ms)
	$('html, body').animate( { scrollTop: $(page).offset().top }, speed ); // Go
	return false;
});

// TAILLE DIV PROJET-BIG ***********************
var entryContentHeight = $('.projet-big .entry-content').height();
$('.image-projet-conteneur').height(entryContentHeight);

// FULLSCREEN ***********************

topbar = $('#topbar').height();
if(topbar){
	$('.fullscreen').css('height',($(window).height()-topbar));
	$('.fullscreen').find('.slides li').css('height',($(window).height()-topbar));
} else{
topbar_transparent = $('#topbar_transparent').height();
	$('.fullscreen').css('height',($(window).height()));
	$('.fullscreen').find('.slides li').css('height',($(window).height()));
}


// BGIMAGE ***********************

$('.bg-image-conteneur').each(function(){
var imgSrc= $(this).children('img').attr('src');
$(this).css('background', 'url("' + imgSrc + '")');
$(this).children('img').hide();
$(this).css('background-position', '50% 0%');
});

// ALIGN VERTICAL ***********************

	alignVertical();


// FIN READY ******************************** 

});

// RESIZE ////////////////////////////////
/////////////////////////////
////////////////////
////////////
//////
//
jQuery(window).resize(function() {

// FULLSCREEN ***********************

topbar = $('#topbar').height();
if(topbar){
	$('.fullscreen').css('height',($(window).height()-topbar));
	$('.fullscreen').find('.slides li').css('height',($(window).height()-topbar));
} else{
topbar_transparent = $('#topbar_transparent').height();
	$('.fullscreen').css('height',($(window).height()));
	$('.fullscreen').find('.slides li').css('height',($(window).height()));
}
// ALIGN VERTICAL ***********************

	alignVertical();

// FIN RESIZE ******************************** 
});


