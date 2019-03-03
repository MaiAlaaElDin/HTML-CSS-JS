var firstNumber = prompt("Please Enter First Number: ");
while(isNaN(firstNumber))
{
	firstNumber = prompt("Please Enter a Valid Number(1st): ");
}
	document.write("First Number is: "+firstNumber+"</br>");


var secondNumber = prompt("Please Enter Second Number:");
while(isNaN(secondNumber))
{
	secondNumber = prompt("Please Enter a Valid Number(2nd): ");
}
	document.write("Second Number is: "+secondNumber+"</br>");



var thirdNumber = prompt("Please Enter Third Number: ");
while(isNaN(thirdNumber))
{
	thirdNumber =prompt("Please Enter a Valid Number(3rd): ");
}
	document.write("Third Number is: "+thirdNumber+"</br>");


var max = Math.max(firstNumber,secondNumber,thirdNumber);
document.write("Maximum Number is: "+max+"</br>");

var min = Math.min(firstNumber,secondNumber,thirdNumber);
document.write("Minimum Number is: "+min+"</br>");











