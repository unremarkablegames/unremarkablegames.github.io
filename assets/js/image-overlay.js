document.addEventListener('DOMContentLoaded', function() {
  // Get all game screenshots
  const screenshots = document.querySelectorAll('.game-screenshot');
  
  // Create overlay elements
  const overlay = document.createElement('div');
  overlay.className = 'image-overlay';
  
  const overlayContent = document.createElement('div');
  overlayContent.className = 'overlay-content';
  
  const overlayImage = document.createElement('img');
  overlayImage.className = 'overlay-image';
  
  const closeButton = document.createElement('span');
  closeButton.className = 'overlay-close';
  closeButton.innerHTML = '&times;';
  
  // Append elements to DOM
  overlayContent.appendChild(overlayImage);
  overlayContent.appendChild(closeButton);
  overlay.appendChild(overlayContent);
  document.body.appendChild(overlay);
  
  // Add click event to each screenshot
  screenshots.forEach(function(screenshot) {
    screenshot.addEventListener('click', function() {
      // Get the image src but change webp to png
      const imgSrc = this.getAttribute('src').replace('.webp', '.png');
      
      // First, set the image source with onload handler
      overlayImage.onload = function() {
        // After image is loaded, show the overlay
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling when overlay is active
        // Remove the onload handler to avoid memory leaks
        overlayImage.onload = null;
      };
      
      // Set the source (this triggers onload when image is loaded)
      overlayImage.setAttribute('src', imgSrc);
    });
  });
  
  // Close overlay when clicking close button or outside the image
  closeButton.addEventListener('click', closeOverlay);
  overlay.addEventListener('click', function(e) {
    if (e.target === overlay) {
      closeOverlay();
    }
  });
  
  // Close overlay when ESC key is pressed
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && overlay.classList.contains('active')) {
      closeOverlay();
    }
  });
  
  function closeOverlay() {
    overlay.classList.remove('active');
    document.body.style.overflow = ''; // Restore scrolling
  }
}); 