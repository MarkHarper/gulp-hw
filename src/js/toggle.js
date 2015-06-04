var open = false;

$(document).ready(function() {
   $(".menu-toggle").click (function() {
      if (!open){
         $(".sidebar").animate({width: "+15%"}, 700);
         $(".graphs").animate({width: "85%"}, 700);
         open = true;
      } else {
        $(".sidebar").animate({width: "-15%"}, 700);
        $(".graphs").animate({width: "100%"}, 700);
         open = false;
      }
   });
});

var data = {
    // A labels array that can contain any sort of values
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    // Our series array that contains series objects or in this case series data arrays
    series: [
      [5, 2, 4, 2, 0]
    ]
  };

  // Create a new line chart object where as first parameter we pass in a selector
  // that is resolving to our chart container element. The Second parameter
  // is the actual data object.
  new Chartist.Line('.ct-chart', data);
