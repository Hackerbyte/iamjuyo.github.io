const noButton = document.querySelector('.no-btn');
const gifContainer = document.querySelector('.images');
const container = document.querySelector('.container');

// Function to show a random GIF
function showRandomGif() {
    const gifs = gifContainer.querySelectorAll('.gif');
    gifs.forEach(gif => gif.style.display = 'none'); // Hide all GIFs
    const randomGif = gifs[Math.floor(Math.random() * gifs.length)];
    randomGif.style.display = 'block'; // Show a random GIF
    gifContainer.style.display = 'flex'; // Make the container visible
}

// Make the "No" button move randomly within the container
noButton.addEventListener('mouseover', () => {
    const containerRect = container.getBoundingClientRect();
    const buttonRect = noButton.getBoundingClientRect();

    // Calculate boundaries
    const maxX = containerRect.width - buttonRect.width;
    const maxY = containerRect.height - buttonRect.height;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    noButton.style.position = 'absolute';
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
});

// Show a random GIF when the "No" button is clicked
noButton.addEventListener('click', () => {
    showRandomGif();
});