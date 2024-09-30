const formActivatorBtns = document.querySelectorAll(
	'.contacts__circle-block-mail, .explore-btn, div.read-btn, .discover-btn ',
);
const mailForm = document.querySelector('.mail-form');
const scrollToBlock = (block) => {
	block.scrollIntoView(top);
};

function showForm() {
	formActivatorBtns.forEach((btn) => {
		btn.addEventListener('click', (e) => {
			if (mailForm.classList.contains('mail-form--active')) {
				scrollToBlock(mailForm);
			} else {
				mailForm.classList.add('mail-form--active');
				setTimeout(() => scrollToBlock(mailForm), 200);
			}
			e.preventDefault();
		});
	});
}

export default showForm;
