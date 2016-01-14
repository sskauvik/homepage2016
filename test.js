
 // Checking if JQuery is loaded

 $(function() {
 alert("Javascript test v.2 loaded!");
 });
 // Done checking 

 // Testing an object
 var SigurdSk = { "name": "Sigurd Skauvik",
				  "Favourite food": "Tacos",
				  "Age": "32",
				  "Country": "Norway ",
				 };
		 
 console.info("About me:", SigurdSk);
 // Done testing
 
 // Info to other developers
 
 console.info("Hi. This is a way to communicate between people who develop code to the page.");
  
 // Grouping objects. I had to write the group in a function using JQuery for it to work properly..
$(function() {
 console.group("Here is a group");
		console.log("test1");
		console.log("test2");
		console.log("test3");	
console.groupEnd();
});
 // Done grouping,

 