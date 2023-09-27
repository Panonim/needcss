const savedTheme = localStorage.getItem("theme");

function setTheme(theme) {
    if (theme === 'system-mode') {
        const systemPreference = window.matchMedia('(prefers-color-scheme: dark)');
        theme = systemPreference.matches ? 'dark-mode' : 'light-mode';
    }
    
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
    
    const hdr = document.getElementById('hdr');
    if (theme === 'light-mode') {
        hdr.style.backgroundColor = 'rgb(215, 215, 215, 0.2)';
        document.documentElement.style.setProperty('--hd-color', 'rgb(215, 215, 215, 0.2)');
    } else if (theme === 'dark-mode') {
        hdr.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
        document.documentElement.style.setProperty('--hd-color', 'rgba(0, 0, 0, 0.2)');
    }

    const ncssLogo = document.getElementById('ncsslogo');
    if (theme === 'light-mode') {
        // Set image brightness to 0%
        ncssLogo.style.filter = 'brightness(0%)';
    } else if (theme === 'dark-mode') {
        // Set image color to #333333 and reset brightness
        ncssLogo.style.filter = 'brightness(100%)';
        ncssLogo.style.fill = '#333333'; // Assuming 'ncsslogo' is an SVG image
    }
}

if (savedTheme) {
    setTheme(savedTheme);
} else {
    setTheme('system-mode');
}
