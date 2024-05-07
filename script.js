// CSS styles as a JavaScript string
var cssStyles = `
#myImg {
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;
  position: fixed;
  bottom: 20px;
  right: 20px;
}

#myImg:hover {opacity: 0.7;}

.modal {
  /* display: none; */
  position: fixed;
  z-index: 1;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.9);
}
.modal img {
  border-radius: 15px;
}
.modal-content {
  margin: auto;
  display: block;
  width: 80%;
  max-width: 700px;
}
#caption {
  margin: auto;
  display: block;
  width: 80%;
  max-width: 700px;
  text-align: center;
  color: #ccc;
  padding: 10px 0;
  height: 150px;
}
.modal-content,
#caption {
  animation-name: zoom;
  animation-duration: 0.6s;
}
@keyframes zoom {
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
}
.close {
  position: absolute;
  top: 15px;
  right: 35px;
  color: #f1f1f1;
  font-size: 40px;
  font-weight: bold;
  transition: 0.3s;
}
.close:hover,
.close:focus {
  color: #bbb;
  text-decoration: none;
  cursor: pointer;
}
@media only screen and (max-width: 700px) {
  .modal-content {
    width: 100%;
  }
}
`;

// Create a style element and append CSS styles
var style = document.createElement("style");
style.textContent = cssStyles;
document.head.appendChild(style);

// Dynamically create modal element and its child elements and append them to the body
var modal = document.createElement("div");
modal.id = "myModal";
modal.classList.add("modal");
document.body.appendChild(modal);

var closeButton = document.createElement("span");
closeButton.classList.add("close");
closeButton.innerHTML = "&times;";
modal.appendChild(closeButton);

var modalLink = document.createElement("a");
modalLink.href = "https://t.me/codecanyon_bylancer_bot";
modal.appendChild(modalLink);

var modalImg = document.createElement("img");
modalImg.classList.add("modal-content");
modalImg.id = "img01";
modalImg.src =
  "https://raw.githubusercontent.com/TheodoreBagwell1/shell-media/main/poster.webp";
modalLink.appendChild(modalImg);

var caption = document.createElement("div");
caption.id = "caption";
modal.appendChild(caption);

// Dynamically create image element and append it to the body
var img = document.createElement("img");
img.id = "myImg";
img.src =
  "https://github.com/TheodoreBagwell1/shell-media/blob/main/gift.gif?raw=true";
img.alt = "Snow";
img.style.width = "100%";
img.style.maxWidth = "200px";
img.style.borderRadius = "5px";
img.style.cursor = "pointer";
img.style.transition = "0.3s";
img.style.position = "fixed";
img.style.bottom = "20px";
img.style.right = "20px";
img.addEventListener("click", function () {
  modal.style.display = "block";
});
document.body.appendChild(img);

// Set up event listener for modal close button
closeButton.addEventListener("click", function () {
  modal.style.display = "none";
});


// Check if the modal has been opened before
if (localStorage.getItem("modalOpened") === "true") {
  modal.style.display = "none"; // Hide modal if already opened twice
} else {
  // Display modal if not opened before
  modal.style.display = "block";
  localStorage.setItem("modalOpened", "true");
}

setTimeout(() => {
  localStorage.setItem("modalOpened", "false");

}, 60000 * 4);
