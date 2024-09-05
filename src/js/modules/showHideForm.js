function showHideForm() {
	const contacts = document.querySelector('.contacts');
	const contactsCircleBlockMail = document.querySelector('.contacts__circle-block-mail');
	const mailForm = document.querySelector('.mail-form');
	const mailFormSubmit = document.querySelector('.mail-form__submit');

	const scrollToBlock = (block) => {
		block.scrollIntoView(top);
	};

	contactsCircleBlockMail.addEventListener('click', (e) => {
		mailForm.classList.toggle('mail-form--active');
		setTimeout(() => scrollToBlock(mailForm), 500);
		e.preventDefault();
	});

	mailFormSubmit.addEventListener('click', (e) => {
		mailForm.classList.toggle('mail-form--active');
		scrollToBlock(contacts);
		e.preventDefault();
	});
}
export default showHideForm;
