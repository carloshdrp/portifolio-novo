export function initTheme() {
  const theme =
    localStorage.getItem("theme") ??
    (window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light");

  document.documentElement.classList.toggle("dark", theme === "dark");
}

export function setupThemeToggle() {
  const themeToggle = document.getElementById("theme-toggle");

  themeToggle?.addEventListener("click", () => {
    const isDark = document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
  });
}
