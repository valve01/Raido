const aboutLink = document.querySelector(".menu-item a[data-section='about']");
const discoverLink = document.querySelector(".menu-item a[data-section='discover']");
const blogLink = document.querySelector(".menu-item a[data-section='blog']");
const journalsLink = document.querySelector(".menu-item a[data-section='journals']");
const galeryLink = document.querySelector(".menu-item a[data-section='galery']");
const contactsLink = document.querySelector(".menu-item a[data-section='contacts']");

const aboutFooterLink = document.querySelector(".footer__menu-item a[data-section='about']");
const discoverFooterLink = document.querySelector(".footer__menu-item a[data-section='discover']");
const blogFooterLink = document.querySelector(".footer__menu-item a[data-section='blog']");
const journalsFooterLink = document.querySelector(".footer__menu-item a[data-section='journals']");
const galeryFooterLink = document.querySelector(".footer__menu-item a[data-section='galery']");
const contactsFooterLink = document.querySelector(".footer__menu-item a[data-section='contacts']");

const aboutBlock = document.querySelector('.about');
const discoverBlock = document.querySelector('.discover');
const blogBlock = document.querySelector('.blog');
const journalsBlock = document.querySelector('.journals');
const galeryBlock = document.querySelector('.galery');
const contactsBlock = document.querySelector('.contacts');

const scrollToBlock = (block) => {
	block.scrollIntoView(top);
};

aboutLink.addEventListener('click', function (e) {
	e.preventDefault();
	scrollToBlock(aboutBlock);
});

discoverLink.addEventListener('click', function (e) {
	e.preventDefault();
	scrollToBlock(discoverBlock);
});

blogLink.addEventListener('click', function (e) {
	e.preventDefault();
	scrollToBlock(blogBlock);
});

journalsLink.addEventListener('click', function (e) {
	e.preventDefault();
	scrollToBlock(journalsBlock);
});

galeryLink.addEventListener('click', function (e) {
	e.preventDefault();
	scrollToBlock(galeryBlock);
});

contactsLink.addEventListener('click', function (e) {
	e.preventDefault();
	scrollToBlock(contactsBlock);
});

aboutFooterLink.addEventListener('click', function (e) {
	e.preventDefault();
	scrollToBlock(aboutBlock);
});

discoverFooterLink.addEventListener('click', function (e) {
	e.preventDefault();
	scrollToBlock(discoverBlock);
});

blogFooterLink.addEventListener('click', function (e) {
	e.preventDefault();
	scrollToBlock(blogBlock);
});

journalsFooterLink.addEventListener('click', function (e) {
	e.preventDefault();
	scrollToBlock(journalsBlock);
});

galeryFooterLink.addEventListener('click', function (e) {
	e.preventDefault();
	scrollToBlock(galeryBlock);
});

contactsFooterLink.addEventListener('click', function (e) {
	e.preventDefault();
	scrollToBlock(contactsBlock);
});

// if (window.location.href.includes('rules')) {
// 	scrollToRules();
// }
// ==========================================================================================================

// const headerLinks = document.querySelectorAll('.menu-item');

// const about = document.querySelector('.about');
// const discover = document.querySelector('.discover');
// const blog = document.querySelector('.blog');
// const journals = document.querySelector('.journals');
// const galery = document.querySelector('.galery');
// const contacts = document.querySelector('.contacts');

// const scrollToBlock = (block) => {
// 	block.scrollIntoView(top);
// };

// headerLinks.forEach((link) => {
// 	link.addEventListener('click', () => {
// 		scrollToBlock(link[data-section]);
// 	});
// });
