<!-- Begin
function create(form) {
  if (confirm("Do you really want to generate these tags?")) {
    form.story.value = "HTag HTML Meta Tags Generator \n" +
   "Instructions: copy the following lines of code and insert them " +
      "between the <HEAD> and </HEAD> tags in your HTML document. That's it! \n" +
	  "-------------------------------------------------------------------\n\n";
    if (form.input1.value != "") {
      form.story.value +="<meta name=\"Title\" content=\"" +
      form.input1.value + "\">\n";
    }
    if (form.input2.value != "") {
      form.story.value +="<meta name=\"Author\" content=\"" +
      form.input2.value + "\">\n";
    }
    if (form.input3.value != "") {
      form.story.value +="<meta name=\"Subject\" content=\"" +
      form.input3.value + "\">\n";
    }
    if (form.input4.value != "") {
      form.story.value +="<meta name=\"Description\" content=\"" +
      form.input4.value + "\">\n";
    }
    if (form.input5.value != "") {
      form.story.value +="<meta name=\"Keywords\" content=\"" +
      form.input5.value + "\">\n";
    }
    if (form.input6.value != "") {
      form.story.value +="<meta name=\"Generator\" content=\"HTag" + "," +
      form.input6.value + "\">\n";
    }
    if (form.input7.value != "") {
      form.story.value +="<meta name=\"Language\" content=\"" +
      form.input7.value + "\">\n";
    }
    if (form.input8.value != "") {
      form.story.value +="<meta name=\"Expires\" content=\"" +
      form.input8.value + "\">\n";
    }
    if (form.input9.value != "") {
      form.story.value +="<meta name=\"Abstract\" content=\"" +
      form.input9.value + "\">\n";
    }
    if (form.input10.value != "") {
      form.story.value +="<meta name=\"Copyright\" content=\"© " +
      form.input10.value + "\">\n";
    }
    if (form.input11.value != "") {
      form.story.value +="<meta name=\"Designer\" content=\"" +
      form.input11.value + "\">\n";
    }
    if (form.input12.value != "") {
      form.story.value +="<meta name=\"Publisher\" content=\"" +
      form.input12.value + "\">\n";
    }
    if (form.input13.value != "") {
      form.story.value +="<meta name=\"Revisit-After\" content=\"" +
      form.input13.value + " \Days\">\n";
    }
    if (form.input14.value != "") {
      form.story.value +="<meta name=\"Distribution\" content=\"" +
      form.input14.options[form.input14.selectedIndex].value + "\">\n";
    }
    if (form.input15.value != "") {
      form.story.value +="<meta name=\"Robots\" content=\"" +
      form.input15.options[form.input15.selectedIndex].value + "\">\n";
    }
	if (form.input16.value != "") {
      form.story.value +="<meta http-equiv=\"Pragma\" content=\"" +
      form.input16.options[form.input16.selectedIndex].value + "\">\n";
    }
	if (form.input17.value != ""){
		form.story.value +="<meta http-equiv=\"charset\" content=\"" +
		form.input17.options[form.input17.selectedIndex].value + "\">\n";
	}
	if (form.input18.value != ""){
		form.story.value +="<meta http-equiv=\"X-UA-Compatible\" content=\"" +
		form.input18.options[form.input18.selectedIndex].value + "\"/>\n";
	}
	if (form.input19.value != "") {
      form.story.value +="<meta http-equiv=\"refresh\" content=\"" +
      form.input19.value + "\">\n";
	}
  }
}
//  End -->
$(document).ready(function() {
   		/* For zebra striping */
        $("table tr:nth-child(odd)").addClass("odd-row");
		/* For cell text alignment */
		$("table td:first-child, table th:first-child").addClass("first");
		/* For removing the last border */
		$("table td:last-child, table th:last-child").addClass("last");
 
});
$(document).ready(function() {
    $('#copy').click(function(){
		var output = document.getElementById(copy).value;
		ShowLMCButton(output);
		
		
	});
});