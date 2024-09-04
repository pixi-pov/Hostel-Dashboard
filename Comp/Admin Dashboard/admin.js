// Function to search by Name or ID
function searchByNameOrId() {
    const searchValue = document.getElementById('searchStudent').value.trim().toLowerCase();
    const tableBody = document.getElementById('studentTableBody');
    const rows = tableBody.getElementsByTagName('tr');

    for (let i = 0; i < rows.length; i++) {
        const nameCell = rows[i].getElementsByTagName('td')[1]; // Name column
        const idCell = rows[i].getElementsByTagName('td')[0];   // ID column

        if (nameCell || idCell) {
            const nameText = nameCell.textContent.toLowerCase();
            const idText = idCell.textContent.toLowerCase();

            // Show row if search value matches either name or ID
            rows[i].style.display = (nameText.includes(searchValue) || idText.includes(searchValue)) ? '' : 'none';
        }
    }
}

// Function to reset the search filters
function resetSearch() {
    const tableBody = document.getElementById('studentTableBody');
    const rows = tableBody.getElementsByTagName('tr');

    // Show all rows and clear the search input
    for (let i = 0; i < rows.length; i++) {
        rows[i].style.display = '';
    }
    document.getElementById('searchStudent').value = '';
}

// Function to handle delete action
function deleteStudent(event) {
    if (event.target.classList.contains('btn-delete')) {
        const row = event.target.closest('tr');
        if (confirm('Are you sure you want to delete this student?')) {
            row.remove();
        }
    }
}

// Function to validate a 10-digit contact number
function validateContactNumber(contact) {
    const contactPattern = /^\d{10}$/;
    return contactPattern.test(contact);
}

// Function to add a new student to the table
function addStudent() {
    const name = document.getElementById('studentName').value.trim();
    const roomNo = document.getElementById('roomNo').value.trim();
    const branch = document.getElementById('branch').value;
    const contact = document.getElementById('contact').value.trim();
    const admissionDate = getTodayDate();
    const studentId = formatStudentId(currentStudentId);

    // Validate and add new student
    if (name && roomNo && branch && validateContactNumber(contact)) {
        const tableBody = document.getElementById('studentTableBody');
        const newRow = tableBody.insertRow();

        newRow.innerHTML = `
            <td>${studentId}</td>
            <td>${name}</td>
            <td>${roomNo}</td>
            <td>${branch}</td>
            <td>${contact}</td>
            <td>${admissionDate}</td>
            <td>
                <a href="view-student.html" class="btn-view"><i class="fas fa-eye"></i> View</a>
                <a href="edit-student.html" class="btn-edit"><i class="fas fa-edit"></i> Edit</a>
                <button class="btn-delete"><i class="fas fa-trash"></i> Delete</button>
            </td>
        `;

        currentStudentId++;
        document.getElementById('addStudentPopup').style.display = 'none';
        clearAddStudentForm();
    } else {
        alert('Please enter a valid 10-digit contact number.');
    }
}

// Function to get today's date in YYYY-MM-DD format
function getTodayDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

// Function to format student ID with leading zeros
function formatStudentId(id) {
    return String(id).padStart(3, '0');
}

// Function to clear the Add Student form
function clearAddStudentForm() {
    document.getElementById('studentName').value = '';
    document.getElementById('roomNo').selectedIndex = 0;
    document.getElementById('branch').selectedIndex = 0;
    document.getElementById('contact').value = '';
}

// Function to filter students by branch
function filterByBranch() {
    const selectedBranch = document.getElementById('statusFilter').value;
    const tableBody = document.getElementById('studentTableBody');
    const rows = tableBody.getElementsByTagName('tr');

    for (let i = 0; i < rows.length; i++) {
        const branchCell = rows[i].getElementsByTagName('td')[3]; // Branch column

        if (branchCell) {
            const branchText = branchCell.textContent;

            // Show row if branch matches or no branch filter selected
            rows[i].style.display = (selectedBranch === '' || branchText === selectedBranch) ? '' : 'none';
        }
    }
}

// Function to initialize the UI
function initializeUI() {
    const addStudentPopup = document.getElementById('addStudentPopup');
    const addStudentButton = document.getElementById('addStudentButton');
    const cancelButton = document.getElementById('cancelButton');
    const addStudentForm = document.getElementById('addStudentForm');
    const admissionDateDisplay = document.getElementById('admissionDateDisplay');
    const studentIdDisplay = document.getElementById('studentIdDisplay');
    const statusFilter = document.getElementById('statusFilter');

    // Show the add student popup
    addStudentButton.onclick = function () {
        addStudentPopup.style.display = 'block';
        admissionDateDisplay.textContent = `Admission Date: ${getTodayDate()}`;
        studentIdDisplay.textContent = `Student ID: ${formatStudentId(currentStudentId)}`;
    };

    // Hide the add student popup
    cancelButton.onclick = function () {
        addStudentPopup.style.display = 'none';
        clearAddStudentForm();
    };

    // Handle add student form submission
    addStudentForm.onsubmit = function (event) {
        event.preventDefault();
        addStudent();
    };

    // Close the popup if clicking outside of it
    window.onclick = function (event) {
        if (event.target === addStudentPopup) {
            addStudentPopup.style.display = 'none';
            clearAddStudentForm();
        }
    };

    // Attach event listeners
    document.getElementById('studentsTable').addEventListener('click', deleteStudent);
    statusFilter.addEventListener('change', filterByBranch);
}

// Manage room availability and populate dropdown
const rooms = [
    { number: "Assign Room", full: false },
    { number: "101", full: false },
    { number: "102", full: true },
    { number: "103", full: false },
    { number: "104", full: true },
    { number: "105", full: false },
    { number: "106", full: true },
    { number: "107", full: false },
    { number: "108", full: false },
];

// Populate the room dropdown dynamically
function populateRoomDropdown() {
    const roomDropdown = document.getElementById('roomNo');
    roomDropdown.innerHTML = '';

    rooms.forEach(room => {
        const option = document.createElement('option');
        option.value = room.number;
        option.textContent = room.full ? `${room.number} (Full)` : room.number;
        option.disabled = room.full;
        roomDropdown.appendChild(option);
    });
}

// Initialize the UI and functionalities
document.addEventListener('DOMContentLoaded', function () {
    populateRoomDropdown();
    initializeUI();
});

// Event listeners for search functionality
document.getElementById('searchButton').addEventListener('click', searchByNameOrId);
document.getElementById('resetButton').addEventListener('click', resetSearch);

// Initialize the current student ID
let currentStudentId = 3; // Start student ID from 003
