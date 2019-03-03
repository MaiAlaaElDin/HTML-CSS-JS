var input = prompt("Select a List Style: " +"\n" + "1) Bullet List  2) Numbered List  3) Lettered List");

switch(input)
{
	case "1":
		document.write("<h2>"+"1) Bullet HTML List"+"</h2>");
		document.write("<ul>" + "<li>"+"List Item 1"+"</li>" + "<li>"+"List Item 2"+"</li>" +"<li>"+"List Item 3"+"</li>" +"</ul>");
		document.write("<p>"+"Click Refresh to run the script again"+"</p>");
		break;
 	
	case "2":
		document.write("<h2>"+"2) Ordered List : Numbered"+"</h2>");
		document.write("<ol>" + "<li>"+"List Item 1"+"</li>" + "<li>"+"List Item 2"+"</li>" +"<li>"+"List Item 3"+"</li>" +"</ol>");
		document.write("<p>"+"Click Refresh to run the script again"+"</p>");
		break;
	
	
	
	case "3":
		document.write("<h2>"+"3) Ordered List : Lettered"+"</h2>");
		document.write("<ol"+"type="+'A' + ">" + "<li>"+"List Item 1"+"</li>" + "<li>"+"List Item 2"+"</li>" +"<li>"+"List Item 3"+"</li>" +"</ol>");
		document.write("<p>"+"Click Refresh to run the script again"+"</p>");
		break;
	
	default: 
		alert("Please Enter a valid number (1,2,3)");
		prompt("Select a List Style: " +"\n" + "1) Bullet List  2) Numbered List  3) Lettered List");
	
	
}
	
