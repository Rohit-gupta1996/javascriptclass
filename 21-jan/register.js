function validateForm(){

	var fn=document.getElementById("fname").value;
	var ln=document.getElementById("lname").value;
	var add=document.getElementById("address").value;
	var mob=document.getElementById("num").value;
	var mr=document.getElementById("male").value;
	var fr=document.getElementById("female").value;
	var qly=document.getElementById("qualification").value;


	document.write( Information Of Registered Student are:-" + "<br>");
	
	document.getElementById("fname")=("First Name Of Studnet is  :"+" "+fn+"<br>");
	document.write("Last Name Of Student is :"+" "+ln+"<br>");
	document.write("Address Of Student is :"+" "+add+"<br>");
	document.write("Mobile Number Of Student is :"+" "+mob+"<br>");
	document.write("Gender Of Studnet is  :"+" "+mr+"<br>");
	document.write("Gender Of Studnet is  :"+" "+fr+"<br>");
	document.write("Qualification Of Student is :"+" "+qly+"<br>");
	
}
