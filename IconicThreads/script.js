let currentIndex = 0;
const banners = document.querySelectorAll(".banner_img");

function showBanner(index) {
  banners.forEach((img, i) => {
    img.style.display = i === index ? "block" : "none";
  });
}

function nextBanner() {
  currentIndex = (currentIndex + 1) % banners.length;
  showBanner(currentIndex);
}

showBanner(currentIndex);
setInterval(nextBanner, 3000); 
