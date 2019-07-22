function validate(){
	let studid=document.myform3.studid.value;
	let sname=document.myform3.sname.value;

	let bday=document.myform3.bday.value;
	
	
	let gender=document.getElementsByName("gender");
	let mobile=document.myform3.mobile.value;


	if(studid=="")
	{

		alert("*field cannot be empty");
		return false;

	}

	else if((isNaN(studid))){
		alert("please enter proper student Id");
		return false;

	}
	else if(sname== null || sname==""){
		alert("enter the student name");
		return false;

	}

	else if( bday==null||bday == "")
	{
		alert('Enter the DOB');
		return false;
	}


	else if(gender[0].checked!=true && gender[1].checked!=true){

		alert("gender cannot be empty");
		return false;
	}

	else if(mobile.length<10 || mobile.length > 10){
		alert("please enter 10 digit mobile number")
		return false;
	}
	else if(isNaN(mobile)){
		alert("please enter proper mobile number");
		return false;

	}

	else if(mobile=="")
	{
		alert('Enter the correct number');
		return false;
	}

	else{
		alert("Registered Successfully!!")

window.open("success.html")	
	return true;

	}	

}		
$(function(){
	$(".library").fadeOut().slideDown(2000);
	$(".bt").fadeOut().slideDown(2000);
	$(".abc").fadeOut().slideDown(2000);
	$(".file").fadeOut().slideDown(2000);
	$(".regi").fadeOut().slideDown(2000);
	$(".abc").fadeIn(3000);
});