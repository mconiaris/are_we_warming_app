console.log('main.js linked');

$(document).ready(function(){

  g = new Dygraph(

    // containing div
    document.getElementById("graphdiv"),

    // CSV or path to a CSV file.
    "/data/debt_table.CSV",
    { labels: [
      "Fiscal Year",
      "Receipts In Current Dollars",
      "Outlays In Current Dollars",
      "Surplus or Deficit (-) In Current Dollars",
      "Receipts In Constant (FY2009 Dollars)",
      "Outlays In Constant (FY2009 Dollars)",
      "Surplus or Deficit (-) In Constant (FY2009 Dollars)",
      "Addendum: Composite Deflator",
      "Receipts As Percentages of GDP",
      "Outlays As Percentages of GDP",
      "Surplus or Deficit (-) As Percentages of GDP" ]}
  );

});
