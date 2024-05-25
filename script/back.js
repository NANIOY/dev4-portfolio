function setupBackButtons() {
  const backButtons = document.querySelectorAll('.back-button');

  backButtons.forEach(function(backButton) {
    backButton.addEventListener('click', function() {
      history.back();
    });
  });
}

document.addEventListener('DOMContentLoaded', setupBackButtons);