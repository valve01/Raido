const journalsLinks = document.querySelectorAll('.journals a');
journalsLinks.forEach((link) => {
	link.addEventListener('click', function (e) {
		e.preventDefault();
	});
});
