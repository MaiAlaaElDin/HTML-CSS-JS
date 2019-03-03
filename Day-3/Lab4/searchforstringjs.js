
function countStringOccurrences()
{
	
	var paragraph = document.getElementById("paragraph_field").value;
	var substring = document.getElementById("sub_field").value;
	var index = document.getElementById("index_field").value;
	
	var stringFirstOccurrence = paragraph.indexOf(substring);
	var stringLastOccurrence = paragraph.lastIndexOf(substring);
	var stringFirstOccurrenceFromIndex = paragraph.indexOf(substring,index);
	var stringLastOccurrenceFromIndex = paragraph.lastIndexOf(substring,index);
	
	document.getElementById("first_occur").value=stringFirstOccurrence;
	document.getElementById("last_occur").value=stringLastOccurrence;
	document.getElementById("first_occur_index").value=stringFirstOccurrenceFromIndex;
	document.getElementById("last_occur_index").value=stringLastOccurrenceFromIndex;
	
}
