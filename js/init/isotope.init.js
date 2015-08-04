// ISOTOPE ////////////////////////////////
/////////////////////////////
////////////////////
////////////
//////
//

jQuery(window).load(function() {


	jQuery('.galerie-isotope').isotope({
		itemSelector: '.galerie-item',
		layoutMode: 'masonry'
	});

	jQuery('.filtre li').click(function() {
		var current = jQuery(this);

		current.siblings('li').removeClass('active');
		current.addClass('active');

		var filterValue = current.attr('data-filter');
		var container = current.closest('.projects-wrapper').find('.projects-container');
		container.isotope({ filter: filterValue });
	});

// FIN LOAD *****************************
}); 