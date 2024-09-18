const journalsLinks = document.querySelectorAll(
	'.journals a, .header__search-link, .explore-link, .read-link, .discover__item-link, .discover-link, .blog__link, .galery a, .mail-form__contacts-inner a, .footer__social-block a ',
);
// console.log(journalsLinks);
journalsLinks.forEach((link) => {
	link.addEventListener('click', function (e) {
		e.preventDefault();
	});
});
