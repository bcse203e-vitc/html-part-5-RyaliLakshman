// Get the button and body elements
const themeToggleButton = document.getElementById("theme-toggle");
const bodyElement = document.body;

// Check for existing theme in localStorage
if (localStorage.getItem("theme") === "dark") {
  bodyElement.classList.add("dark-theme");
  themeToggleButton.classList.add("dark-theme");
}

// Add an event listener to toggle the theme
themeToggleButton.addEventListener("click", function() {
  bodyElement.classList.toggle("dark-theme");
  themeToggleButton.classList.toggle("dark-theme");

  // Save the theme to localStorage
  if (bodyElement.classList.contains("dark-theme")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.removeItem("theme");
  }
});