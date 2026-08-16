const questionButtons = document.querySelectorAll('.faq-question');

questionButtons.forEach(function (button) {

  button.addEventListener('click', function () {

    const answer = button.nextElementSibling;

    const icon = button.querySelector('.faq-icon');

    const isHidden = answer.classList.contains('hidden');

    if (isHidden) {

      answer.classList.remove('hidden');
      button.setAttribute('aria-expanded', 'true');
      icon.src = './images/icon-minus.svg';
    } else {

      answer.classList.add('hidden');
      button.setAttribute('aria-expanded', 'false');
      icon.src = './images/icon-plus.svg';
    }

  });

});