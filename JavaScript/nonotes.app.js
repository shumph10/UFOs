function buildTable(data) {
    // First, clear out any existing data
    tbody.html("");
  
    // Next, loop through each object in the data
    // and append a row and cells for each value in the row
    data.forEach((dataRow) => {
      // Append a row to the table body
      let row = tbody.append("tr");
  
      // Loop through each field in the dataRow and add
      // each value as a table cell (td)
      Object.values(dataRow).forEach((val) => {
        let cell = row.append("td");
        cell.text(val);
        }
      );
    });
  }

//def a new function to handle button clicks so D3 can react and filter table
function handleClick() {
    //def a variable to hold date data, filtered and unfiltered
    let date = d3.select("#datetime").property("value");

    //set a default filter and save it to a new variable
    let filteredData = tableData
}
