// jQuery baby!
$(function() {
 alert("Javascript test v.2 loaded!");
 });
 
 $(function() {
  // By id
  // $('#first').addClass('highlight');
  
  // by element
  // $('p').addClass('highlight');
  
  // by class
  // $('.chosen').addClass('highlight');

  // Combinations
  //$('#first, .chosen').addClass('highlight');
  
  // Contains
  // $('li:contains("Three")').addClass('highlight');
  
  $('li:even').addClass('highlight');
  
  // Next, previous
  // $('li:contains("Three")').prev().addClass('highlight');
  
  // siblings, parent
  // $('li:contains("Three")').parent().addClass('highlight'); // selects the whole <ul>
  
  // $('li:nth-child(1)').addClass('highlight');
  
  // attributes
  // $('p[name="mySecondPara"]').addClass('highlight');
  
  // $('p[name!="mySecondPara"]').addClass('highlight');
  
  // $('p').not('[Name]').addClass('highlight');
  
  // $(':header').addClass('highlight');
  
  $('p:empty').text('Here is some text made i jQuery :)');
  
  });