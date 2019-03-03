var input = prompt("Please Enter a number: ");
var numberFactorial;
var i;
//Checking if user inserted a valid number
while(isNaN(input))
{
	input = prompt("Please Enter a Valid Number: ");
}

//Recursive Factorial Function
function factorial(number)
{
	if(number === 1|| number === 0)
	{
		numberFactorial=1;
	}
	else{
		numberFactorial =  number * factorial(number-1);
	}
	
	return numberFactorial;
}
alert("The factorial equals: " + factorial(input));

//Function to get the factorial of 10 numbers in a table
function getFactorialForTable()
{
	document.write("<table border="+"1"+">");
	for(i=0;i<=10;i++)
	{
		document.write("<tr>"+  "<td>" +  i +"!"+"</td>"+"<td>" + factorial(i) +"</td>"+"</tr>");
	}
	
	document.write("</table>" + "</br>");
}