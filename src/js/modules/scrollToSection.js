
const links = document.querySelectorAll('.menu-item a, .footer__menu-item a');
console.log(links);

const scrollToBlock = (block) => {
	block.scrollIntoView(top);
};

links.forEach((link) => {
	link.addEventListener('click', function (e) {
		e.preventDefault();
		const blockToScroll = link.getAttribute('data-menu-name');
		scrollToBlock(document.querySelector(`.${blockToScroll}`));
	});
});
