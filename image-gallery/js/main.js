var images =  document.querySelectorAll('.thumb-bar img');
var fullImage = document.querySelector('.full-img img');

var imageClickHandler = function(){
	fullImage.setAttribute("src", this.src);
}
var slidder = [];
 
for (var i = images.length - 1; i >= 0; i--) {
	images[i].onclick = imageClickHandler;
	slidder[i] = (images[i].style.display == "none");
}

// Slidder button click handler

var slidderLeftButton = document.querySelector('#left-btn');
var slidderRightButton = document.querySelector('#right-btn');

var scrollerWidth = $('div.thumb-bar').scrollLeft();
slidderLeftButton.onclick = function(){
  $('div.thumb-bar').animate({
    scrollLeft: "+=100px"
  }, "slow");
}
slidderRightButton.onclick = function(){
  $('div.thumb-bar').animate({
    scrollLeft: "-=100px"
  }, "slow");
}

