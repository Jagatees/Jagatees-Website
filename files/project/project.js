function filterCards(tag) {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
      const tags = card.getAttribute('data-tags').split(' ');
      if (tags.includes(tag) || tag === 'all') {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  }