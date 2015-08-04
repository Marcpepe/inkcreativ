jQuery(window).load(function() {
$("#taux_interet").ionRangeSlider({
    type: "double",
    grid: false,
    min: 10,
    max: 100,
    from: 20,
    to: 80,
    prefix: "% "
});
$("#maturite").ionRangeSlider({
 	type: "double",
    grid: false,
    min: 1,
    max: 12,
    from: 2,
    to: 10,
    prefix: "Mois "
});
}); 