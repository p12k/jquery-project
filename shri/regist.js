function validate(){

var fname=document.myform1.fname.value;
var mname=document.myform1.mname.value;
var lname=document.myform1.lname.value;
var uname=document.myform1.uname.value;
var pass=document.myform1.pwd.value;
var cpass=document.myform1.cpwd.value;
var dob=document.myform1.bday.value;

/*let email=document.myform1.email.value;*/
var mob=document.myform1.mob.value;
var gender=document.getElementsByName("gender");


if(fname==""||mname==""||lname==""||uname=="")
{

alert("*field cannot be empty");
return false;

}

else if(pass==""|| cpass=="")
{
	alert('Enter the password');
	return false;
}

else if(pass.length < 6 || cpass.length < 6)
{
	alert('Password should contain atleast 6 characters');
	return false;
}

else if(pass != cpass)
{
	alert('Password Mismatch');
	return false;
}

else if(dob == "")
{
	alert('Enter the DOB');
	return false;
}

else if(mob.length<10 || mob.length > 10){
	alert("please enter 10 digit mobile number")
	return false;
}
	else if(isNaN(mob)){
		alert("please enter proper mobile number");
		return false;

	}

	else if(mob=="")
	{
		alert('Enter the correct number');
	}

	else if(gender[0].checked!=true && gender[1].checked!=true){

	alert("gender cannot be empty");
	return false;

}

	else{
		alert("Registered Successfully!!")

window.open("success.html")	
	return true;

	}	
	}
	$(function(){
	$(".bt").fadeOut().slideDown(2000);
	$(".abc").fadeOut().slideDown(2000);
	$(".file").fadeOut().slideDown(2000);
	$(".regi").fadeOut().slideDown(2000);
	$(".abc").fadeIn(3000);
});
