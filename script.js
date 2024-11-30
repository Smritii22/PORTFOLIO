document.addEventListener("DOMContentLoaded", () => {
    const themeSwitcher = document.getElementById("theme-switcher");
    let isDarkTheme = false;

    const lightTheme = {
        '--bg-color': '#f4f4f4',
        '--text-color': '#333',
        '--primary-color': '#6a11cb',
        '--secondary-color': '#2575fc',
        '--button-bg': '#2575fc',
        '--button-hover-bg': '#6a11cb',
    };

    const darkTheme = {
        '--bg-color': '#1e1e1e',
        '--text-color': '#f4f4f4',
        '--primary-color': '#ff8c00',
        '--secondary-color': '#ff4500',
        '--button-bg': '#ff4500',
        '--button-hover-bg': '#ff8c00',
    };

    themeSwitcher.addEventListener("click", () => {
        const theme = isDarkTheme ? lightTheme : darkTheme;
        for (const [key, value] of Object.entries(theme)) {
            document.documentElement.style.setProperty(key, value);
        }
        isDarkTheme = !isDarkTheme;
        themeSwitcher.textContent = isDarkTheme ? "Switch to Light Theme" : "Switch to Dark Theme";
    });
});