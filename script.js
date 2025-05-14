document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Get input values
    const studentName = document.getElementById("student-name").value;
    const attendanceStatus = document.getElementById("attendance-status").value;

    // Create a new table row
    const newRow = document.createElement("tr");

    // Create table cells
    const nameCell = document.createElement("td");
    nameCell.textContent = studentName;

    const statusCell = document.createElement("td");
    statusCell.textContent = attendanceStatus;

    // Add class based on attendance status
    if (attendanceStatus === "Present") {
        statusCell.classList.add("present");
    } else if (attendanceStatus === "Absent") {
        statusCell.classList.add("absent");
    }

    // Append cells to the row
    newRow.appendChild(nameCell);
    newRow.appendChild(statusCell);

    // Append the row to the table body
    document.getElementById("records-body").appendChild(newRow);

    // Clear the form
    document.getElementById("form").reset();
});