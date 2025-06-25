// Theme toggle function
document.addEventListener('DOMContentLoaded', () => {
    const themeToggler = document.querySelector(".theme-toggler");

    const applySavedTheme = () => {
        const isDarkMode = localStorage.getItem('dark-theme') === 'true';
        if (isDarkMode) {
            document.body.classList.add('dark-theme');
            themeToggler.querySelector('span:nth-child(1)').classList.add('active');
            themeToggler.querySelector('span:nth-child(2)').classList.remove('active');
        } else {
            document.body.classList.remove('dark-theme');
            themeToggler.querySelector('span:nth-child(1)').classList.remove('active');
            themeToggler.querySelector('span:nth-child(2)').classList.add('active');
        }
    }

    // Set the initial theme based on localStorage
    applySavedTheme();

    // Toggle theme function
    themeToggler.onclick = function () {
        // Toggle dark theme class on body
        document.body.classList.toggle('dark-theme');

        // Toggle active class on the theme toggler spans
        themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
        themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');

        // Save the theme preference in localStorage
        localStorage.setItem('dark-theme', document.body.classList.contains('dark-theme'));
    }

})