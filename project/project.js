// Function to filter cards based on the selected category
function filterCards(category) {
  const cards = document.querySelectorAll('.card');

  cards.forEach((card) => {
    const tags = card.getAttribute('data-tags').split(' ');
    if (category === 'all' || tags.includes(category)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

// Add event listeners to filter buttons
const filterButtons = document.querySelectorAll('.filter-button');

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const category = button.getAttribute('data-filter');
    filterCards(category);
  });
});

// Initially, show all cards
filterCards('all');

