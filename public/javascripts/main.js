console.log('main.js linked');

$(document).ready(function(){

  g = new Dygraph(

    // containing div
    document.getElementById("graphdiv"),

    // CSV or path to a CSV file.
    "/data/usa_temps.csv"
  );

});
