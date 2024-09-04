// Wait for the entire page to load before executing the function
window.addEventListener('load', function() {
    // Hide the loader after a delay of 4 seconds
    setTimeout(function() {
        document.querySelector('.loader-wrapper').style.display = 'none'; // Hide the loader element
    }, 4000); // 4000 milliseconds
});