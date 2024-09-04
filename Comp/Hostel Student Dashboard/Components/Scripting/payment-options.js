// Show the appropriate payment details based on the selected payment method
function showPaymentDetails() {
    const method = document.getElementById('paymentMethod').value;

    // Hide all payment details sections initially
    document.getElementById('upiDetails').classList.add('hidden');
    document.getElementById('cardDetails').classList.add('hidden');
    document.getElementById('onlineBankingDetails').classList.add('hidden');
    
    const payButton = document.getElementById('payButton'); // Reference to the payment button

    // Display the relevant details section and enable the pay button
    if (method === 'upi') {
        document.getElementById('upiDetails').classList.remove('hidden');
        payButton.disabled = false;
    } else if (method === 'creditCard' || method === 'debitCard') {
        document.getElementById('cardDetails').classList.remove('hidden');
        payButton.disabled = false;
    } else if (method === 'onlineBanking') {
        document.getElementById('onlineBankingDetails').classList.remove('hidden');
        payButton.disabled = false;
    } else {
        payButton.disabled = true; // Disable the pay button if no valid method is selected
    }
}

// Verify the UPI ID format and display a message
function verifyUPI() {
    const upiId = document.getElementById('upiId').value;
    const messageElement = document.getElementById('verificationMessage');
    
    // Check if the UPI ID contains '@', indicating a valid format
    if (upiId.includes('@')) {
        messageElement.textContent = 'UPI ID verified successfully!';
        messageElement.classList.add('success');
        messageElement.classList.remove('error');
    } else {
        messageElement.textContent = 'Please enter a valid UPI ID!';
        messageElement.classList.add('error');
        messageElement.classList.remove('success');
    }
    messageElement.classList.remove('hidden'); // Show the verification message
}

// Process the payment: Show the payment modal
function processPayment(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    document.getElementById('paymentModal').style.display = 'block'; // Display the payment modal
}

// Close the payment modal
function closeModal() {
    document.getElementById('paymentModal').style.display = 'none'; // Hide the payment modal
}

// Format the expiry date input as MM/YY
document.getElementById('expiryDate').addEventListener('input', function(e) {
    let value = e.target.value.replace(/\D/g, ''); // Remove non-digit characters
    if (value.length > 2) {
        value = value.slice(0, 2) + '/' + value.slice(2); // Insert a slash after the first two digits
    }
    e.target.value = value; // Update the input field with the formatted value
});

// Limit the CVV input to 3 digits
document.getElementById('cvv').addEventListener('input', function(e) {
    e.target.value = e.target.value.replace(/\D/g, '').slice(0, 3); // Keep only the first three digits
});
