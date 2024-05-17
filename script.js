//your JS code here. If required.
const inputfield=document.getElementById("fname");

inputfield.addEventListener("blur",function(){
	const value=inputfield.value;
	const upperCaseValue=value.toUpperCase();
	inputfield.value=upperCaseValue;
	
})