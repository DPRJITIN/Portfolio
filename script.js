document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = themeToggle ? themeToggle.querySelector('i') : null;

    function initTheme(){
        if(!themeToggle) return;

        const savedTheme = localStorage.getItem('theme');
        if(savedTheme){
            body.className = savedTheme;
            updateThemeIcon(savedTheme === 'dark-mode');
        }

        themeToggle.addEventListener('click', () => {
            const isDarkMode = body.classList.contains('dark-mode');
            body.className = isDarkMode ? 'light-mode' : 'dark-mode';
            updateThemeIcon(!isDarkMode);
            localStorage.setItem('theme', body.className);
        });
    }

    function updateThemeIcon(isDarkMode){
        if(themeIcon){
            themeIcon.className = isDarkMode ? 'fas fa-moon' : 'fas fa-sun';
        }
    }

    initTheme();
});