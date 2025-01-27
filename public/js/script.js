// Dark mode toggle functionality
const darkModeToggle = document.getElementById('dark-mode-toggle');

darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    // Save the current mode in localStorage so it persists after page reload
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
        darkModeToggle.textContent = '🌙';  // Change the icon when in dark mode
    } else {
        localStorage.setItem('theme', 'light');
        darkModeToggle.textContent = '🌞';  // Change the icon when in light mode
    }
});

// Check localStorage for theme preference on page load
window.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
        darkModeToggle.textContent = '🌙';
    } else {
        document.body.classList.remove('dark-mode');
        darkModeToggle.textContent = '🌞';
    }
});
