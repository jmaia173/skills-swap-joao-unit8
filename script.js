// Skill Swap scripts

// Toggle expand/collapse on a skill card when it is clicked.
// (AI-assisted: event listener loop and classList.toggle pattern)
const skillCards = document.querySelectorAll('.skill-card');

skillCards.forEach((card) => {
  card.addEventListener('click', () => {
    card.classList.toggle('expanded');
  });
});