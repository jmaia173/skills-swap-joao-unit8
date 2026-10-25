const {
  filterSkillsByCategory,
  calculateTotalCost
} = require('../skillswap-functions');

describe('filterSkillsByCategory', () => {
  const skills = [
    { title: 'Python Tutoring', category: 'Programming', price: 20 },
    { title: 'Guitar Lessons', category: 'Music', price: 15 },
    { title: 'Resume Review', category: 'Career', price: 0 },
    { title: 'Web Development', category: 'Programming', price: 25 }
  ];

  test('filters skills by category', () => {
    expect(filterSkillsByCategory(skills, 'Programming')).toEqual([
      { title: 'Python Tutoring', category: 'Programming', price: 20 },
      { title: 'Web Development', category: 'Programming', price: 25 }
    ]);
  });

  test('returns all skills when category is "All"', () => {
    expect(filterSkillsByCategory(skills, 'All')).toEqual(skills);
  });

  test('returns an empty array when no skills match', () => {
    expect(filterSkillsByCategory(skills, 'Cooking')).toEqual([]);
  });
});

describe('calculateTotalCost', () => {
  test('returns the correct total for different rates and hours', () => {
    expect(calculateTotalCost(20, 2)).toBe(40);
    expect(calculateTotalCost(15, 3)).toBe(45);
    expect(calculateTotalCost(30, 1)).toBe(30);
  });

  test('returns 0 for free sessions', () => {
    expect(calculateTotalCost(0, 3)).toBe(0);
  });

  test('returns 0 for zero hours', () => {
    expect(calculateTotalCost(20, 0)).toBe(0);
  });

  test('handles decimal hours', () => {
    expect(calculateTotalCost(25, 1.5)).toBe(37.5);
    expect(calculateTotalCost(20, 0.5)).toBe(10);
  });
});