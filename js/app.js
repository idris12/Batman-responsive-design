var overlay = document.querySelector('#overlay');
var body = document.getElementsByTagName('BODY')[0];

document.querySelector('#nav-toggle').addEventListener('click', function() {
	this.classList.toggle('active');
	overlay.style.display = 'block';
	overlay.style.display = 'flex';
});

overlay.addEventListener('click', function() {
	overlay.style.display = 'none';
});
