// Get the share button element
var shareButton = document.getElementsByClassName("sharebutton")[0];

// Check if the share button exists and add a click event listener
if (shareButton) {
  shareButton.addEventListener("click", toggleShareTag);
} else {
  console.error("No element found with the class name 'sharebutton'");
}

// Function to toggle the visibility and styling of the share tag
function toggleShareTag() {
  // Get the share tag and the image inside the share button
  var shareTag = document.getElementsByClassName("share-tag")[0];
  var image = shareButton.children[0];
  var footer = document.getElementsByClassName("footer")[0];

  // Set transition styles for smooth animation
  shareTag.style.transition = "all 0.5s ease-in-out";
  shareButton.style.transition = "all 0.5s ease-in-out";
  footer.style.transition = "all 0.5s ease-in-out";

  // Toggle the share tag visibility and button styling
  if (shareTag.style.opacity == 0) {
    // Make the share tag visible and change button color and image
    shareTag.style.opacity = 1;
    shareButton.style.backgroundColor = "hsl(212, 23%, 69%)";
    image.src =
      "article-preview-component-master/images/icon-share dark grey.svg";
    shareTag.style.bottom = "115px";
    footer.style.opacity = 1;
  } else {
    // Hide the share tag and revert button color and image
    shareTag.style.opacity = 0;
    shareButton.style.backgroundColor = "hsl(210, 46%, 95%)";
    image.src = "article-preview-component-master/images/icon-share.svg";
    shareTag.style.bottom = "50px";
    footer.style.opacity = 0;
  }
}