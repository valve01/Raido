const contacts = document.querySelector('.contacts');
const mailForm = document.querySelector('.mail-form');

const scrollToBlock = (block) => {
	block.scrollIntoView(top);
};

const closeForm = (e) => {
	mailForm.classList.remove('mail-form--active');
	scrollToBlock(contacts);
	e.preventDefault();
};

export default closeForm;
