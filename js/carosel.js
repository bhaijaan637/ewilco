	// OwlCarousel
jQuery(document).ready(function($) {
		if ($('.testimonials-carousel').length > 0) {
			$('.testimonials-carousel').owlCarousel({
				items: 1,
				loop: true,
				autoplay: true,
				dots: false,
				margin:60,
				smartSpeed: 1000,
				merge: true,
				nav: false,
				navText: [],
				responsive: {
					0: {
						items: 1
					},
					420: {
						items: 1
					},
					768: {
						items: 1
					},
					992: {
						items: 1
					}
				}
			});
		}
	});
// owlCarouse end

// clients-carousel

// OwlCarousel
jQuery(document).ready(function($) {
		if ($('.client-carousel').length > 0) {
			$('.client-carousel').owlCarousel({
				items: 1,
				loop: true,
				autoplay: true,
				dots: true,
				margin:50,
				smartSpeed: 1500,
				merge: true,
				nav: false,
				navText: [],
				responsive: {
					0: {
						items: 1
					},
					420: {
						items: 2
					},
					768: {
						items: 3
					},
					992: {
						items: 4
					},
                                         1024: {
						items: 5
					}
				}
			});
		}
	});
// owlCarouse end