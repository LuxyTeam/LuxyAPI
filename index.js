const sideMenu = document.querySelector("aside");
const menuBtn = document.getElementById("menu-btn");
const closeBtn = document.getElementById("close-btn");

const darkMode = document.querySelector(".dark-mode");
const lightModeIcon = darkMode.querySelector("span:nth-child(1)");
const darkModeIcon = darkMode.querySelector("span:nth-child(2)");

// Function to set dark mode
const setDarkMode = (isDarkMode) => {
    document.body.classList.toggle("dark-mode-variables", isDarkMode);
    lightModeIcon.classList.toggle("active", !isDarkMode);
    darkModeIcon.classList.toggle("active", isDarkMode);
    localStorage.setItem("darkMode", isDarkMode);
};

// Function to initialize the state
const initializeState = () => {
    const savedDarkMode = localStorage.getItem("darkMode");
    const isDarkMode = savedDarkMode === "true";
    setDarkMode(isDarkMode);
};

// Initialize the state when the page loads
initializeState();

menuBtn.addEventListener("click", () => {
    sideMenu.style.display = "block";
    localStorage.setItem("sideMenu", "block");
});

closeBtn.addEventListener("click", () => {
    sideMenu.style.display = "none";
    localStorage.setItem("sideMenu", "none");
});

darkMode.addEventListener("click", () => {
    const isDarkMode = !document.body.classList.contains("dark-mode-variables");
    setDarkMode(isDarkMode);
});

// Restore the side menu state
const savedSideMenu = localStorage.getItem("sideMenu");
if (savedSideMenu) {
    sideMenu.style.display = savedSideMenu;
}

Orders.forEach((order) => {
    const tr = document.createElement("tr");
    const trContent = `
        <td>${order.productName}</td>
        <td>${order.productMethod}</td>
        <td>${order.endpoint}</td>
        <td>${order.paymentStatus}</td>
        <td class="${order.status === "Declined" ? "danger" : order.status === "Pending" ? "warning" : "primary"}">${order.status}</td>
        <td class="primary">Details</td>
    `;
    tr.innerHTML = trContent;
    document.querySelector("table tbody").appendChild(tr);
});
