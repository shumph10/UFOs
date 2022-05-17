//import the data from the data.js
const tableData= data;
// reference the HTML table using d3
var tbody = d3.select("tbody");

//define the funct to iterate through the data and append it to a table row
    // pass the data as a param bc thats the var name we used to import our data
function buildTable(data) {
    //clear existing table data so that each filter is based only on newest user input,
    //and existing data isnt duplicated upon newest insertion
    tbody.html("");
        //clears data by ref the table, point JS to the table in the HTML page
        //and replaces whats there with an empty string
    
    //add the forEach function
    data.forEach((dataRow) => {
    //obj being ref for data imported.forEach to create a for loop \
    //((param/arg thatll represent each row of data as we iterate through the array))
    
    //create a variable to append a row to the table body
        //use let to make a local variable rather than global
        let row = tbody.append("tr");
            //tells  JS to find the <tbody> tag in HTML and add a table row "tr"

        //loop through data rows
        Object.values(dataRow).forEach((val) => {
            //put each sighting (one obj from the array) into (()) one row aka the dataRow
            //forEach - create for loop where ((val)) we want one obj per row
    
        //append each value of the obj into a cell in the table
    
        //create a variable to append data to the table
        let cell = row.append("td");
        //set up action of appending data into a table data tag<td>
        cell.text(val);
            //this variable holds only the value from the obj
                //(by extracting only the text of the value)
        }
    );
    });
}

    
