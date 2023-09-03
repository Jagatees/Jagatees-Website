// JavaScript to handle filter tab functionality
const filterTabs = document.querySelectorAll('.filter-tab');
const filterCards = document.querySelectorAll('.filter-card');

filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const category = tab.getAttribute('data-category');
        filterTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        filterCards.forEach(card => {
            if (category === 'all' || card.getAttribute('data-category') === category) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});