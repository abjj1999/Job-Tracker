const filter = $('#filterBtn');
const filterBtn = $('.filterSearchBtn');
const filterContainer = document.querySelector('.filter-container');

filter.on('click', () => {
    const search = document.querySelector('#search');
    if(window.location.href.includes('?search')) {
        const searchArr = window.location.search.split('/');
        const searchTextArr = searchArr[searchArr.length - 1].split('=')[1];
        const searchFinal = searchTextArr.split('%20');
        const searchText = searchFinal.join(' ');
        search.value = searchText;
    }

    if (filterContainer.classList.contains('filter-container')) {
        filterContainer.removeAttribute('class', 'filter-container')
        filterContainer.setAttribute('class', 'filter-container--active');
    } else {
        filterContainer.setAttribute('class', 'filter-container');
    }
})

filterBtn.on('click', () => {
    const search = document.querySelector('#search').value.trim();
    if(search) {
        console.log(search)
        document.location.replace(`/?search=${search}`);
    } else {
        document.location.replace(`/`);
    }
})

