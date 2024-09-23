//your JS code here. If required.
const input = document.getElementById('fname');
input.addEventListner('blur', function () {
	input.value = input.value.toUpperCase();
});