// Toggle the editability of a specific input field
function toggleEdit(field) {
    var input = document.getElementById(field);
    if (input.readOnly) {
        input.readOnly = false; // Make the input field editable
        input.focus(); // Set focus on the input field
    } else {
        input.readOnly = true; // Make the input field read-only again
    }
}

// Handle form submission: Prevent default behavior and show the confirmation popup
document.getElementById('profile-form').onsubmit = function(event) {
    event.preventDefault(); // Prevent the form from submitting normally
    document.getElementById('popup').classList.add('show'); // Display the confirmation popup
};

// Handle the confirm button click: Hide the popup and show the success message
document.getElementById('confirm-btn').onclick = function() {
    document.getElementById('popup').classList.remove('show'); // Hide the confirmation popup
    document.getElementById('success-message').classList.add('show'); // Display the success message
    setTimeout(() => {
        document.getElementById('success-message').classList.remove('show'); // Hide the success message after 3 seconds
    }, 3000);
};

// Handle the cancel button click: Simply hide the confirmation popup
document.getElementById('cancel-btn').onclick = function() {
    document.getElementById('popup').classList.remove('show'); // Hide the confirmation popup
};

// Manually close the success message
function closeSuccessMessage() {
    document.getElementById('success-message').classList.remove('show'); // Hide the success message
}
