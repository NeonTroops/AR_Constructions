// Smooth Scrolling For All pages
$('.scrolldown').on('click', function() {
	const home = $('#container').position().top;

	$('html, body').animate({
		scrollTop: home
	}, 1500);
});

// Responsive Menu-Bar 

$('#responsive-menu').click(function () {
	$('.menu').toggleClass('close');
	$('.hide').toggleClass('show');
});
