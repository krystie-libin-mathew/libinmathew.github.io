(function () {
    "use strict";

    /**
    * 3D Box rotatation and reset helper function
    */
    const box = document.querySelector('.box');

    box.addEventListener('mouseover', () => {
        box.classList.add('pause'); // Pause the rotation
    });

    box.addEventListener('mouseout', () => {
        box.classList.remove('pause'); // Resume the rotation
    });


    /**
    * Color Box position on top and toggle helper function
    */
    const togglePalette = document.getElementById('toggle-palette');
    const themePalette = document.getElementById('theme-palette');

    function togglePaletteVisibility() {
        themePalette.classList.toggle('collapsed');
        // const isCollapsed = themePalette.classList.contains('collapsed');
        // togglePalette.querySelector('span').innerHTML = isCollapsed ? '&#9660;' : '&#9650;'; // Change arrow direction
    }

    // Initialize with palette visible or hidden based on your preference
    themePalette.classList.add('collapsed'); // Start hidden

    togglePalette.addEventListener('click', togglePaletteVisibility);

    document.querySelectorAll('.theme-button').forEach(button => {
        button.addEventListener('click', function () {
            const theme = this.getAttribute('data-theme');
            document.documentElement.setAttribute('data-theme', theme);

            // Collapse the palette after a theme is selected
            themePalette.classList.add('collapsed');
            togglePalette.querySelector('span').innerHTML = '🎨'; // Change to down arrow
        });
    });

    /**
    * Navbar Switch from Vertical to Horizontal helper function
    */
    document.addEventListener('DOMContentLoaded', function () {
        const navbar = document.querySelector('#navbar');
        const navLinks = document.querySelectorAll('.navbar a');

        // Function to set the navbar to vertical
        function setNavbarToVertical() {
            navbar.classList.remove('horizontal-navbar');
            navbar.classList.add('vertical-navbar');
        }

        // Function to set the navbar to horizontal
        function setNavbarToHorizontal() {
            navbar.classList.remove('vertical-navbar');
            navbar.classList.add('horizontal-navbar');
        }

        // Initial setup: Set navbar to vertical
        setNavbarToVertical();

        // Add click event listener to each link
        navLinks.forEach(link => {
            link.addEventListener('click', function () {
                const section = this.getAttribute('data-section');
                if (section === 'home') {
                    setNavbarToVertical();
                } else {
                    setNavbarToHorizontal();
                }
            });
        });

        // Add event listener for hash change in URL
        window.addEventListener('hashchange', function () {
            const section = window.location.hash.replace('#', '');
            if (section === 'home' || section === '') {
                setNavbarToVertical();
            } else {
                setNavbarToHorizontal();
            }
        });
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
})()