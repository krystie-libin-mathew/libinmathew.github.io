(function () {
    "use strict";

    // COLOR MODE
    document.addEventListener('DOMContentLoaded', function () {
        const colorModeSwitch = document.getElementById('colorModeSwitch');
        const toggleIcon = document.getElementById('toggleIcon');

        colorModeSwitch.addEventListener('click', function (event) {
            event.preventDefault();

            const body = document.body;

            if (body.classList.contains('light-mode')) {
                body.classList.remove('light-mode');
                body.classList.add('dark-mode');
                toggleIcon.classList.remove('bi-moon');
                toggleIcon.classList.add('bi-sun');
            } else {
                body.classList.remove('dark-mode');
                body.classList.add('light-mode');
                toggleIcon.classList.remove('bi-sun');
                toggleIcon.classList.add('bi-moon');
            }
        });
    });

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
    document.getElementById('toggle-palette').addEventListener('click', function () {
        const themePalette = document.getElementById('theme-palette');
        const icon = document.getElementById('icon-toggle');
        const topBar = document.getElementById('topbar');

        // Toggle the palette visibility
        themePalette.classList.toggle('show');

        // Change the top bar background when palette is shown
        if (themePalette.classList.contains('show')) {
            icon.classList.remove('bi-palette');
            icon.classList.add('bi-palette-fill');
        } else {
            icon.classList.remove('bi-palette-fill');
            icon.classList.add('bi-palette');
        }
    });

    /**
    * Navbar Switch from Vertical to Horizontal helper function
    */
    document.addEventListener('DOMContentLoaded', function () {
        const navbar = document.querySelector('#navbar');
        const navLinks = document.querySelectorAll('.navbar a');
        const topBar = document.querySelector('#topbar');

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

        // Function to show the top bar
        function showTopBar() {
            topBar.style.display = 'flex';
        }

        // Function to hide the top bar
        function hideTopBar() {
            topBar.style.display = 'none';
        }

        // Initial setup: Set navbar to vertical and hide top bar
        setNavbarToVertical();
        showTopBar();

        // Add click event listener to each link
        navLinks.forEach(link => {
            link.addEventListener('click', function () {
                const section = this.getAttribute('data-section');
                if (section === 'home') {
                    setNavbarToVertical();
                    showTopBar();
                } else {
                    setNavbarToHorizontal();
                    hideTopBar();
                }
            });
        });

        // Add event listener for hash change in URL
        window.addEventListener('hashchange', function () {
            const section = window.location.hash.replace('#', '');
            if (section === 'home' || section === '') {
                setNavbarToVertical();
                showTopBar();
            } else {
                setNavbarToHorizontal();
                hideTopBar();
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