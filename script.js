const savedTheme = localStorage.getItem("theme");

function setTheme(theme) {
    if (theme === 'system-mode') {
        const systemPreference = window.matchMedia('(prefers-color-scheme: dark)');
        theme = systemPreference.matches ? 'dark-mode' : 'light-mode';
    }

    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);

    const hdr = document.getElementById('hdr');
    const ncssLogo = document.getElementById('ncsslogo');

    if (theme === 'light-mode') {
        hdr.style.backgroundColor = 'rgb(215, 215, 215, 0.2)';
        document.documentElement.style.setProperty('--hd-color', 'rgb(215, 215, 215, 0.2)');
        ncssLogo.style.filter = 'brightness(0%)';
    } else if (theme === 'dark-mode') {
        hdr.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
        document.documentElement.style.setProperty('--hd-color', 'rgba(255, 255, 255, 0.2)');
        ncssLogo.style.filter = 'brightness(100%)';
        ncssLogo.style.fill = '#333333';
    }
}

if (savedTheme) {
    setTheme(savedTheme);
} else {
    setTheme('system-mode');
}
