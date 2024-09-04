// Function to open the popup
function openAddStaffPopup() {
    const popup = document.getElementById('addStaffPopup'); // Select the specific popup element
    popup.style.display = 'block'; // Show the popup
  
    // Optional: Reset form fields when opening
    const form = popup.querySelector('form');
    if (form) {
      form.reset();
    }
  
    // Display admission date dynamically
    const admissionDateDisplay = document.querySelector('.admission-date-display');
    const currentDate = new Date().toISOString().slice(0, 10); // Get current date in YYYY-MM-DD format
    if (admissionDateDisplay) {
      admissionDateDisplay.textContent = `Joining Date: ${currentDate}`;
    }
  
    // Display staff ID dynamically
    const staffIdDisplay = document.querySelector('.student-id-display');
    const generatedStaffId = generateStaffId(); // Function to generate the staff ID
    if (staffIdDisplay) {
      staffIdDisplay.textContent = `Staff ID: ${generatedStaffId}`;
    }
}
  
// Function to generate a unique staff ID (starting from STF002)
function generateStaffId() {
    const baseId = 2; // Starting from STF002
    const lastId = getLastStaffId(); // Retrieve last staff ID from storage
    const newIdNumber = (lastId ? parseInt(lastId.slice(3)) + 1 : baseId); // Increment last ID or start from baseId
    const newId = `STF${newIdNumber.toString().padStart(3, '0')}`; // Format as STFXXX
    return newId;
}
  
// Function to get the last staff ID from local storage
function getLastStaffId() {
    return localStorage.getItem('lastStaffId'); // Retrieve last staff ID from local storage
}

// Function to set the last staff ID in local storage
function setLastStaffId(id) {
    localStorage.setItem('lastStaffId', id); // Save new staff ID in local storage
}

// Function to close the popup
function closeAddStaffPopup() {
    const popup = document.getElementById('addStaffPopup'); // Select the specific popup element
    popup.style.display = 'none'; // Hide the popup
}
  
// Event listener for the close button
document.querySelector('#addStaffPopup .close').addEventListener('click', closeAddStaffPopup);
  
// Event listener to close the popup when clicking outside the content
window.addEventListener('click', function (event) {
    const popup = document.getElementById('addStaffPopup'); // Select the specific popup element
    if (event.target === popup) {
      closeAddStaffPopup();
    }
});
  
// Ensure the button for opening the popup has an event listener
document.getElementById('addStaffButton').addEventListener('click', openAddStaffPopup);

// Function to add new staff to the table
function addNewStaff() {
    const form = document.getElementById('addStaffForm');
    const staffId = document.querySelector('.student-id-display').textContent.split(': ')[1];
    const staffName = form.staffName.value;
    const staffRole = form.staffRole.value;
    const staffEmail = form.staffEmail.value;
    const staffPassword = form.staffPassword.value;
    const staffContact = form.staffContact.value;

    if (staffName && staffRole && staffEmail && staffPassword && staffContact) {
        const tableBody = document.querySelector('.staff-table tbody');
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${staffId}</td>
            <td>${staffName}</td>
            <td>${staffRole}</td>
            <td>${new Date().toISOString().slice(0, 10)}</td>
            <td>
                <a href="" class="table-btn-view"><i class="fas fa-eye"></i> View</a>
                <a href="#" class="table-btn-edit"><i class="fas fa-edit"></i> Edit</a>
                <a href="#" class="table-btn-delete"><i class="fas fa-trash"></i> Delete</a>
            </td>
        `;
        tableBody.appendChild(newRow);

        // Update the last staff ID in local storage
        setLastStaffId(staffId);

        closeAddStaffPopup();
    } else {
        alert('Please fill in all fields.');
    }
}

// Event listener for the form submission
document.getElementById('addStaffForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting normally
    addNewStaff();
});
