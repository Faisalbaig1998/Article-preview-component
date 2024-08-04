var sharebutton = document.getElementsByClassName("sharebutton")[0];
if (sharebutton) {
  sharebutton.addEventListener("click", myfunction);
} else {
  console.error("No element found with the class name 'sharebutton'");
}

function myfunction() {
  var shareTag = document.getElementsByClassName("share-tag")[0];

  if (shareTag.style.opacity == 0) {
    shareTag.style.opacity = 1;
  } else {
    shareTag.style.opacity = 0;
  }
}
