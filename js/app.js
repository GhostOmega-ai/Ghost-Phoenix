/* ================================
   Ghost v1.0 Dashboard Final
   ================================ */

const toast = document.getElementById("toast");

const routeLabels = {
  home: "Home",
  photos: "Photo Vault coming next",
  videos: "Video Vault will mirror Photo Vault",
  files: "Files Vault coming soon",
  notes: "Notes Vault coming soon",
  browser: "Browser coming soon",
  contacts: "Contacts will stay as-is",
  hide: "Disguise mode coming soon",
  settings: "Settings coming soon",
};

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(window.__ghostToast);

  window.__ghostToast = setTimeout(() => {
    toast.classList.remove("show");
  }, 1200);
}

function setActiveRoute(route) {
  document.querySelectorAll(".nav button").forEach((button) => {
    button.classList.toggle("active", button.dataset.route === route);
  });
}

function handleRouteClick(event) {
  const button = event.currentTarget;
  const route = button.dataset.route;

  setActiveRoute(route);
  showToast(routeLabels[route] || "Coming soon");
}

document.querySelectorAll("[data-route]").forEach((button) => {
  button.addEventListener("click", handleRouteClick);
});
