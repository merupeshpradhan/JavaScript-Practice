const images = [
  "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/3593922/pexels-photo-3593922.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/1805053/pexels-photo-1805053.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&w=600",
];

const img = document.getElementById("carouselImg");
let currentIndex = 0;

// Set the initial image when the page loads
function updateImage() {
  img.src = images[currentIndex];
}

function previousImg() {
  // Loop back to the last image if at the beginning
  if (currentIndex === 0) {
    currentIndex = images.length - 1;
  } else {
    currentIndex--;
  }
  updateImage();
}

function nextImg() {
  // Loop back to the first image if at the end
  if (currentIndex === images.length - 1) {
    currentIndex = 0;
  } else {
    currentIndex++;
  }
  updateImage();
}

// Initialize the first image on load
updateImage();