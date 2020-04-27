import * as axios from 'axios';

export const movieApi = {
    getMovie(movie) {
        return (
            axios.get(`https://api.themoviedb.org/3/search/multi?api_key=52fe61fd3579fa68fb24e9f3ea5690e1&language=ru-RU&query=${movie}&page=1&include_adult=false`)
        )
    }
}