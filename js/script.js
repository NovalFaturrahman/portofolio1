const navbarnav = document.querySelector('.navbar-nav');
document.querySelector('#hamburger-menu').onclick = () => {
   navbarnav.classList.toggle('active');
};
// Tutup navbar setelah klik menu
document.querySelectorAll('.navbar-nav a').forEach(link => {
    link.addEventListener('click', () => {
      navbarnav.classList.remove('active');
    });
  });
  const zoomableImages = document.querySelectorAll('.zoomable');
  const zoomOverlay = document.getElementById('zoomOverlay');
  const zoomedImage = document.getElementById('zoomedImage');
  
  zoomableImages.forEach(image => {
    image.addEventListener('click', () => {
      zoomOverlay.style.display = 'flex';
      zoomedImage.src = image.src;
    });
  });
  
  zoomOverlay.addEventListener('click', () => {
    zoomOverlay.style.display = 'none';
  });
    