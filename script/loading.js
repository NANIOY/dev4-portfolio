document.addEventListener('DOMContentLoaded', function () {
    const loadingScreen = createLoadingScreen();
    document.body.appendChild(loadingScreen);

    window.addEventListener('popstate', function (event) {
        if (event.state && event.state.pageName === 'loaded') {
            // Simulate a loading period and hide the loading screen
            loadingScreen.style.display = 'block';
            setTimeout(function () {
                loadingScreen.style.opacity = 0;
                loadingScreen.addEventListener('transitionend', function () {
                    loadingScreen.style.display = 'none';
                }, { once: true });
            }, 0);
        }
    });

    // Simulate the initial loading
    loadingScreen.style.display = 'block';
    setTimeout(function () {
        loadingScreen.style.opacity = 0;
        loadingScreen.addEventListener('transitionend', function () {
            loadingScreen.style.display = 'none';
            // After the initial loading, set the page name for popstate
            window.history.replaceState({ pageName: 'loaded' }, '');
        }, { once: true });
    }, 0);
});

function createLoadingScreen() {
    const loadingScreen = document.createElement('div');
    loadingScreen.classList.add('loading-screen');
    return loadingScreen;
}
