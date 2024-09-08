// Function to open the Add Warden popup
function openAddWardenPopup() {
    const popup = document.getElementById('addwardenPopup'); // Select the specific popup element
    popup.style.display = 'block'; // Show the popup
  
    // Optional: Reset form fields when opening
    const form = popup.querySelector('form');
    if (form) {
      form.reset();
    }
  
    // Display joining date dynamically
    const admissionDateDisplay = popup.querySelector('.admission-date-display');
    const currentDate = new Date().toISOString().slice(0, 10); // Get current date in YYYY-MM-DD format
    if (admissionDateDisplay) {
      admissionDateDisplay.textContent = `Joining Date: ${currentDate}`;
    }
  
    // Display warden ID dynamically
    const wardenIdDisplay = popup.querySelector('.warden-id-display');
    const generatedWardenId = generateWardenId(); // Function to generate the warden ID
    if (wardenIdDisplay) {
      wardenIdDisplay.textContent = `Warden ID: ${generatedWardenId}`;
    }
}
  
// Function to generate a unique warden ID (starting from WDN002)
function generateWardenId() {
    const baseId = 3; // Starting from WDN002
    const lastId = getLastWardenId(); // Retrieve last warden ID from storage
    const newIdNumber = (lastId ? parseInt(lastId.slice(3)) + 1 : baseId); // Increment last ID or start from baseId
    const newId = `WDN${newIdNumber.toString().padStart(3, '0')}`; // Format as WDNXXX
    return newId;
}
  
// Function to get the last warden ID (placeholder for actual implementation)
function getLastWardenId() {
    // Placeholder function to return the last warden ID from storage or database
    // For example, return "WDN002"; // Replace with actual retrieval logic
    return null; // Simulate no previous ID
}
  
// Function to close the Add Warden popup
function closePopup() {
    document.getElementById('addwardenPopup').style.display = 'none';
}
  
// Function to close the popup when clicking outside of it
window.addEventListener('click', function(event) {
    const popup = document.getElementById('addwardenPopup');
    if (event.target === popup) {
        closePopup();
    }
});
