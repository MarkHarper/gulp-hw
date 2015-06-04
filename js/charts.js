var data = {
    // A labels array that can contain any sort of values
    labels: ['Total/Survived', 'Males/Survived', 'Females/Survived'],
    // Our series array that contains series objects or in this case series data arrays
    series: [
      [891, 579, 311],
      [342, 108, 230]
    ]
  };

  // Create a new line chart object where as first parameter we pass in a selector
  // that is resolving to our chart container element. The Second parameter
  // is the actual data object.
  new Chartist.Bar('.ct-chart', data);
