
const savedTheme = localStorage.getItem("theme");


function setTheme(theme) {
    if (theme === 'system-mode') {
        const systemPreference = window.matchMedia('(prefers-color-scheme: dark)');
        theme = systemPreference.matches ? 'dark-mode' : 'light-mode';
    }
    
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
    if (theme === 'light-mode') {
        document.getElementById('hdr').style.backgroundColor = 'rgb(215, 215, 215, 0.2)';
        document.documentElement.style.setProperty('--hd-color', 'rgb(215, 215, 215, 0.2)');
    }
  
  else if (theme === 'dark-mode') {
        document.getElementById('hdr').style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
        document.documentElement.style.setProperty('--hd-color', 'rgba(255, 255, 255, 0.2)');
    }

  
  

    const ncssLogo = document.getElementById('ncsslogo');
    if (theme === 'light-mode') {
        // Zmień jasność obrazka na 0% 
        ncssLogo.style.filter = 'brightness(0%)';
    } else if (theme === 'dark-mode') {
        // Zmień kolor obrazka na #333333 
        ncssLogo.style.filter = 'brightness(100%)';
        ncssLogo.style.fill = '#333333';
    }
}


if (savedTheme) {
    setTheme(savedTheme);
} else {
    setTheme('system-mode');
}
