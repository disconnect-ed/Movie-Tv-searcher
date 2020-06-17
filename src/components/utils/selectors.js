
export const getMovieList = (state) => {
    if (state.movieListPage.movieList) {
        return state.movieListPage.movieList.data.results.filter(result => {
            return result.media_type !== "person"
        })
    }
}

export const getTvList = (state) => {
    if (state.tvListPage.tvList) {
        return state.tvListPage.tvList.data.results
    }
}

export const getPopularTvList = (state) => {
    if (state.popularTvListPage.popularTvList) {
        return state.popularTvListPage.popularTvList.data.results
    }
}

export const getTopTvList = (state) => {
    if (state.topTvListPage.topTvList) {
        return state.topTvListPage.topTvList.data.results
    }
}

export const getPopularMovieList = (state) => {
    if (state.popularMovieListPage.popularMovieList) {
        return state.popularMovieListPage.popularMovieList.data.results
    }
}

export const getTopMovieList = (state) => {
    if (state.topMovieListPage.topMovieList) {
        return state.topMovieListPage.topMovieList.data.results
    }
}

export const getFavoriteMovieId = (state) => {
    debugger
    if (state.userProfilePage.favoriteMovies && state.moviePage.movieId) {
        let movieId = state.moviePage.movieId;
        let arr = state.userProfilePage.favoriteMovies.results
        let answer = [];
        for (let i = 0; i <= arr.length - 1; i++) {
            answer.push(arr[i].id)
        }
        function isPositive(number) {
            return number == movieId;
        }
        let favorite = answer.some(isPositive);
        return favorite
    }
}