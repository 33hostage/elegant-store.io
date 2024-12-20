import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

function swiper () {
	const swiper = new Swiper('.swiper', {
		slidesPerView: "auto",
		spaceBetween: 12,
		// If we need pagination
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},

		breakpoints: {
			840: {
				spaceBetween: 24,
			},
		},
	});
}

export default swiper;