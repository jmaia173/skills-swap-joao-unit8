function filterSkillsByCategory(skills, category) {
  if (category === 'All') {
    return skills;
  }
  return skills.filter((skill) => skill.category === category);
}

// Export for Jest (Node) only; the browser has no `module`
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { filterSkillsByCategory };
}