// jQuery baby!
$(function() {
 alert("Javascript test v.3 loaded!");
 $('li:even').addClass('highlight');
  });
  
$(function() {

		function buildACat() {
			var catName = "Mr. Tibbles";
			function catFactory() {
			
			
			alert(catName);
			}
		catFactory();
		}
	$('#buildcat').click(function() {
		buildACat();
	});

	
});


 
 
