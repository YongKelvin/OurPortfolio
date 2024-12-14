// Function to toggle the visibility of the contact number
function toggleContact() {
    const contactNumber = document.getElementById('contact-number');
    contactNumber.style.display = contactNumber.style.display === 'block' ? 'none' : 'block';
}

// Function to open the image in a popup with effect
function openImage(imageNumber) {
    const popup = document.getElementById('popup');
    const popupImage = document.getElementById('popup-image');
    
    // Set the source of the image based on the button clicked
    popupImage.src = `images/Bio${imageNumber}.jpg`;
    
    // Show the popup
    popup.style.display = 'flex';
}

// Function to close the popup
function closeImage() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
}

// Play music when the second page loads
document.addEventListener("DOMContentLoaded", () => {
    const backgroundMusic = document.getElementById("background-music");
    backgroundMusic.volume = 0.2; // Set low volume
    backgroundMusic.play(); // Play music
});

// Function to navigate back to the first page and stop music
function goBack() {
    const backgroundMusic = document.getElementById("background-music");
    backgroundMusic.pause(); // Stop the music
    backgroundMusic.currentTime = 0; // Reset music to the beginning
    location.href = 'index.html'; // Navigate back to the first page
}
