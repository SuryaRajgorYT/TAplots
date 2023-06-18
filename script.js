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
  }, 500);

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
      id: 2, 
      x: 0.161, 
      y: 0.205, 
      description: "Plot 1",
      owner: "Tulsi Aradhya Holida Resort",
      bookingDate: "N/A",
      status: "available"
    }, 
    { 
      id: 3, 
      x: 0.158, 
      y: 0.265, 
      description: "Plot 1",
      owner: "Tulsi Aradhya Holida Resort",
      bookingDate: "N/A",
      status: "available"
    }, 
    { 
      id: 4, 
      x: 0.155, 
      y: 0.325, 
      description: "Plot 1",
      owner: "Tulsi Aradhya Holida Resort",
      bookingDate: "N/A",
      status: "available"
    }, 
    { 
      id: 5, 
      x: 0.155, 
      y: 0.383, 
      description: "Plot 1",
      owner: "Tulsi Aradhya Holida Resort",
      bookingDate: "N/A",
      status: "available"
    }, 
    { 
      id: 6, 
      x: 0.155, 
      y: 0.443, 
      description: "Plot 1",
      owner: "Tulsi Aradhya Holida Resort",
      bookingDate: "N/A",
      status: "available"
    }, 
    { 
      id: 7, 
      x: 0.152, 
      y: 0.505, 
      description: "Plot 1",
      owner: "Tulsi Aradhya Holida Resort",
      bookingDate: "N/A",
      status: "available"
    }, 
    { 
      id: 8, 
      x: 0.152, 
      y: 0.570, 
      description: "Plot 1",
      owner: "Tulsi Aradhya Holida Resort",
      bookingDate: "N/A",
      status: "available"
    }, 
    { 
      id: 9, 
      x: 0.152, 
      y: 0.697, 
      description: "Plot 1",
      owner: "Tulsi Aradhya Holida Resort",
      bookingDate: "N/A",
      status: "booked"
    }, 
    { 
      id: 10, 
      x: 0.152, 
      y: 0.758, 
      description: "Plot 1",
      owner: "Tulsi Aradhya Holida Resort",
      bookingDate: "N/A",
      status: "booked"
    }, 
    { 
      id: 11, 
      x: 0.152, 
      y: 0.809, 
      description: "Plot 1",
      owner: "Tulsi Aradhya Holida Resort",
      bookingDate: "N/A",
      status: "booked"
    }, 
    { 
      id: 12, 
      x: 0.195, 
      y: 0.809, 
      description: "Plot 1",
      owner: "Tulsi Aradhya Holida Resort",
      bookingDate: "N/A",
      status: "booked"
    }, 
    { 
      id: 13, 
      x: 0.195, 
      y: 0.759, 
      description: "Plot 1",
      owner: "Tulsi Aradhya Holida Resort",
      bookingDate: "N/A",
      status: "booked"
    }, 
    { 
      id: 14, 
      x: 0.195, 
      y: 0.697, 
      description: "Plot 1",
      owner: "Tulsi Aradhya Holida Resort",
      bookingDate: "N/A",
      status: "booked"
    }, 
    { 
      id: 15, 
      x: 0.195, 
      y: 0.573, 
      description: "Plot 1",
      owner: "Tulsi Aradhya Holida Resort",
      bookingDate: "N/A",
      status: "available"
    }, 
    { 
      id: 16, 
      x: 0.195, 
      y: 0.514, 
      description: "Plot 1",
      owner: "Tulsi Aradhya Holida Resort",
      bookingDate: "N/A",
      status: "available"
    }, 
    { 
      id: 17, 
      x: 0.195, 
      y: 0.462, 
      description: "Plot 1",
      owner: "Tulsi Aradhya Holida Resort",
      bookingDate: "N/A",
      status: "available"
    }, 
    { 
      id: 18, 
      x: 0.195, 
      y: 0.407, 
      description: "Plot 1",
      owner: "Tulsi Aradhya Holida Resort",
      bookingDate: "N/A",
      status: "available"
    }, 
    { 
      id: 19,
       
      x: 0.195, 
      y: 0.357, 
      description: "Plot 1",
      owner: "Tulsi Aradhya Holida Resort",
      bookingDate: "N/A",
      status: "available"
    }, 
    { 
      id: 20, 
      x: 0.195, 
      y: 0.303, 
      description: "Plot 1",
      owner: "Tulsi Aradhya Holida Resort",
      bookingDate: "N/A",
      status: "available"
    }, 
    { 
      id: 21, 
      x: 0.195, 
      y: 0.252, 
      description: "Plot 1",
      owner: "Tulsi Aradhya Holida Resort",
      bookingDate: "N/A",
      status: "available"
    }, 
    { 
      id: 22, 
      x: 0.195, 
      y: 0.200, 
      description: "Plot 1",
      owner: "Tulsi Aradhya Holida Resort",
      bookingDate: "N/A",
      status: "available"
    }, 
    { 
      id: 23, 
      x: 0.195, 
      y: 0.155, 
      description: "Plot 1",
      owner: "Tulsi Aradhya Holida Resort",
      bookingDate: "N/A",
      status: "available"
    }, 
    { 
      id: 24, 
      x: 0.249, 
      y: 0.19, 
      description: "Plot 1",
      owner: "Tulsi Aradhya Holida Resort",
      bookingDate: "N/A",
      status: "available"
    }, 
    { 
      id: 25, 
      x: 0.249, 
      y: 0.25, 
      description: "Plot 1",
      owner: "Tulsi Aradhya Holida Resort",
      bookingDate: "N/A",
      status: "available"
    }, 
    { 
      id: 26, 
      x: 0.249, 
      y: 0.302, 
      description: "Plot 1",
      owner: "Tulsi Aradhya Holida Resort",
      bookingDate: "N/A",
      status: "available"
    }, 
    { 
      id: 27, 
      x: 0.249, 
      y: 0.355, 
      description: "Plot 1",
      owner: "Tulsi Aradhya Holida Resort",
      bookingDate: "N/A",
      status: "available"
    }, 
    { 
      id: 28, 
      x: 0.249, 
      y: 0.41, 
      description: "Plot 1",
      owner: "Tulsi Aradhya Holida Resort",
      bookingDate: "N/A",
      status: "available"
    }, 
    { 
      id: 29, 
      x: 0.249, 
      y: 0.462, 
      description: "Plot 1",
      owner: "Tulsi Aradhya Holida Resort",
      bookingDate: "N/A",
      status: "available"
    }, 
    { 
      id: 30, 
      x: 0.249, 
      y: 0.515, 
      description: "Plot 1",
      owner: "Tulsi Aradhya Holida Resort",
      bookingDate: "N/A",
      status: "available"
    }, 
    { 
      id: 31, 
      x: 0.249, 
      y: 0.572, 
      description: "Plot 1",
      owner: "Tulsi Aradhya Holida Resort",
      bookingDate: "N/A",
      status: "available"
    }, 
    { 
      id: 32, 
      x: 0.249, 
      y: 0.7, 
      description: "Plot 1",
      owner: "Tulsi Aradhya Holida Resort",
      bookingDate: "N/A",
      status: "available"
    }, 
    { 
      id: 33, 
      x: 0.249, 
      y: 0.76, 
      description: "Plot 1",
      owner: "Tulsi Aradhya Holida Resort",
      bookingDate: "N/A",
      status: "available"
    }, 
    { 
      id: 34, 
      x: 0.249, 
      y: 0.813, 
      description: "Plot 1",
      owner: "Tulsi Aradhya Holida Resort",
      bookingDate: "N/A",
      status: "available"
    }, 
    { 
      id: 35, 
      x: 0.283, 
      y: 0.813, 
      description: "Plot 1",
      owner: "Tulsi Aradhya Holida Resort",
      bookingDate: "N/A",
      status: "available"
    }, 
    { 
      id: 36, 
      x: 0.283, 
      y: 0.76, 
      description: "Plot 1",
      owner: "Tulsi Aradhya Holida Resort",
      bookingDate: "N/A",
      status: "available"
    }, 
    { 
      id: 37, 
      x: 0.283, 
      y: 0.7, 
      description: "Plot 1",
      owner: "Tulsi Aradhya Holida Resort",
      bookingDate: "N/A",
      status: "available"
    }, 
    { 
      id: 38, 
      x: 0.283, 
      y: 0.572, 
      description: "Plot 1",
      owner: "Tulsi Aradhya Holida Resort",
      bookingDate: "N/A",
      status: "available"
    }, 
    { 
      id: 39, 
      x: 0.283, 
      y: 0.515, 
      description: "Plot 1",
      owner: "Tulsi Aradhya Holida Resort",
      bookingDate: "N/A",
      status: "available"
    }, 
    { 
      id: 40, 
      x: 0.283, 
      y: 0.462, 
      description: "Plot 1",
      owner: "Tulsi Aradhya Holida Resort",
      bookingDate: "N/A",
      status: "available"
    }, 
    { 
      id: 41, 
      x: 0.283, 
      y: 0.41, 
      description: "Plot 1",
      owner: "Tulsi Aradhya Holida Resort",
      bookingDate: "N/A",
      status: "available"
    }, 
    { 
      id: 42, 
      x: 0.283, 
      y: 0.355, 
      description: "Plot 1",
      owner: "Tulsi Aradhya Holida Resort",
      bookingDate: "N/A",
      status: "available"
    }, 
    { 
      id: 43, 
      x: 0.283, 
      y: 0.302, 
      description: "Plot 1",
      owner: "Tulsi Aradhya Holida Resort",
      bookingDate: "N/A",
      status: "available"
    }, 
    { 
      id: 44, 
      x: 0.283, 
      y: 0.25, 
      description: "Plot 1",
      owner: "Tulsi Aradhya Holida Resort",
      bookingDate: "N/A",
      status: "available"
    }, 
    { 
      id: 45, 
      x: 0.282, 
      y: 0.196, 
      description: "Plot 1",
      owner: "Tulsi Aradhya Holida Resort",
      bookingDate: "N/A",
      status: "available"
    }, 
    { 
      id: 46, 
      x: 0.3345, 
      y: 0.21, 
      description: "Plot 1",
      owner: "Tulsi Aradhya Holida Resort",
      bookingDate: "N/A",
      status: "available"
    }, 
    { 
      id: 47, 
      x: 0.3345, 
      y: 0.255,
      description: "Plot 1",
      owner: "Tulsi Aradhya Holida Resort",
      bookingDate: "N/A",
      status: "available"
    }, 
    { 
      id: 48, 
      x: 0.3345, 
      y: 0.303, 
      description: "Plot 1",
      owner: "Tulsi Aradhya Holida Resort",
      bookingDate: "N/A",
      status: "available"
    }, 
    { 
      id: 49, 
      x: 0.3345, 
      y: 0.356, 
      description: "Plot 1",
      owner: "Tulsi Aradhya Holida Resort",
      bookingDate: "N/A",
      status: "available"
    }, 
    { 
      id: 50, 
      x: 0.3345, 
      y: 0.41, 
      description: "Plot 1",
      owner: "Tulsi Aradhya Holida Resort",
      bookingDate: "N/A",
      status: "available"
    }, 
    { 
      id: 51, 
      x: 0.3345, 
      y: 0.462, 
      description: "Plot 1",
      owner: "Tulsi Aradhya Holida Resort",
      bookingDate: "N/A",
      status: "available"
    }, 
    { 
      id: 52, 
      x: 0.3345, 
      y: 0.515, 
      description: "Plot 1",
      owner: "Tulsi Aradhya Holida Resort",
      bookingDate: "N/A",
      status: "available"
    }, 
    { 
      id: 53, 
      x: 0.3345, 
      y: 0.574, 
      description: "Plot 1",
      owner: "Tulsi Aradhya Holida Resort",
      bookingDate: "N/A",
      status: "available"
    }, 
    { 
      id: 54, 
      x: 0.3345, 
      y: 0.7, 
      description: "Plot 1",
      owner: "Tulsi Aradhya Holida Resort",
      bookingDate: "N/A",
      status: "available"
    }, 
    { 
      id: 55, 
      x: 0.3345, 
      y: 0.76, 
      description: "Plot 1",
      owner: "Tulsi Aradhya Holida Resort",
      bookingDate: "N/A",
      status: "available"
    }, 
    { 
      id: 56, 
      x: 0.3345, 
      y: 0.813, 
      description: "Plot 1",
      owner: "Tulsi Aradhya Holida Resort",
      bookingDate: "N/A",
      status: "available"
    }, 
    { 
      id: 57, 
      x: 0.3685, 
      y: 0.813, 
      description: "Plot 1",
      owner: "Tulsi Aradhya Holida Resort",
      bookingDate: "N/A",
      status: "available"
    }, 
    { 
      id: 58, 
      x: 0.3685, 
      y: 0.15, 
      description: "Plot 1",
      owner: "Tulsi Aradhya Holida Resort",
      bookingDate: "N/A",
      status: "available"
    }, 
    { 
      id: 59, 
      x: 0.3685, 
      y: 0.15, 
      description: "Plot 1",
      owner: "Tulsi Aradhya Holida Resort",
      bookingDate: "N/A",
      status: "available"
    }, 
    { 
      id: 60, 
      x: 0.3685, 
      y: 0.76, 
      description: "Plot 1",
      owner: "Tulsi Aradhya Holida Resort",
      bookingDate: "N/A",
      status: "available"
    }, 
    { 
      id: 61, 
      x: 0.3685, 
      y: 0.7, 
      description: "Plot 1",
      owner: "Tulsi Aradhya Holida Resort",
      bookingDate: "N/A",
      status: "available"
    }, 
    { 
      id: 62, 
      x: 0.3685, 
      y: 0.575, 
      description: "Plot 1",
      owner: "Tulsi Aradhya Holida Resort",
      bookingDate: "N/A",
      status: "available"
    },  
    { 
      id: 63, 
      x: 0.3685, 
      y: 0.516, 
      description: "Plot 1",
      owner: "Tulsi Aradhya Holida Resort",
      bookingDate: "N/A",
      status: "available"
    }, 
    { 
      id: 64, 
      x: 0.3685, 
      y: 0.463, 
      description: "Plot 1",
      owner: "Tulsi Aradhya Holida Resort",
      bookingDate: "N/A",
      status: "available"
    }, 
    { 
      id: 65, 
      x: 0.3685, 
      y: 0.41, 
      description: "Plot 1",
      owner: "Tulsi Aradhya Holida Resort",
      bookingDate: "N/A",
      status: "available"
    }, 
    { 
      id: 66, 
      x: 0.3685, 
      y: 0.357, 
      description: "Plot 1",
      owner: "Tulsi Aradhya Holida Resort",
      bookingDate: "N/A",
      status: "available"
    }, 
    { 
      id: 67, 
      x: 0.3685, 
      y: 0.304, 
      description: "Plot 1",
      owner: "Tulsi Aradhya Holida Resort",
      bookingDate: "N/A",
      status: "available"
    }, 
    { 
      id: 68, 
      x: 0.3685, 
      y: 0.245, 
      description: "Plot 1",
      owner: "Tulsi Aradhya Holida Resort",
      bookingDate: "N/A",
      status: "available"
    }, 
    { 
      id: 69, 
      x: 0.422, 
      y: 0.357, 
      description: "Plot 1",
      owner: "Tulsi Aradhya Holida Resort",
      bookingDate: "N/A",
      status: "available"
    }, 
    { 
      id: 70, 
      x: 0.422, 
      y: 0.15, 
      description: "Plot 1",
      owner: "Tulsi Aradhya Holida Resort",
      bookingDate: "N/A",
      status: "available"
    }, 
    { 
      id: 71, 
      x: 0.422, 
      y: 0.15, 
      description: "Plot 1",
      owner: "Tulsi Aradhya Holida Resort",
      bookingDate: "N/A",
      status: "available"
    }, 
    { 
      id: 72, 
      x: 0.422, 
      y: 0.15, 
      description: "Plot 1",
      owner: "Tulsi Aradhya Holida Resort",
      bookingDate: "N/A",
      status: "available"
    }, 
    { 
      id: 73, 
      x: 0.422, 
      y: 0.15, 
      description: "Plot 1",
      owner: "Tulsi Aradhya Holida Resort",
      bookingDate: "N/A",
      status: "available"
    }, 
    { 
      id: 74, 
      x: 0.422, 
      y: 0.15, 
      description: "Plot 1",
      owner: "Tulsi Aradhya Holida Resort",
      bookingDate: "N/A",
      status: "available"
    }, 
    { 
      id: 75, 
      x: 0.4204, 
      y: 0.751, 
      description: "Plot 1",
      owner: "Tulsi Aradhya Holida Resort",
      bookingDate: "N/A",
      status: "available"
    }, 
    { 
      id: 76, 
      x: 0.1655, 
      y: 0.15, 
      description: "Plot 1",
      owner: "Tulsi Aradhya Holida Resort",
      bookingDate: "N/A",
      status: "available"
    }, 
    { 
      id: 77, 
      x: 0.1655, 
      y: 0.15, 
      description: "Plot 1",
      owner: "Tulsi Aradhya Holida Resort",
      bookingDate: "N/A",
      status: "available"
    }, 
    { 
      id: 78, 
      x: 0.1655, 
      y: 0.15, 
      description: "Plot 1",
      owner: "Tulsi Aradhya Holida Resort",
      bookingDate: "N/A",
      status: "available"
    }, 

    { 
      id: 79, 
      x: 0.1655, 
      y: 0.15, 
      description: "Plot 1",
      owner: "Tulsi Aradhya Holida Resort",
      bookingDate: "N/A",
      status: "available"
    }, 
    { 
      id: 80, 
      x: 0.1655, 
      y: 0.15, 
      description: "Plot 1",
      owner: "Tulsi Aradhya Holida Resort",
      bookingDate: "N/A",
      status: "available"
    }, 
    { 
      id: 81, 
      x: 0.1655, 
      y: 0.15, 
      description: "Plot 1",
      owner: "Tulsi Aradhya Holida Resort",
      bookingDate: "N/A",
      status: "available"
    }, 
    { 
      id: 82, 
      x: 0.1655, 
      y: 0.15, 
      description: "Plot 1",
      owner: "Tulsi Aradhya Holida Resort",
      bookingDate: "N/A",
      status: "available"
    }, 
    { 
      id: 83, 
      x: 0.1655, 
      y: 0.15, 
      description: "Plot 1",
      owner: "Tulsi Aradhya Holida Resort",
      bookingDate: "N/A",
      status: "available"
    }, 
    { 
      id: 84, 
      x: 0.1655, 
      y: 0.15, 
      description: "Plot 1",
      owner: "Tulsi Aradhya Holida Resort",
      bookingDate: "N/A",
      status: "available"
    }, 
    { 
      id: 85, 
      x: 0.1655, 
      y: 0.15, 
      description: "Plot 1",
      owner: "Tulsi Aradhya Holida Resort",
      bookingDate: "N/A",
      status: "available"
    }, 
    { 
      id: 86, 
      x: 0.1655, 
      y: 0.15, 
      description: "Plot 1",
      owner: "Tulsi Aradhya Holida Resort",
      bookingDate: "N/A",
      status: "available"
    }, 
    { 
      id: 87, 
      x: 0.1655, 
      y: 0.15, 
      description: "Plot 1",
      owner: "Tulsi Aradhya Holida Resort",
      bookingDate: "N/A",
      status: "available"
    }, 
    { 
      id: 88, 
      x: 0.1655, 
      y: 0.15, 
      description: "Plot 1",
      owner: "Tulsi Aradhya Holida Resort",
      bookingDate: "N/A",
      status: "available"
    }, 
    { 
      id: 89, 
      x: 0.1655, 
      y: 0.15, 
      description: "Plot 1",
      owner: "Tulsi Aradhya Holida Resort",
      bookingDate: "N/A",
      status: "available"
    }, 
    { 
      id: 90, 
      x: 0.1655, 
      y: 0.15, 
      description: "Plot 1",
      owner: "Tulsi Aradhya Holida Resort",
      bookingDate: "N/A",
      status: "available"
    }, 
    { 
      id: 91, 
      x: 0.1655, 
      y: 0.15, 
      description: "Plot 1",
      owner: "Tulsi Aradhya Holida Resort",
      bookingDate: "N/A",
      status: "available"
    }, 
    { 
      id: 92, 
      x: 0.1655, 
      y: 0.15, 
      description: "Plot 1",
      owner: "Tulsi Aradhya Holida Resort",
      bookingDate: "N/A",
      status: "available"
    }, 
    { 
      id: 93, 
      x: 0.1655, 
      y: 0.15, 
      description: "Plot 1",
      owner: "Tulsi Aradhya Holida Resort",
      bookingDate: "N/A",
      status: "available"
    }, 
    { 
      id: 94, 
      x: 0.1655, 
      y: 0.15, 
      description: "Plot 1",
      owner: "Tulsi Aradhya Holida Resort",
      bookingDate: "N/A",
      status: "available"
    }, 
    { 
      id: 95, 
      x: 0.1655, 
      y: 0.15, 
      description: "Plot 1",
      owner: "Tulsi Aradhya Holida Resort",
      bookingDate: "N/A",
      status: "available"
    }, 
    { 
      id: 96, 
      x: 0.1655, 
      y: 0.15, 
      description: "Plot 1",
      owner: "Tulsi Aradhya Holida Resort",
      bookingDate: "N/A",
      status: "available"
    }, 
    { 
      id: 97, 
      x: 0.1655, 
      y: 0.15, 
      description: "Plot 1",
      owner: "Tulsi Aradhya Holida Resort",
      bookingDate: "N/A",
      status: "available"
    }, 
    { 
      id: 98, 
      x: 0.1655, 
      y: 0.15, 
      description: "Plot 1",
      owner: "Tulsi Aradhya Holida Resort",
      bookingDate: "N/A",
      status: "available"
    }, 
    { 
      id: 99, 
      x: 0.1655, 
      y: 0.15, 
      description: "Plot 1",
      owner: "Tulsi Aradhya Holida Resort",
      bookingDate: "N/A",
      status: "available"
    }, 
    { 
      id: 100, 
      x: 0.1655, 
      y: 0.15, 
      description: "Plot 1",
      owner: "Tulsi Aradhya Holida Resort",
      bookingDate: "N/A",
      status: "available"
    }, 
    { 
      id: 101, 
      x: 0.1655, 
      y: 0.15, 
      description: "Plot 1",
      owner: "Tulsi Aradhya Holida Resort",
      bookingDate: "N/A",
      status: "available"
    }, 
    { 
      id: 102, 
      x: 0.1655, 
      y: 0.15, 
      description: "Plot 1",
      owner: "Tulsi Aradhya Holida Resort",
      bookingDate: "N/A",
      status: "available"
    }, 
    { 
      id: 103, 
      x: 0.1655, 
      y: 0.15, 
      description: "Plot 1",
      owner: "Tulsi Aradhya Holida Resort",
      bookingDate: "N/A",
      status: "available"
    }, 
    { 
      id: 104, 
      x: 0.1655, 
      y: 0.15, 
      description: "Plot 1",
      owner: "Tulsi Aradhya Holida Resort",
      bookingDate: "N/A",
      status: "available"
    }, 
    { 
      id: 105, 
      x: 0.1655, 
      y: 0.15, 
      description: "Plot 1",
      owner: "Tulsi Aradhya Holida Resort",
      bookingDate: "N/A",
      status: "available"
    }, 
    { 
      id: 106, 
      x: 0.1655, 
      y: 0.15, 
      description: "Plot 1",
      owner: "Tulsi Aradhya Holida Resort",
      bookingDate: "N/A",
      status: "available"
    }, 
    { 
      id: 107, 
      x: 0.1655, 
      y: 0.15, 
      description: "Plot 1",
      owner: "Tulsi Aradhya Holida Resort",
      bookingDate: "N/A",
      status: "available"
    }, 
    { 
      id: 108, 
      x: 0.1655, 
      y: 0.15, 
      description: "Plot 1",
      owner: "Tulsi Aradhya Holida Resort",
      bookingDate: "N/A",
      status: "available"
    }, 
    { 
      id: 109, 
      x: 0.1655, 
      y: 0.15, 
      description: "Plot 1",
      owner: "Tulsi Aradhya Holida Resort",
      bookingDate: "N/A",
      status: "available"
    }, 
    { 
      id: 110, 
      x: 0.1655, 
      y: 0.15, 
      description: "Plot 1",
      owner: "Tulsi Aradhya Holida Resort",
      bookingDate: "N/A",
      status: "available"
    }, 
    { 
      id: 111, 
      x: 0.1655, 
      y: 0.15, 
      description: "Plot 1",
      owner: "Tulsi Aradhya Holida Resort",
      bookingDate: "N/A",
      status: "available"
    }, 
    { 
      id: 112, 
      x: 0.1655, 
      y: 0.15, 
      description: "Plot 1",
      owner: "Tulsi Aradhya Holida Resort",
      bookingDate: "N/A",
      status: "available"
    }, 
    { 
      id: 113, 
      x: 0.1655, 
      y: 0.15, 
      description: "Plot 1",
      owner: "Tulsi Aradhya Holida Resort",
      bookingDate: "N/A",
      status: "available"
    }, 
    { 
      id: 114, 
      x: 0.1655, 
      y: 0.15, 
      description: "Plot 1",
      owner: "Tulsi Aradhya Holida Resort",
      bookingDate: "N/A",
      status: "available"
    }, 
    { 
      id: 115, 
      x: 0.1655, 
      y: 0.15, 
      description: "Plot 1",
      owner: "Tulsi Aradhya Holida Resort",
      bookingDate: "N/A",
      status: "available"
    }, 
    { 
      id: 116, 
      x: 0.195, 
      y: 0.159, 
      description: "Plot 2",
      owner: "Tulsi Aradhya Holida Resort",
      bookingDate: "N/A",
      status: "booked"
    }, 
    { 
      id: 117, 
      x: 0.15, 
      y: 0.81, 
      description: "Plot 11",
      owner: "Manoj Borisagar જુનાગઢ",
      bookingDate: "2023-06-20",
      status: "registered"
    },
    { 
      id: 118, 
      x: 0.15, 
      y: 0.31, 
      description: "Plot 11",
      owner: "Manoj Borisagar જુનાગઢ",
      bookingDate: "2023-06-20",
      status: "booked"
    },
    { 
      id: 119, 
      x: 0.35, 
      y: 0.31, 
      description: "Plot 11",
      owner: "Manoj Borisagar જુનાગઢ",
      bookingDate: "2023-06-20",
      status: "available"
    },
    { 
      id: 120, 
      x: 0.249, 
      y: 0.19, 
      description: "Plot 24",
      owner: "Manoj Borisagar જુનાગઢ",
      bookingDate: "2023-06-20",
      status: "booked"
    },
    { 
      id: 121, 
      x: 0.51, 
      y: 0.30, 
      description: "Plot 81",
      owner: "Chirag Jadav",
      bookingDate: "2023-06-18",
      status: "booked"
    },
    { 
      id: 122, 
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
    const markerText = document.createElement('span');
    markerText.className = 'marker-text';
    markerText.textContent = plot.id ? plot.id.toString() : plot.alphabet; // Show plot ID if available, otherwise show alphabet
    marker.appendChild(markerText);



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