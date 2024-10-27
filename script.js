// Get references to the button and color code paragraph
const button = document.getElementById('colorButton');
const colorCodeDisplay = document.getElementById('colorCode');

// Function to generate a random hex color code
function getRandomColor() {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return `#${randomColor.padStart(6, '0')}`;
}

// Event listener for the button click
button.addEventListener('click', () => {
  const newColor = getRandomColor(); // Generate a new color
  document.body.style.backgroundColor = newColor; // Change body color
  colorCodeDisplay.textContent = `Color Code: ${newColor}`; // Update the color code display
});
