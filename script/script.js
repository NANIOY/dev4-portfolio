document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const mainMenu = document.getElementById('main-menu');

    // Function to toggle the 'active' class and prevent event propagation
    function toggleMainMenu() {
        mainMenu.classList.toggle('active');
    }

    menuToggle.addEventListener('click', function (event) {
        event.stopPropagation();
        toggleMainMenu();
    });

    // Clicking anywhere on the page should close the menu
    document.addEventListener('click', function (event) {
        if (mainMenu.classList.contains('active') && event.target !== menuToggle) {
            toggleMainMenu();
        }
    });


    const imageContainers = document.querySelectorAll('.image-container');

    imageContainers.forEach((container) => {
        container.addEventListener('mouseenter', () => {
            const img = container.querySelector('.image-zoom');
            if (img) {
                img.style.transform = 'scale(1.15)';
            }
        });

        container.addEventListener('mouseleave', () => {
            const img = container.querySelector('.image-zoom');
            if (img) {
                img.style.transform = 'scale(1)';
            }
        });
    });

});