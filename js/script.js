document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("year").textContent = new Date().getFullYear();
  });

document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.getElementById("dark-toggle");
    const body = document.body;
  
    // Set initial state based on localStorage
    const darkPref = localStorage.getItem("darkMode");
    if (darkPref === "enabled") {
      body.classList.add("dark-mode");
    }
  
    // Add event listener to toggle
    if (toggle) {
      toggle.addEventListener("click", function () {
        const isDark = body.classList.toggle("dark-mode");
  
        // Save new state to localStorage
        if (isDark) {
          localStorage.setItem("darkMode", "enabled");
        } else {
          localStorage.setItem("darkMode", "disabled");
        }
      });
    }
});