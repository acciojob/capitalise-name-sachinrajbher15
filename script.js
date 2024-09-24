//your JS code here. If required.
const input = document.getElementById('fname');
input.addEventListener('blur', function () {
	input.value = input.value.toUpperCase();
});