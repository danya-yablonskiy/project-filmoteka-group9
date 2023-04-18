import { clearMarkup } from './pagination';
import { appendMarkup } from './renderMarkupCards';
import fetchPopularMovies from './fetchPopularMovies';
import fetchKeyword from './fetchKeyword';
import createPagination from './pagination';
import Notiflix from 'notiflix';



export function onSearch(e) {
   
    e.preventDefault();
    const name = document.querySelector('.search-form__input').value;
    const headerNewClass = document.querySelector('header');
    if (name !== '') {
        headerNewClass.classList.remove("homePage");
        headerNewClass.classList.add("keyword");    

    clearMarkup();
    
    fetchKeyword(name, 1).then(data => {
        const { results } = data;
        if (data.results.length < 1) {
            Notiflix.Notify.failure("Sorry, we can't find this movie, try another movie name!")
            fetchPopularMovies(1).then(data => appendMarkup(data.results));
            return;
        }
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