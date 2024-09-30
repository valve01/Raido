function mobileNav() {

	const nav = document.querySelector('.mobile-nav__wrapper');
	const navBtns = document.querySelectorAll(
		'.mobile-nav__item a, .mobile-burger__btn, .mobile-nav__close-btn ',
	);

	const toggleActive = () => {
		nav.classList.toggle('mobile-nav--active');
	};

	navBtns.forEach((btn) => {
		btn.onclick = function () {
			toggleActive();
			// document.body.classList.toggle('no-scroll');
		};
	});

}
export default mobileNav;
