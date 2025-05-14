document.addEventListener("DOMContentLoaded", function () {
    console.log("Calendar script loaded...");
    // Load student details from localStorage
    document.getElementById("student-name").textContent = localStorage.getItem("studentName");
    document.getElementById("roll-number").textContent = localStorage.getItem("rollNumber");

    // Generate a simple calendar
    const calendar = document.getElementById("calendar");
    const daysInMonth = 30; // Example: 30 days
    const attendanceData = {}; // Store attendance data

    for (let day = 1; day <= daysInMonth; day++) {
        const dayElement = document.createElement("div");
        dayElement.textContent = day;
        dayElement.classList.add("calendar-day");

        // Add click event to toggle attendance
        dayElement.addEventListener("click", function () {
            if (attendanceData[day] === "Present") {
                attendanceData[day] = "Absent";
                dayElement.style.backgroundColor = "red";
            } else {
                attendanceData[day] = "Present";
                dayElement.style.backgroundColor = "green";
            }

            // Update today's status and percentage
            updateAttendanceStatus();
        });

        calendar.appendChild(dayElement);
    }

    function updateAttendanceStatus() {
        const totalDays = Object.keys(attendanceData).length;
        const presentDays = Object.values(attendanceData).filter(status => status === "Present").length;

        const percentage = totalDays > 0 ? (presentDays / totalDays) * 100 : 0;
        document.getElementById("attendance-percentage").textContent = `Attendance Percentage: ${percentage.toFixed(2)}%`;

        const today = new Date().getDate();
        const todayStatus = attendanceData[today] || "Absent";
        document.getElementById("today-status").textContent = todayStatus;
    }
});