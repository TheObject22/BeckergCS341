/*
 * viz.js
 *
 * Defines:
 * - The data to be visualized in the chart.
 * - The options for the look of the chart to be drawn.
 * - How to draw the chart.
 *
 * @author: Tanya L. Crenshaw
 * @author: Garrett Becker
 * @since: Jan 6, 2015
 */

google.load('visualization', '1', {packages: ['corechart']});

google.setOnLoadCallback(vizInit);
var data;
var views = {};
var totals = {};
var chart;
var year = [2013, 2014];
var options = {};

function vizInit() {
	// Create a new viz object using the google API -- specifically,                                                      // we are going to make a column chart inside the div called ex0                                                   
	// in the html file.                                                                                                  chart = new google.visualization.ColumnChart(document.getElementById('ex0'));
	chart = new 
	google.visualization.ColumnChart(document.getElementById('ex0'));
	var query = "SELECT Month, Year, AY, Sessions FROM 1P23PE35fnBA8V9Bf4u2C3jqqwr-O0i-s8pjrSEjD";

	var opts = {sendMethod: 'auto'};
	var queryObj = new google.visualization.Query('https://www.google.com/fusiontables/gvizdata?tq=', opts);

	queryObj.setQuery(query);
	queryObj.send(function(e) {
       
		data = e.getDataTable();

	// Log the raw response to the console.
      	console.log(data);
      	
      	var thisYear = "" + year[0] + "-" + year[1];
      	
      	views[thisYear] = new google.visualization.DataView(data);
		
		views[thisYear].setRows(views[thisYear].getFilteredRows([{column: 2, value: thisYear}]));

		views[thisYear].setColumns([0, 3]);

      	chart.draw(views[thisYear].toDataTable(), options);

	});
  }  
 function vizController(thisYear) {
	if (typeof (views[thisYear] != "undefined")) {
   		views[thisYear] = new google.visualization.DataView(data);
   		views[thisYear].setRows(views[thisYear].getFilteredRows([{column: 2, value: thisYear}]));
   		views[thisYear].setColumns([0, 3]);
	}
	else{
		thisYear = "" + year[0] + "-" + year[1];
	}
	chart.draw(views[thisYear].toDataTable(), options);
    console.log(thisYear);
	


};

    
    
    

