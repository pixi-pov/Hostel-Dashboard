function togglePassword() {
    const passwordField = document.getElementById('staffPassword');
    const toggleIcon = document.getElementById('togglePassword');
    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        toggleIcon.classList.remove('fa-eye');
        toggleIcon.classList.add('fa-eye-slash');
    } else {
        passwordField.type = 'password';
        toggleIcon.classList.remove('fa-eye-slash');
        toggleIcon.classList.add('fa-eye');
    }
}
document.addEventListener('DOMContentLoaded', function() {
    const resolvedCount = document.getElementById('resolvedCount');
    const inProgressCount = document.getElementById('inProgressCount');
    const pendingCount = document.getElementById('pendingCount');
    const totalComplaints = document.getElementById('totalComplaints');

    function updateTotalComplaints() {
        const total = parseInt(resolvedCount.value || 0) + parseInt(inProgressCount.value || 0) + parseInt(pendingCount.value || 0);
        totalComplaints.value = total;
    }

    resolvedCount.addEventListener('input', updateTotalComplaints);
    inProgressCount.addEventListener('input', updateTotalComplaints);
    pendingCount.addEventListener('input', updateTotalComplaints);
});
// edit-staff.js

function saveChanges() {
    // Simulate a successful save operation
    showPopup();
}

function showPopup() {
    const popup = document.getElementById('successPopup');
    popup.style.display = 'block';

    // Automatically close the popup after 3 seconds
    setTimeout(closePopup, 3000);
}

function closePopup() {
    const popup = document.getElementById('successPopup');
    popup.style.display = 'none';
}

function togglePassword() {
    const passwordField = document.getElementById('staffPassword');
    const toggleIcon = document.getElementById('togglePassword');

    if (passwordField.type === "password") {
        passwordField.type = "text";
        toggleIcon.classList.remove('fa-eye');
        toggleIcon.classList.add('fa-eye-slash');
    } else {
        passwordField.type = "password";
        toggleIcon.classList.remove('fa-eye-slash');
        toggleIcon.classList.add('fa-eye');
    }
}
// edit-staff.js

function saveChanges() {
    // Simulate a successful save operation
    showPopup();
}

function showPopup() {
    const popup = document.getElementById('successPopup');
    popup.style.display = 'block';

    // Automatically close the popup after 3 seconds
    setTimeout(closePopup, 3000);
}

function closePopup() {
    const popup = document.getElementById('successPopup');
    popup.style.display = 'none';
}

function togglePassword() {
    const passwordField = document.getElementById('staffPassword');
    const toggleIcon = document.getElementById('togglePassword');

    if (passwordField.type === "password") {
        passwordField.type = "text";
        toggleIcon.classList.remove('fa-eye');
        toggleIcon.classList.add('fa-eye-slash');
    } else {
        passwordField.type = "password";
        toggleIcon.classList.remove('fa-eye-slash');
        toggleIcon.classList.add('fa-eye');
    }
}

// Update file name display
document.getElementById('staffProfilePicture').addEventListener('change', function() {
    const fileName = this.files[0] ? this.files[0].name : 'No file chosen';
    document.getElementById('fileName').textContent = fileName;
});



