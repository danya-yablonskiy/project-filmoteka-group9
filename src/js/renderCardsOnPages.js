import { clearMarkup } from './pagination';
import { appendMarkup } from './renderMarkupCards';
import fetchPopularMovies from './fetchPopularMovies';
import fetchKeyword from './fetchKeyword';
import  createPagination  from './pagination';

const headerClass = document.querySelector('header');

export function onSearch(e) {
   
    e.preventDefault();
    const name = document.querySelector('.search-form__input').value;

    if (name !== '') {
        headerClass.classList.remove("homePage");
        headerClass.classList.add("keyword");    

    clearMarkup();
    
    fetchKeyword(name, 1).then(data => {
        const { results } = data;
        appendMarkup(results);
        createPagination(data);
    });
    } else {
        return;
    }
    
    }

export async function renderPopularMovies() {

        const newCard = await fetchPopularMovies(1);
        const { results } = newCard;
        appendMarkup(results);
        createPagination(newCard);
    
};