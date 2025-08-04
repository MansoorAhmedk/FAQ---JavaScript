const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach((item) => {
  const question = item.querySelector('.faq-question');
  const answer = item.querySelector('.faq-answer');
  const icon = item.querySelector('.icon');

  question.addEventListener('click', () => {
    // Close others
    faqItems.forEach((otherItem) => {
      if (otherItem !== item) {
        otherItem.querySelector('.faq-answer').style.maxHeight = null;
        otherItem.querySelector('.icon').classList.remove('rotate');
        otherItem.querySelector('.icon').classList.replace('fa-minus', 'fa-plus');
      }
    });

    const isOpen = answer.style.maxHeight;
    if (isOpen) {
      answer.style.maxHeight = null;
      icon.classList.remove('rotate');
      icon.classList.replace('fa-minus', 'fa-plus');
    } else {
      answer.style.maxHeight = answer.scrollHeight + "px";
      icon.classList.add('rotate');
      icon.classList.replace('fa-plus', 'fa-minus');
    }
  });
});
