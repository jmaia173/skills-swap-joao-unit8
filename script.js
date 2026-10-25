// Skill Swap scripts

const skills = [
  {
    title: 'Guitar Lessons',
    category: 'Music',
    price: 20,
    description: 'Learn chords, strumming, and your first songs.',
    provider: 'Maria S.',
    details: 'Beginner friendly. Sessions are 1 hour, in person or online. Bring your own guitar.'
  },
  {
    title: 'Web Design Basics',
    category: 'Programming',
    price: 25,
    description: 'Build your first website with HTML and CSS.',
    provider: 'Daniel K.',
    details: 'Covers layout, styling, and responsive design. Laptop required.'
  },
  {
    title: 'Python Tutoring',
    category: 'Programming',
    price: 20,
    description: 'Learn Python fundamentals and problem solving.',
    provider: 'Sam T.',
    details: 'Variables, loops, functions, and data structures. Laptop required.'
  },
  {
    title: 'Resume Review',
    category: 'Career',
    price: 0,
    description: 'Get feedback to make your resume stand out.',
    provider: 'Priya N.',
    details: 'Free 30-minute review focused on formatting, wording, and impact.'
  },
  {
    title: 'Portuguese Conversation',
    category: 'Language',
    price: 15,
    description: 'Practice speaking with a native speaker.',
    provider: 'Joao M.',
    details: 'Casual conversation practice for all levels. Focus on everyday vocabulary and pronunciation.'
  },
  {
    title: 'Soccer Training',
    category: 'Sports',
    price: 30,
    description: 'Improve your passing, dribbling, and fitness.',
    provider: 'Alex R.',
    details: 'Drills for all levels, focused on technique and game awareness. Cleats recommended.'
  }
];

const cardContainer = document.getElementById('card-container');
const filterBar = document.getElementById('filter-bar');

function formatPrice(price) {
  return price === 0 ? 'Free' : `$${price} / hour`;
}

function renderSkills(list) {
  if (list.length === 0) {
    cardContainer.innerHTML = '<p class="empty-message">No skills found in this category.</p>';
    return;
  }

  cardContainer.innerHTML = list
    .map(
      (skill) => `
        <article class="skill-card">
          <h3>${skill.title}</h3>
          <p class="description">${skill.description}</p>
          <p class="price">${formatPrice(skill.price)}</p>
          <p class="provider">Provider: ${skill.provider}</p>
          <div class="details">
            <p>${skill.details}</p>
          </div>
        </article>`
    )
    .join('');
}

// Filter buttons: call filterSkillsByCategory and re-render
filterBar.addEventListener('click', (event) => {
  const button = event.target.closest('.filter-btn');
  if (!button) return;

  filterBar.querySelectorAll('.filter-btn').forEach((btn) => btn.classList.remove('active'));
  button.classList.add('active');

  renderSkills(filterSkillsByCategory(skills, button.dataset.category));
});

// Toggle expand/collapse on a skill card (event delegation so it works after re-render)
cardContainer.addEventListener('click', (event) => {
  const card = event.target.closest('.skill-card');
  if (card) {
    card.classList.toggle('expanded');
  }
});

// Initial render
renderSkills(skills);