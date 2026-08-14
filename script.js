// Step 1: Grab every question button on the page
const questionButtons = document.querySelectorAll('.faq-question');

// Step 2: Loop through each button and set up a click event on it
questionButtons.forEach(function (button) {

  button.addEventListener('click', function () {

    // Step 3: Find this button's matching answer
    // (the <p class="faq-answer"> sitting right after the button)
    const answer = button.nextElementSibling;

    // Step 4: Find this button's icon (the plus/minus image inside it)
    const icon = button.querySelector('.faq-icon');

    // Step 5: Check if the answer is CURRENTLY hidden
    const isHidden = answer.classList.contains('hidden');

    if (isHidden) {
      // It was closed, so OPEN it
      answer.classList.remove('hidden');
      button.setAttribute('aria-expanded', 'true');
      icon.src = './images/icon-minus.svg';
    } else {
      // It was open, so CLOSE it
      answer.classList.add('hidden');
      button.setAttribute('aria-expanded', 'false');
      icon.src = './images/icon-plus.svg';
    }

  });

});