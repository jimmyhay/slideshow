var links = document.querySelectorAll('.image-link');
var dots = document.querySelectorAll('.image-link-dot');
var wrapper = document.querySelector('#slideshow-wrapper');
var images = document.querySelectorAll('.image-wrapper');

var currentLink = 0;
var positionCounter = 0;

for (var i = 0; i < links.length; i++) {
  var link = links[i];

  link.addEventListener('click', setClickedItem, false);

  link.itemID = i;
}

images[0].style.left = '0px';
dots[0].classList.add('image-link-active');

wrapper.style.width = window.innerWidth * links.length;

function setClickedItem(e) {
  if (e.currentTarget.itemID != currentLink) {
    resetLinks();
    changePos(e);
  }
}

function resetLinks() {
  for (var i=0; i < links.length; i++) {
    dots[i].classList.remove('image-link-active');
    images[i].style.zIndex = 999;
  }
}

function changePos(e) {
  var newLink = e.currentTarget.itemID;
  var newImage = images[e.currentTarget.itemID];

  newImage.style.zIndex = 1001;
  images[currentLink].style.zIndex = 1000;

  if (currentLink < newLink) {
    positionCounter++;

    newImage.style.left = window.innerWidth*positionCounter;

    wrapper.style.transform = 'translate3d(' + -window.innerWidth*positionCounter + 'px, 0, 0)';
  } else {
    positionCounter--;

    newImage.style.left = window.innerWidth*positionCounter;

    wrapper.style.transform = 'translate3d(' + -window.innerWidth*positionCounter + 'px, 0, 0)';
  }

  currentLink = e.currentTarget.itemID;

  dots[currentLink].classList.add('image-link-active');
}
