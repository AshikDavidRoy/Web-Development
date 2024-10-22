function createDynamicTable() {
    // Get the number of rows and columns from the input fields
    const numRows = parseInt(document.getElementById("numRows").value);
    const numCols = parseInt(document.getElementById("numCols").value);

    // Validate input
    if (isNaN(numRows) || numRows < 1 || isNaN(numCols) || numCols < 1) {
        alert("Please enter valid numbers for rows and columns.");
        return;
    }

    // Create the table element
    const table = document.createElement("table");

    // Create rows and cells
    for (let i = 0; i < numRows; i++) {
        const row = document.createElement("tr");
        for (let j = 0; j < numCols; j++) {
            const cell = document.createElement("td");
            cell.textContent = `Row ${i + 1}, Column ${j + 1}`; // Replace with your desired content
            row.appendChild(cell);
        }
        table.appendChild(row);
    }

    // Append the table to the container
    const tableContainer = document.getElementById("tableContainer");
    tableContainer.innerHTML = ""; // Clear previous table if any
    tableContainer.appendChild(table);
}