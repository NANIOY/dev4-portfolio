document.addEventListener('DOMContentLoaded', function () {
    const projectImageLinks = document.querySelectorAll('.project-image');
    const rightButton = document.querySelector('.right');
    const leftButton = document.querySelector('.left');
    const bulletDivs = document.querySelectorAll('.bullet');
    const classNames = ['first-image', 'second-image', 'third-image', 'fourth-image'];
    let rotationInterval;
    let currentIndex = 0;
    let touchStartX = 0;
    let touchEndX = 0;

    updatePageElements();

    function handleMouseEnter() {
        pauseRotation();
    }

    function handleMouseLeave() {
        startRotation();
    }
    // Add event listeners to the project image
    projectImageLinks.forEach((projectImageLink) => {
        projectImageLink.addEventListener('mouseenter', handleMouseEnter);
        projectImageLink.addEventListener('mouseleave', handleMouseLeave);
    });

    // Add event listeners to the pagination container
    const paginationContainer = document.querySelector('.pagination');
    paginationContainer.addEventListener('mouseenter', handleMouseEnter);
    paginationContainer.addEventListener('mouseleave', handleMouseLeave);


    rightButton.addEventListener('click', function () {
        handleNavigation(1);
    });

    leftButton.addEventListener('click', function () {
        handleNavigation(-1);
    });

    bulletDivs.forEach((bullet, index) => {
        bullet.addEventListener('click', function () {
            currentIndex = index;
            updatePageElements();
        });
    });

    projectImageLinks.forEach((projectImageLink) => {
        projectImageLink.addEventListener('touchstart', function (event) {
            touchStartX = event.touches[0].clientX;
            pauseRotation();
        }, { passive: true });

        projectImageLink.addEventListener('touchend', function (event) {
            touchEndX = event.changedTouches[0].clientX;
            handleSwipe();
            startRotation();
        }, { passive: true });
    });

    function handleNavigation(offset) {
        currentIndex = (currentIndex + offset + classNames.length) % classNames.length;
        updatePageElements();
    }

    function handleSwipe() {
        const minSwipeDistance = 50;
        const swipeDistance = touchEndX - touchStartX;
        if (swipeDistance > minSwipeDistance) {
            handleNavigation(-1);
        } else if (swipeDistance < -minSwipeDistance) {
            handleNavigation(1);
        }
    }

    function updatePageElements() {
        updateImage();
        updateLink();
        updateBulletActive();
        updateProjectName();
        pauseRotation();
        startRotation();
    }

    function updateImage() {
        const projectImages = document.querySelectorAll('.project-image');

        // Reset opacity for all images
        projectImages.forEach((image) => {
            image.style.opacity = 0;
        });

        // Set the new active image's opacity to 1
        const newImage = projectImages[currentIndex];
        newImage.style.opacity = 1;

        updateBulletActive();
    }

    function updateBulletActive() {
        bulletDivs.forEach((bullet, i) => {
            bullet.classList.toggle('bullet-active', i === currentIndex);
        });
    }

    function pauseRotation() {
        clearInterval(rotationInterval);
    }

    function startRotation() {
        clearInterval(rotationInterval);
        rotationInterval = setInterval(function () {
            handleNavigation(1);
        }, 3600);
    }


    function updateLink() {
        const currentImageLink = [
            'https://studio-orbyq.com/projects/kroo',
            'https://studio-orbyq.com/projects/ixpo',
            'https://studio-orbyq.com/projects/copoll',
            'https://studio-orbyq.com/projects/studio_orbyq',
        ][currentIndex];

        projectImageLinks.forEach((projectImageLink) => {
            projectImageLink.setAttribute('href', currentImageLink);
        });
    }

    function updateProjectName() {
        const projectNameElement = document.querySelector('.heading-title');
        if (projectNameElement) {
            projectNameElement.textContent = classNames[currentIndex] === 'first-image'
                ? 'kroo'
                : classNames[currentIndex] === 'second-image'
                    ? 'ixpo'
                    : classNames[currentIndex] === 'third-image'
                        ? 'copoll'
                        : 'Studio Orbyq';

            toggleThirdChild();
        }
    }

    function toggleThirdChild() {
        const ulElement = document.querySelector('.icon-list-items');
        const thirdChild = ulElement.children[2];
        thirdChild.style.display = classNames[currentIndex] === 'first-image' || classNames[currentIndex] === 'second-image' ? '' : 'none';
    }
});