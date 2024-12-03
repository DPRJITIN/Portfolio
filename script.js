document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = themeToggle ? themeToggle.querySelector('i') : null;

    //Theme
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

    //Skills Carousel
    function initSkillsCarousel(){
        const prevButton = document.querySelector('.prev');
        const nextButton = document.querySelector('.next');
        const skillCards = document.querySelectorAll('.skill-card');

        let currentIndex = 0;
        let carouselInterval;

        function showCard(index){
            skillCards.forEach((card, i) => {
                card.style.display = i === index ? 'block' : 'none';
            });
        }

        function advanceCarousel(){
            currentIndex = (currentIndex + 1) % skillCards.length;
            showCard(currentIndex);
        }

        function resetCarouselInterval(){
            clearInterval(carouselInterval);
            carouselInterval = setInterval(advanceCarousel, 3000);
        }

        prevButton.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + skillCards.length) % skillCards.length;
            showCard(currentIndex);
            resetCarouselInterval();
        });

        nextButton.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % skillCards.length;
            showCard(currentIndex);
            resetCarouselInterval();
        });

        showCard(currentIndex);
        carouselInterval = setInterval(advanceCarousel, 3000);
    }

    //Initialise Functions
    initTheme();
    initSkillsCarousel();
});