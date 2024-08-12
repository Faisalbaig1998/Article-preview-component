// Function to check screen size and apply functionality
function checkScreenSize() {
  const width = window.innerWidth;
  const shareButton = document.getElementById("shareButton");
  const footer = document.getElementsByClassName("footer")[0];
  const shareTag = document.getElementsByClassName("share-tag")[0];

  // Set transition styles for smooth animation
  shareTag.style.transition = "all 0.5s ease-in-out";
  footer.style.transition = "all 0.5s ease-in-out";
  shareButton.style.transition = "all 0.5s ease-in-out";

  if (width < 376) {
      // Small screen size: hide share tag and toggle footer visibility
      shareTag.style.opacity = 0;
      shareTag.style.pointerEvents = 'none'; // Prevent interactions when hidden
      shareButton.addEventListener("click", toggleFooter);
      shareButton.removeEventListener("click", toggleShareTag);
  } else {
      // Large screen size: show share tag and toggle share tag visibility
      footer.style.opacity = 0;
      footer.style.pointerEvents = 'none'; // Prevent interactions when hidden
      // shareTag.style.opacity = 1;
      shareTag.style.pointerEvents = 'auto'; // Allow interactions when visible
      shareButton.addEventListener("click", toggleShareTag);
      shareButton.removeEventListener("click", toggleFooter);
  }
}

// Function to toggle the visibility and styling of the share tag
function toggleShareTag() {
  const shareTag = document.getElementsByClassName("share-tag")[0];
  const shareButton = document.getElementById("shareButton");
  const image = shareButton.children[0];

  // Toggle the share tag visibility and button styling
  if (shareTag.style.opacity == 0 || shareTag.style.opacity === "") {
      shareTag.style.opacity = 1;
      shareButton.style.backgroundColor = "hsl(212, 23%, 69%)";
      image.src = "article-preview-component-master/images/icon-share dark grey.svg";
      shareTag.style.bottom = "115px";
  } else {
      shareTag.style.opacity = 0;
      shareButton.style.backgroundColor = "hsl(210, 46%, 95%)";
      image.src = "article-preview-component-master/images/icon-share.svg";
      shareTag.style.bottom = "50px";
  }
}

// Function to toggle the visibility of the footer on small screens
function toggleFooter() {
  const footer = document.getElementsByClassName("footer")[0];
  const shareButton = document.getElementById("shareButton");
  const image = shareButton.children[0];

  // Toggle footer visibility
  if (footer.style.opacity == 0 || footer.style.opacity === "") {
      footer.style.opacity = 1;
      shareButton.style.backgroundColor = "hsl(212, 23%, 69%)";
      image.src = "article-preview-component-master/images/icon-share dark grey.svg";
  } else {
      footer.style.opacity = 0;
      shareButton.style.backgroundColor = "hsl(210, 46%, 95%)";
      image.src = "article-preview-component-master/images/icon-share.svg";
  }
}

// Detect screen size on page load
checkScreenSize();

// Detect screen size when the window is resized
window.addEventListener('resize', checkScreenSize);
