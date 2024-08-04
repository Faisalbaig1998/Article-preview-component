var sharebutton = document.getElementsByClassName("sharebutton")[0];
if (sharebutton) {
  sharebutton.addEventListener("click", myfunction);
} else {
  console.error("No element found with the class name 'sharebutton'");
}

function myfunction() {
  var shareTag = document.getElementsByClassName("share-tag")[0];
  var image = document.getElementsByClassName("sharebutton")[0].children[0];

  if (shareTag.style.opacity == 0) {
    shareTag.style.opacity = 1;
    sharebutton.style.backgroundColor = "hsl(212, 23%, 69%)";
    image.src = "article-preview-component-master/images/icon-share dark grey.svg"
} else {
    shareTag.style.opacity = 0;
    sharebutton.style.backgroundColor = "hsl(210, 46%, 95%)";
    image.src = "article-preview-component-master/images/icon-share.svg"
  }
}
