// const aboutSection = document.querySelector('.about');
// const dataMenuItemAbout = document.querySelector(".menu-item a[data-menu-name='about']");

// window.addEventListener('scroll', () => {
// 	if (aboutSection.getBoundingClientRect().top <= 0) {
// 		dataMenuItemAbout.classList.add('menu-item--active');
// 	}
// 	if(aboutSection.getBoundingClientRect().bottom <=0 || aboutSection.getBoundingClientRect().top > 0){
// 		dataMenuItemAbout.classList.remove('menu-item--active');
// 	}
// });

// ========================================================================================

const allMenuItems = document.querySelectorAll('.header .menu-link');

const sections = document.querySelectorAll('.section');

window.addEventListener('scroll', () => {
	// sections.forEach((item) => {console.log(item.getBoundingClientRect());
	allMenuItems[0].classList.remove('menu-item--active');
		const sectionName = item.dataset.sectionName;
		allMenuItems.forEach((menuItem) => {
			
			if (item.getBoundingClientRect().top < 0 && menuItem.dataset.menuName == sectionName) {
				
				menuItem.classList.add('menu-item--active');
			}
			if (
				(item.getBoundingClientRect().bottom < 0 || item.getBoundingClientRect().top > 0) &&
				menuItem.dataset.menuName == sectionName
			) {
				menuItem.classList.remove('menu-item--active');
			}
		});
	});
});

// ============================================================================================================
// const allMenuItems = document.querySelectorAll('.header .menu-item');
// const sections = document.querySelectorAll('.section');

// window.addEventListener('scroll', () => {
// 	sections.forEach((item) => {
// 		if ((item.getBoundingClientRect().y <= 0)) {
// 			const sectionName = item.dataset.sectionName;
// 			console.log(sectionName)
// 			allMenuItems.forEach((menuItem) => {
// 				menuItem.classList.remove('menu-item--active');
// 				if (menuItem.dataset.menuName === sectionName) {
// 					menuItem.classList.add('menu-item--active');
// 				}
// 			});
// 		}
// 	});
// });
