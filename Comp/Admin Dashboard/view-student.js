// Retrieve student ID from URL parameters
function getStudentIdFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id');
}

// Populate student information based on ID
function populateStudentInfo(studentId) {
    // Fetch student details based on studentId (mocked here)
    document.getElementById('studentId').textContent = studentId;
    document.getElementById('studentName').textContent = 'Ashish Raj'; // Example data
    document.getElementById('roomNo').textContent = '516'; // Example data
    document.getElementById('branch').textContent = 'Computer Science'; // Example data
    document.getElementById('contact').textContent = '+911234567890'; // Example data
    document.getElementById('admissionDate').textContent = '2024-09-01 12:00'; // Example data
}

document.addEventListener('DOMContentLoaded', () => {
    const studentId = getStudentIdFromURL();
    if (studentId) {
        populateStudentInfo(studentId);
    }
    document.querySelector('.btn-back').addEventListener('click', () => {
        window.history.back();
    });
});
