const filter = $('#filterBtn');
const filterContainer = document.querySelector('.filter-container');

filter.on('click', () => {
    console.log('Clicked!')
    if (filterContainer.classList.contains('filter-container')) {
        filterContainer.removeAttribute('class', 'filter-container')
        filterContainer.setAttribute('class', 'filter-container--active');
    } else {
        filterContainer.setAttribute('class', 'filter-container');
    }
})


