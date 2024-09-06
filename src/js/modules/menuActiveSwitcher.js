const allMenuItems = document.querySelectorAll('.header .menu-link');
const sections = document.querySelectorAll('.section');

window.addEventListener('scroll', () => {
	sections.forEach((item) => {
		const sectionName = item.dataset.sectionName;
		allMenuItems.forEach((menuItem) => {
				if (item.getBoundingClientRect().top < 110 && menuItem.dataset.menuName == sectionName) {
				menuItem.classList.add('menu-item--active');
			}
			if (
				(item.getBoundingClientRect().bottom < 110 || item.getBoundingClientRect().top >= 110) &&
				menuItem.dataset.menuName == sectionName
			) {
				menuItem.classList.remove('menu-item--active');
			}
		});
	});
});

