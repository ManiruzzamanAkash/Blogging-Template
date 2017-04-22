/*
	Template Name	: Responsive Blogging Template
	Author		: Maniruzzaman Akash <manirujjamanakash@gmail.com>
	Designed Date	: 20/03/2017
 */



(function ($) {

	//Start tooltip plugin
	$('[data-toggle="tooltip"]').tooltip();


	/** Start Scroll up/down and remove at top position **/

	$(window).scroll(function(){
		if ($(this).scrollTop() > 300) {
			$("#totop").fadeIn();
		}else{
			$("#totop").fadeOut();
		}
	});
	$("#totop").click(function(){
		$("html, body").animate({scrollTop:0}, 500);
	});

	/** Finish Scroll up/down and remove at top position **/


//hover over dropdown
$('ul.nav li.dropdown').hover(function(){
	$(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
}, function(){
	$(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
});


//For search bar tooltip
$(".search-bar-top").focus(function(){
	$(".tooltip").addClass("hidden");
});

/** Creat a subscription model after loading the pages completely ***/

})(jQuery);
