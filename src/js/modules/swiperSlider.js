// import Swiper JS
import Swiper from 'swiper';
import { Navigation, Autoplay } from 'swiper/modules';
// import Swiper styles

import 'swiper/css';
import 'swiper/css/navigation';

const swiperSlider = () => {
	// init Swiper:
	const swiper = new Swiper('.galery__list-container', {
		// configure Swiper to use modules
		modules: [Navigation, Autoplay],
		navigation: {
			nextEl: '.galery__next-btn',
			prevEl: '.galery__prev-btn',
		},
		loop: true,
		slidesPerView: 5,
		spaceBetween: 20,
		autoplay: {
			delay: 5000,
		},
	});
};
export default swiperSlider;
