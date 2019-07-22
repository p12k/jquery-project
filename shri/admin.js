function validate(){

let bid=document.myform2.bid.value;
let book=document.myform2.book.value;
let sid=document.getElementsByName("sid");
let book_name=document.myform2.book_name.value;
let author=document.myform2.author.value;
let price=document.myform2.price.value;
/*let gender=document.getElementsByName("gender");*/
/*let email=document.myform1.email.value;*/




if(bid==""||book==""||book_name==""||author==""||price==""){

alert("*field cannot be empty");
return false;

}
/*else if(gender[0].checked!=true && gender[1].checked!=true){

	alert("gender cannot be empty");
	return false;*/


else if(bid.length<10){
	alert("please enter 10 digit Book Id")
	return false;
}
	else if(author==""){
		alert("please enter proper Author name");
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
	/*$(".abc").fadeOut().slideDown(2000);
	$(".file").fadeOut().slideDown(2000);
	$(".regi").fadeOut().slideDown(2000);
	$(".abc").fadeIn(3000);*/
});
