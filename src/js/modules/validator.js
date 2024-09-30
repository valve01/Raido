import { isEmail } from 'validator';
import swal from 'sweetalert';
const mailInput = document.querySelector('.mail-form__user-mail');
const submitBtn = document.querySelector('.mail-form__form .read-btn');

submitBtn.addEventListener('click', () => {
	if (isEmail(mailInput.value)) {
		mailInput.classList.remove('invalid-value');
		mailInput.classList.remove('valid-value');
		swal({
			title: 'Good job!',
			text: 'You clicked the button!',
			icon: 'success',
			button: 'Aww yiss!',
		});
	} else {
		mailInput.value = '';
		mailInput.setAttribute('placeholder', 'Invalid Email');
		mailInput.classList.add('invalid-value');
	}
});

mailInput.addEventListener('input', () => {
	mailInput.setAttribute('placeholder', 'Email Address');
	if (isEmail(mailInput.value)) {
		mailInput.classList.add('valid-value');
	} else {
		mailInput.classList.remove('valid-value');
	}
});
