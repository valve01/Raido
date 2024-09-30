import Swiper from 'swiper';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const swiperSlider = () => {
	const swiper = new Swiper('.galery__list-container', {
		modules: [Navigation, Autoplay],
		navigation: {
			nextEl: '.galery__next-btn',
			prevEl: '.galery__prev-btn',
		},
		loop: true,
		slidesPerView: 2,
		spaceBetween: 20,
		autoplay: {
			delay: 8000,
		},
		breakpoints: {
			320: {
				slidesPerView: 1,
			},
			480: {
				slidesPerView: 2,
			},
			// when window width is >= 640px
			640: {
				slidesPerView: 3,
			},
			1170: {
				slidesPerView: 4,
			},
			1440: {
				slidesPerView: 5,
			},
		},
	});
};
export default swiperSlider;
