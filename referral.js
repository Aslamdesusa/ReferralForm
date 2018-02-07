var i = 1;
$(document).ready(function(){
$("#btn").click(function(){
    document.getElementById('tagh2').innerHTML = "Student "+ ++i +" Details"
    $("#main").clone().appendTo("#newclone");
    document.getElementById('tagh2').innerHTML = "Student 1 Details"
});
});


$(document).ready(function(){
	$("#btnbottom").click(function(){
		var array1 = []
		var array = []

		var array2 = []

		var name1 = $("#name1").val();
		var num1 = $("#num1").val();
		var num2 = $("#num2").val();
		var name = $("#hello").val();
		var phone = $("#num").val();
		var email = $("#em").val();
		array1.push(name1);
		array1.push(num1);
		array1.push(num2);
		array.push(name);
		array.push(phone);
		array.push(email);

		array2.push(array1);
		array2.push(array);

		console.log(array2);

		// console.log(array);
		// alert(array);
	});
});
