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

//def a new function to handle button clicks so D3 can react and filter table
function handleClick() {
    //def a variable to hold date data, filtered and unfiltered
    let date = d3.select("#datetime").property("value");
        // tells d3 to look for the datetime tag in the HTMl, select the first one
        //grab the value info and hold it in the date variable

    //set a default filter and save it to a new variable
        //will be the original table data bc we want users to make their own search terms
        //set to original data, so they can filter from there
    let filteredData = tableData

    //if statement to check if date filter has been applied, 
    //if not return the default data
        //if (a date is entered) {
            //filter the default data to show only the date entered
        //}
    if (date) {
        filteredData = filteredData.filter(row => rowdatetime === date);
        //saying filter the tabledata to show only the rows where the date is 
        //strictly equal to the filtered date created
    };
    //call the build table function - want to build it with the filtered data
    //so use that variable as a parameter
    //needs to be inside the handle click button bc only need this to happen
    //if the table has been filtered (clicked)
    //& bc the filteredData is a local var - can only be called in the funct

    //Rebuild the table using the filtered data
    //NOTE: if no date was entered then the filteredData will be the orig tableData
    buildTable(filteredData);
}

//add code for D3 to listen for the event of the button click and let our above code
    //know that a button click has occured, and to use the handleClick() function
    //to address it
d3.selectAll("#filter-btn").on("click", handleClick)
    //selector string contains the id for the HTML tag well use to assign an 
        // unique button ID element, directs code to the filter button
        //telling D3 to execute our function when the button with the id is clicked

//call the buildTable funct again with the original data to ensure the
//table loads when the page is loaded, need the table there so people can see 
//the filter button

buildTable(tableData)

