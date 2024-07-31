(function () {
    "use strict";

    /**
    * 3D Box rotatation and reset helper function
    */
    const box = document.querySelector('.box');

    box.addEventListener('mouseover', () => {
        box.classList.add('reset'); // Reset box to neutral position
        setTimeout(() => box.classList.add('pause'), 500); // Add pause class after reset animation
    });

    box.addEventListener('mouseout', () => {
        box.classList.remove('pause', 'reset'); // Remove classes to resume rotation
    });

    /**
     * Theme selector helper function
     */
    document.addEventListener("DOMContentLoaded", function () {
        const themeButtons = document.querySelectorAll(".theme-button");
        const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light';

        document.body.setAttribute("data-theme", currentTheme);
        themeButtons.value = currentTheme;

        themeButtons.forEach(button => {
            button.addEventListener("click", function () {
                const selectedTheme = button.getAttribute("data-theme");
                document.body.setAttribute("data-theme", selectedTheme);
                localStorage.setItem('theme', selectedTheme);
            });
        });
    });

    /**
     * Hero type effect
     */
    const typed = select('.typed')
    if (typed) {
        let typed_strings = typed.getAttribute('data-typed-items')
        typed_strings = typed_strings.split(',')
        new Typed('.typed', {
            strings: typed_strings,
            loop: true,
            typeSpeed: 100,
            backSpeed: 50,
            backDelay: 2000
        });
    }
})()