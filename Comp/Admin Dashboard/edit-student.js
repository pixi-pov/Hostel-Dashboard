// Retrieve student ID from URL parameters
function getStudentIdFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id');
}

// Populate form fields based on student ID
function populateEditForm(studentId) {
    // Fetch student details based on studentId (mocked here)
    document.getElementById('studentName').value = 'Ashish Raj'; // Example data
    document.getElementById('fathersName').value = 'Rajesh Kumar Verma'; // Example data
    document.getElementById('roomAllotted').value = '516'; // Example data
    document.getElementById('branch').value = 'Computer Science'; // Example data
    document.getElementById('email').value = 'ashish.raj@example.com'; // Example data
    document.getElementById('phone').value = '+911234567890'; // Example data
}

document.addEventListener('DOMContentLoaded', () => {
    const studentId = getStudentIdFromURL();
    if (studentId) {
        populateEditForm(studentId);
    }

    document.getElementById('editStudentForm').addEventListener('submit', (event) => {
        event.preventDefault();
        // Handle form submission logic
        alert('Student details updated successfully!');
    });


});
