<script src="script.js"></script>

document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const studentName = document.getElementById('student-name').value;
    const attendanceStatus = document.getElementById('attendance-status').value;

    // Create a new row in the attendance records table
    const recordsBody = document.getElementById('records-body');
    const newRow = recordsBody.insertRow();

    const nameCell = newRow.insertCell(0);
    const statusCell = newRow.insertCell(1);

    nameCell.textContent = studentName;
    statusCell.textContent = attendanceStatus;

    // Clear the form
    document.getElementById('form').reset();
});
