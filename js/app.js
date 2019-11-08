// preloader
$(window).on('load', function() {
	setTimeout(() => {
		$('.preloader').removeClass('is-active');
	}, 1000);
});

$(document).ready(function() {
	// navbar burger
	$('.navbar-burger').click(function() {
		$('.navbar-burger').toggleClass('is-active');
		$('.navbar-menu').toggleClass('is-active');
	});
});
