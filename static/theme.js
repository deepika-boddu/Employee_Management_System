document.addEventListener("DOMContentLoaded", () => {
    const saved = localStorage.getItem("theme") || "light";
    document.documentElement.setAttribute("data-theme", saved);

    const btn = document.getElementById("themeBtn");

    function updateButton() {
        btn.textContent =
            document.documentElement.getAttribute("data-theme") === "dark"
            ? "☀ Light"
            : "🌙 Dark";
    }

    window.toggleTheme = function () {
        const current = document.documentElement.getAttribute("data-theme");
        const next = current === "dark" ? "light" : "dark";

        document.documentElement.setAttribute("data-theme", next);
        localStorage.setItem("theme", next);
        updateButton();
    };

    updateButton();
});