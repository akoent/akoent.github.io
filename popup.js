function openPopup() {
  overlay.style.display = "block";
  popup.style.display = "block";
}

function closePopup() {
  overlay.style.display = "none";
  popup.style.display = "none";
}

function showUpsell() {
  document.getElementById("step-one").style.display = "none";
  document.getElementById("step-two").style.display = "block";
}

// Exit intent trigger
document.addEventListener("mouseout", function(e) {
  if (e.clientY < 10) {
    openPopup();
  }
});

// Delay trigger fallback
setTimeout(openPopup, 8000);
