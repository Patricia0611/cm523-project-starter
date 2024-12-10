document.addEventListener('DOMContentLoaded', () => {
    // Get buttons and alert box
    const okButton = document.getElementById('ok-button');
    const alertBox = document.getElementById('custom-alert');
    const closeAlertButton = document.getElementById('close-alert');

    // Ensure alert box is hidden initially
    alertBox.style.display = 'none';

    // Ensure the close button displays the correct text
    closeAlertButton.textContent = 'Close';

    // Add event listener for the OK button
    okButton.addEventListener('click', () => {
        // Check if a radio button is selected
        const selected = document.querySelector('input[name="anxiety"]:checked');

        if (!selected) {
            // Show the alert box if no option is selected
            alertBox.style.display = 'flex';
        } else {
            // Redirect to the corresponding page
            const value = selected.value;
            window.location.href = `${value}.html`;
        }
    });

    // Add event listener for the Close button
    closeAlertButton.addEventListener('click', () => {
        alertBox.style.display = 'none'; // Hide the alert box
    });
});
