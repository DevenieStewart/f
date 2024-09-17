// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
    // Get the overlay and overlay image elements
    const overlay = document.getElementById('overlay');
    const overlayImg = document.getElementById('overlayImg');

    // Get all book images
    const books = document.querySelectorAll('.book-img');

    // Function to open the overlay with the clicked image
    function openOverlay(event) {
        // Set the src of the overlay image to the clicked image's src
        overlayImg.src = event.target.src;
        // Display the overlay
        overlay.classList.add('show');
    }

    // Function to close the overlay
    function closeOverlay() {
        // Hide the overlay
        overlay.classList.remove('show');
    }

    // Add click event listeners to each book image
    books.forEach(book => {
        book.addEventListener('click', openOverlay);
    });

    // Add click event listener to the overlay to close it when clicked
    overlay.addEventListener('click', closeOverlay);
});
