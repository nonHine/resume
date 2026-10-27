function checkQuiz(quizId, correctIndex, explanation) {
  const container = document.getElementById(quizId);
  if (!container) return;
  const options = container.querySelectorAll('.quiz-option');
  const targetIndex = Number(correctIndex);
  if (isNaN(targetIndex) || targetIndex < 0 || targetIndex >= options.length) {
    console.error(`Invalid correctIndex (${correctIndex}) for quiz: ${quizId}`);
    return;
  }

  // Clear previous correct/wrong classes on all options
  options.forEach(opt => {
    opt.classList.remove('correct', 'wrong', 'incorrect');
  });

  let selectedIndex = -1;
  options.forEach((opt, idx) => {
    if (opt.classList.contains('selected')) {
      selectedIndex = idx;
    }
  });

  const feedback = container.querySelector('.quiz-feedback');
  if (selectedIndex === -1) {
    if (typeof window !== 'undefined' && window.Eng1Sound) {
      window.Eng1Sound.playWrong();
    }
    if (feedback) {
      feedback.className = 'quiz-feedback incorrect';
      feedback.style.display = 'block';
      feedback.innerHTML = '⚠️ กรุณาเลือกคำตอบก่อนกดตรวจครับ';
    }
    return;
  }

  if (selectedIndex === targetIndex) {
    if (typeof window !== 'undefined' && window.Eng1Sound) {
      window.Eng1Sound.playCorrect();
    }
    if (options[targetIndex]) {
      options[targetIndex].classList.add('correct');
    }
    if (feedback) {
      feedback.className = 'quiz-feedback correct';
      feedback.style.display = 'block';
      feedback.innerHTML = '<strong>✅ ถูกต้อง!</strong> ' + explanation;
    }
  } else {
    if (typeof window !== 'undefined' && window.Eng1Sound) {
      window.Eng1Sound.playWrong();
    }
    if (options[selectedIndex]) {
      options[selectedIndex].classList.add('wrong');
    }
    if (options[targetIndex]) {
      options[targetIndex].classList.add('correct');
    }
    if (feedback) {
      feedback.className = 'quiz-feedback incorrect';
      feedback.style.display = 'block';
      feedback.innerHTML = '<strong>❌ ยังไม่ถูกต้อง</strong> ' + explanation;
    }
  }
}

function selectOption(el) {
  if (!el) return;
  if (typeof window !== 'undefined' && window.Eng1Sound) {
    window.Eng1Sound.playClick();
  }
  const parent = el.closest('.quiz-options');
  if (parent) {
    parent.querySelectorAll('.quiz-option').forEach(opt => {
      opt.classList.remove('selected', 'correct', 'wrong', 'incorrect');
    });
  }
  el.classList.add('selected');

  // Reset feedback when selecting a new option so stale messages disappear
  const card = el.closest('.quiz-card');
  if (card) {
    const feedback = card.querySelector('.quiz-feedback');
    if (feedback) {
      feedback.className = 'quiz-feedback';
      feedback.style.display = 'none';
      feedback.innerHTML = '';
    }
  }
}
