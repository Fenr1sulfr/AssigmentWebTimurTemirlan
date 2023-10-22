let index = 0;
const images = document.getElementsByClassName('img-slider');

function showImage(n) {
  if (n >= images.length) {
    index = 0;
  } else if (n < 0) {
    index = images.length - 1;
  } else {
    index = n;
  }
  for (let i = 0; i < images.length; i++) {
    images[i].style.display = 'none';
  }
  images[index].style.display = 'block';
}

showImage(0);

setInterval(() => {
  showImage(index + 1);
}, 2000); // Change image every 2 seconds