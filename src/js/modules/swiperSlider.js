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
		slidesPerView: 2,
		spaceBetween: 20,
		// autoplay: {
		// 	delay: 5000,
		// },
		breakpoints: {
			// when window width is >= 320px
			320: {
			  slidesPerView: 2,

			},
			// when window width is >= 480px
			480: {
			  slidesPerView: 3,

			},
			// when window width is >= 640px
			640: {
			  slidesPerView: 3,
			},
			768: {
				slidesPerView: 3,
			  },
			1170: {
				slidesPerView: 4,
  
			  },
			1440: {
				slidesPerView: 5,
  
			  }

		  }
	});
};
export default swiperSlider;
