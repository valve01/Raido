import { isEmail } from 'validator';
const mailInput = document.querySelector('.mail-form__user-mail');

mailInput.addEventListener('input', () => {
	console.log(isEmail(mailInput.value));
});

