function validationsInfobox(){

	var box = document.getElementById('username');
	var box1 = document.getElementById('password');
	if(box.value.length < 5 || box1.value.length < 8)
	{
		alert('Please fill username atleast 5 characters and password atleast 8 characters.');
		box.focus();
		box.style.border = "solid 3px red";
		box1.focus();
		box1.style.border = "solid 3px red";
		return false;
	}
}
