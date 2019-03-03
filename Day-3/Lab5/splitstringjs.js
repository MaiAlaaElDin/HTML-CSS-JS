function splitSentence()
{
	var sentence = document.getElementById("sentence_field").value;
	var delimiter = document.getElementById("split_by_field").value;
	
	//split sentence into strings and add them splitted to the text area
	var splittedStrings = sentence.split(delimiter);	
	for(i=0; i<splittedStrings.length;i++)
	{
		document.getElementById("paragraph_field").value += splittedStrings[i]+"\n"; //to append splitted strings on the text area
		
	}
	
	//get substring of the sentence
	var partOfString = sentence.substring(0,10);
	document.getElementById("first_ten_chars").value = partOfString;
	
}