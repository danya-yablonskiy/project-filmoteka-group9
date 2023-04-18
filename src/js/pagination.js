import fetchPopularMovies from './fetchPopularMovies';
import fetchKeyword from './fetchKeyword';
import { appendMarkup } from './renderMarkupCards';
// import Pagination from '../tui-pagination/dist/tui-pagination';
// import '../tui-pagination/dist/tui-pagination.css';


const headerClass = document.querySelector("header");

export function clearMarkup() {
    const gallery = document.querySelector('.gallery');
    gallery.innerHTML = '';
};

function reloadOnPageChange() {
    const currentPage = document.querySelector('.tui-is-selected');
    currentPage.setAttribute("data-page", currentPage.textContent);
    const name = document.querySelector('.search-form__input').value;
    
    if (headerClass.classList.contains("keyword")) {
        fetchKeyword(name ,currentPage.dataset.page).then(data => appendMarkup(data.results));
       
    } else if (headerClass.classList.contains("homePage")) {
       fetchPopularMovies(currentPage.dataset.page).then(data => appendMarkup(data.results));
   }
};

export default function createPagination(data) {
    const pagination = new Pagination(document.getElementById('pagination'), {
        page: data.page,
        totalItems: data.total_pages,
        itemsPerPage: 10,
        usageStatistics: false,
        visiblePages: 5,
        centerAlign: true,
        template: {
            page: '<a href="#" class="tui-page-btn">{{page}}</a>',
            currentPage:
                '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
            moveButton:
                '<a href="#" class="tui-page-btn tui-{{type}} custom-class-{{type}}">' +
                '<span class="tui-ico-{{type}}">{{type}}</span>' +
                '</a>',
            disabledMoveButton:
                '<span class="tui-page-btn tui-is-disabled tui-{{type}} custom-class-{{type}}">' +
                '<span class="tui-ico-{{type}}">{{type}}</span>' +
                '</span>',
            moreButton:
                '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip custom-class-{{type}}">' +
                '<span class="tui-ico-ellip">...</span>' +
                '</a>',
        },
        
    });
    pagination.on('afterMove', () => {
        try {
            clearMarkup();
            reloadOnPageChange();
    } catch (error) {
        console.log(error);
    }
});
}