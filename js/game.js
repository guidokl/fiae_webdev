// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Get the player div by its ID
  const player = document.getElementById('player_1');
  // Initialize position variables for left and top
  let left = 0;
  let top = 0;  
  // Set the number of pixels to move per key press
  const step = 10;
  // Track current sprite frame (1 to 8)
  let frame = 1;
  const maxFrame = 4;

  // Listen for keydown events on the whole document
  document.addEventListener('keydown', function(e) {
    // Check which arrow key was pressed and update position
    switch(e.key) {
      case 'ArrowLeft':
        left -= step; // same as 'left = left - step'
        break;
      case 'ArrowRight': 
        left += step; // same as 'left = left + step'
        break;
      case 'ArrowUp':
        top -= step; // same as 'top = top - step'
        break;
      case 'ArrowDown':
        top += step; // same as 'top = top + step'
        break;
      default:
        return; // Ignore other keys
    }
    // Apply the new position to the player div
    player.style.left = left + 'px';
    player.style.top = top + 'px';
    // Remove current sprite frame class
    player.classList.remove('p1_' + frame);
    // Increment frame, loop back to 1 after maxFrame
    if (frame < maxFrame) {
      frame = frame + 1;
    } else {
      frame = 1;
    }
    // Add new sprite frame class
    player.classList.add('p1_' + frame);
  });
});