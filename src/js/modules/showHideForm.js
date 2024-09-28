function showHideForm() {
	const contacts = document.querySelector('.contacts');
	const formActivatorBtns = document.querySelectorAll(
		'.contacts__circle-block-mail, .explore-btn, div.read-btn, .discover-btn ',
	);
	const mailForm = document.querySelector('.mail-form');
	const mailFormSubmit = document.querySelector('.mail-form__submit');

	const scrollToBlock = (block) => {
		block.scrollIntoView(top);
	};

	formActivatorBtns.forEach((btn) => {
		btn.addEventListener('click', (e) => {
			mailForm.classList.toggle('mail-form--active');
			if (mailForm.classList.contains('mail-form--active')) {
				setTimeout(() => scrollToBlock(mailForm), 500);
			}
			e.preventDefault();
		});
	});

	mailFormSubmit.addEventListener('click', (e) => {
		mailForm.classList.toggle('mail-form--active');
		scrollToBlock(contacts);
		e.preventDefault();
	});
}
export default showHideForm;
