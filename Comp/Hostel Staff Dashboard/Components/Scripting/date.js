document.addEventListener('DOMContentLoaded', () => {
    const dateInput = document.getElementById('date');
    const dateRangeSelect = document.getElementById('date-range');
    
    // Set today's date by default
    const today = new Date().toISOString().split('T')[0];
    dateInput.value = today;

    // Handle date range selection
    dateRangeSelect.addEventListener('change', () => {
        const selectedRange = dateRangeSelect.value;
        let date;

        switch (selectedRange) {
            case 'today':
                date = new Date();
                break;
            case 'yesterday':
                date = new Date();
                date.setDate(date.getDate() - 1);
                break;
            case '2days':
                date = new Date();
                date.setDate(date.getDate() - 2);
                break;
            case '3days':
                date = new Date();
                date.setDate(date.getDate() - 3);
                break;
            case '4days':
                date = new Date();
                date.setDate(date.getDate() - 4);
                break;
            case '5days':
                date = new Date();
                date.setDate(date.getDate() - 5);
                break;
            case '6days':
                date = new Date();
                date.setDate(date.getDate() - 6);
                break;
            case '7days':
                date = new Date();
                date.setDate(date.getDate() - 7);
                break;
            default:
                date = null;
        }

        if (date) {
            dateInput.value = date.toISOString().split('T')[0];
        }
    });
});
