/**
 * Write your challenge solution here
 */
// Image data
const images = [
  {
    url: 'https://plus.unsplash.com/premium_photo-1666863909125-3a01f038e71f?q=80&w=1986&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    caption: 'Beautiful Mountain Landscape',
  },
  {
    url: 'https://plus.unsplash.com/premium_photo-1690576837108-3c8343a1fc83?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    caption: 'Ocean Sunset View',
  },
  {
    url: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=2041&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    caption: 'Autumn Forest Path',
  },
  {
    url: 'https://plus.unsplash.com/premium_photo-1680466057202-4aa3c6329758?q=80&w=2138&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    caption: 'Urban City Skyline',
  },
];


const carouselTrack = document.getElementById('carouselTrack');
const carouselCaption = document.getElementById('caption');
const nextButton = document.getElementById('nextButton');
const prevButton = document.getElementById('prevButton');
const carouselNav = document.getElementById('carouselNav');
const allIndicators = document.getElementsByClassName('carousel-indicator');
const autoPlayButton = document.getElementById('autoPlayButton');
const timerDisplay = document.getElementById('timerDisplay');

let trackerCount = 0;
let startSlideShow = false;
let timer;

function setIndicator() {
  let nav = [...allIndicators];
  nav.forEach((element, index) => {
    if (index === trackerCount) {
      element.classList.add('active');
    } else {
      element.classList.remove('active');
    }
  });
}

function setNewImage() {
  let imageCaption = images[trackerCount].caption;

  carouselTrack.style.transform = `translateX(-${trackerCount * 100}%)`;
  carouselCaption.textContent = imageCaption;
  setIndicator();
}

function slideShow() {
  trackerCount++;
  trackerCount = trackerCount % images.length;
  setNewImage();
}

carouselCaption.textContent = images[trackerCount].caption;
carouselCaption.classList.add('carousel-caption');

images.forEach((img, index) => {
  const carouselSlide = document.createElement('div');
  carouselSlide.classList.add('carousel-slide');
  carouselSlide.style.backgroundImage = `url('${img.url}')`;
  carouselTrack.appendChild(carouselSlide);

  const carouselIndicator = document.createElement('div');
  carouselIndicator.classList.add('carousel-indicator');
  carouselNav.appendChild(carouselIndicator);
  if (index === 0) {
    carouselIndicator.classList.add('active');
  }
});

nextButton.addEventListener('click', () => {
  trackerCount++;
  trackerCount = trackerCount % images.length;

  setNewImage();
});

prevButton.addEventListener('click', () => {
  trackerCount--;
  if (trackerCount < 0) trackerCount = images.length - 1;

  setNewImage();
});

autoPlayButton.addEventListener('click', () => {
  if (startSlideShow) {
    clearInterval(slideShowInterval);
    clearInterval(countDownInterval);

    autoPlayButton.textContent = "Start Auto Play";
    timerDisplay.textContent = "";
  } else {
    let timer = 5;
    timerDisplay.textContent = `Next slide in ${timer}s`;
    countDownInterval = setInterval(() => {
      if (timer > 1){
        timer--;
        timerDisplay.textContent = `Next slide in ${timer}s`;
      } else {
        timer = 5;
      }
    }, 1000);

    slideShowInterval = setInterval(() => {
      slideShow(timer);
      timer = 5;
    }, (timer) * 1000);

    autoPlayButton.textContent = "Stop Auto Play";
  }
  startSlideShow = !startSlideShow;
});