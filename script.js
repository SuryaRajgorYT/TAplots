window.addEventListener('DOMContentLoaded', (event) => {
  const mapContainer = document.getElementById('map-container');
  const map = document.getElementById('map');
  const video = document.getElementById('fullscreen-video');

  mapContainer.style.display = 'none';

  video.play();

  setTimeout(() => {
    video.pause();
    video.currentTime = 0;
    mapContainer.style.display = 'block';
  }, 5000);

  video.addEventListener('ended', () => {
    mapContainer.style.display = 'block';
  });
  // Add markers and popups
  const plots = [
    { 
      id: 1, 
      x: 0.1655, 
      y: 0.15, 
      description: "Plot 1",
      owner: "Tulsi Aradhya Holida Resort",
      bookingDate: "N/A",
      status: "available"
    }, 
    { 
      id: 25, 
      x: 0.195, 
      y: 0.159, 
      description: "Plot 2",
      owner: "Tulsi Aradhya Holida Resort",
      bookingDate: "N/A",
      status: "booked"
    }, 
    { 
      id: 11, 
      x: 0.15, 
      y: 0.81, 
      description: "Plot 11",
      owner: "Manoj Borisagar જુનાગઢ",
      bookingDate: "2023-06-20",
      status: "registered"
    },
    { 
      id: 12, 
      x: 0.15, 
      y: 0.31, 
      description: "Plot 11",
      owner: "Manoj Borisagar જુનાગઢ",
      bookingDate: "2023-06-20",
      status: "booked"
    },
    { 
      id: 13, 
      x: 0.35, 
      y: 0.31, 
      description: "Plot 11",
      owner: "Manoj Borisagar જુનાગઢ",
      bookingDate: "2023-06-20",
      status: "available"
    },
    { 
      id: 24, 
      x: 0.249, 
      y: 0.19, 
      description: "Plot 24",
      owner: "Manoj Borisagar જુનાગઢ",
      bookingDate: "2023-06-20",
      status: "booked"
    },
    { 
      id: 81, 
      x: 0.51, 
      y: 0.30, 
      description: "Plot 81",
      owner: "Chirag Jadav",
      bookingDate: "2023-06-18",
      status: "booked"
    },
    { 
      id: 111, 
      x: 0.85, 
      y: 0.30, 
      description: "Plot 81",
      owner: "Chirag Jadav",
      bookingDate: "2023-06-18",
      status: "available"
    },
    // Add more plot objects as needed
  ];

  plots.forEach(plot => {
    const popup = document.createElement('div');
    popup.className = 'popup';
    popup.innerHTML = `
      <h3>${plot.description}</h3>
      <p><strong>Owner:</strong> ${plot.owner}</p>
      <p><strong>Booking Date:</strong> ${plot.bookingDate}</p>
      <p><strong>Status:</strong> <span class="status ${plot.status}">${plot.status}</span></p>
    `;

    const marker = document.createElement('div');
    marker.className = 'marker';

    // Set the appropriate class based on the plot's status
    if (plot.status === 'available') {
      marker.classList.add('available');
    } else if (plot.status === 'booked') {
      marker.classList.add('booked');
    } else if (plot.status === 'registered') {
      marker.classList.add('registered');
    }

    const markerLeft = plot.x * 100 + '%';
    const markerTop = plot.y * 100 + '%';

    marker.style.left = markerLeft;
    marker.style.top = markerTop;

    // Create and assign the marker number based on the plot ID
    const markerNumber = document.createElement('span');
    markerNumber.className = 'marker-number';
    markerNumber.textContent = plot.id;
    marker.appendChild(markerNumber);

    marker.addEventListener('mouseover', () => {
      const popup = marker.querySelector('.popup');
      popup.style.display = 'block';
      marker.style.zIndex = '10'; // Increase the marker's z-index on mouseover
    });

    marker.addEventListener('mouseout', () => {
      const popup = marker.querySelector('.popup');
      popup.style.display = 'none';
      marker.style.zIndex = '0'; // Reset the marker's z-index on mouseout
    });

    marker.appendChild(popup);
    map.appendChild(marker);

    // Call the makePopupMovable function to make the popup movable
    makePopupMovable(popup);
  });

  $(document).ready(function() {
    $('.toggle-menu').click(function() {
      $('.menu').slideToggle();
    });
  });

  function makePopupMovable(popup) {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    const header = popup.querySelector("h3");

    // Function to handle mouse down event
    function mouseDown(e) {
      e = e || window.event;
      e.preventDefault();
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      document.onmousemove = elementDrag;
    }

    // Function to handle dragging of the popup
    function elementDrag(e) {
      e = e || window.event;
      e.preventDefault();
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;

      // Adjust the position based on the rotation angle
      const rotation = getRotationAngle(popup);
      const offsetX = Math.cos(rotation) * pos1 - Math.sin(rotation) * pos2;
      const offsetY = Math.sin(rotation) * pos1 + Math.cos(rotation) * pos2;

      // Set the new position of the popup
      popup.style.top = `${popup.offsetTop - offsetY}px`;
      popup.style.left = `${popup.offsetLeft - offsetX}px`;
    }

    // Function to get the rotation angle in radians
    function getRotationAngle(element) {
      const transform = window.getComputedStyle(element).getPropertyValue("transform");
      const matrix = transform.match(/^matrix\((.+)\)$/);

      if (matrix) {
        const values = matrix[1].split(",");
        if (values.length === 6) {
          const a = parseFloat(values[0]);
          const b = parseFloat(values[1]);
          const angle = Math.round(Math.atan2(b, a) * (180 / Math.PI));
          return angle * (Math.PI / 180); // Convert angle to radians
        }
      }
      return 0; // Default rotation angle (no rotation)
    }

    // Attach mouse event listeners to the header or any other element you want to use as the handle for dragging
    header.addEventListener("mousedown", mouseDown);

    // Function to handle mouse up event
    function closeDragElement() {
      // Remove the mouse event listeners
      document.onmouseup = null;
      document.onmousemove = null;

      // Add mouse event listeners again after a brief delay
      setTimeout(() => {
        header.addEventListener("mousedown", mouseDown);
      }, 200);
    }

    // Touch event listeners for mobile devices
    header.addEventListener("touchstart", touchStart);
    header.addEventListener("touchmove", touchMove);
    header.addEventListener("touchend", touchEnd);

    let touchStartX = 0;
    let touchStartY = 0;

    // Function to handle touch start event
    function touchStart(e) {
      const touch = e.touches[0] || e.changedTouches[0];
      touchStartX = touch.clientX;
      touchStartY = touch.clientY;
    }

    // Function to handle touch move event
    function touchMove(e) {
      if (e.touches.length > 1) return; // Ignore multi-touch gestures

      const touch = e.touches[0] || e.changedTouches[0];
      const touchCurrentX = touch.clientX;
      const touchCurrentY = touch.clientY;
      const offsetX = touchCurrentX - touchStartX;
      const offsetY = touchCurrentY - touchStartY;
      touchStartX = touchCurrentX;
      touchStartY = touchCurrentY;

      // Adjust the position based on the rotation angle
      const rotation = getRotationAngle(popup);
      const cosRotation = Math.cos(rotation);
      const sinRotation = Math.sin(rotation);
      const adjustedOffsetX = cosRotation * offsetX - sinRotation * offsetY;
      const adjustedOffsetY = sinRotation * offsetX + cosRotation * offsetY;

      // Set the new position of the popup
      popup.style.top = `${popup.offsetTop + adjustedOffsetY}px`;
      popup.style.left = `${popup.offsetLeft + adjustedOffsetX}px`;
    }

    // Function to handle touch end event
    function touchEnd() {
      // Add touch event listeners again after a brief delay
      setTimeout(() => {
        header.addEventListener("touchstart", touchStart);
        header.addEventListener("touchmove", touchMove);
        header.addEventListener("touchend", touchEnd);
      }, 200);
    }
  }

// Existing JavaScript code

var isMobile = window.innerWidth < 800; // Check if the device width is less than 768px (adjust the breakpoint as needed)

marker.on('click', function() {
  if (marker.isPopupOpen()) {
    marker.closePopup();
  } else {
    var popupOptions = {
      offset: isMobile ? [0, -30] : [0, 0], // Adjust the offset for mobile devices
      autoPan: isMobile ? true : false // Enable autoPan on mobile devices
    };
    marker.openPopup(popupOptions);
  }
});


});