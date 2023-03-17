const questions = document.querySelectorAll('.question');

questions.forEach((question) => {
  const btn = question.querySelector('.question-btn');
  console.log(question.classList);
  btn.addEventListener('click', () => {
    question.classList.toggle('show-text');
  });
});
