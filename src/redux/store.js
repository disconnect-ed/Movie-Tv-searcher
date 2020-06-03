import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from 'redux-thunk';
import movieListReducer from "./movieList-reducer";
import tvListReducer from "./tvList-reducer";
import movieReducer from "./movie-reducer";
import tvReducer from "./tv-reducer";
import popularMovieListReducer from "./popularMovieList-reducer";
import topMovieListReducer from "./topMovieList-reducer";
import popularTvListReducer from "./popularTvList-reducer";
import topTvListReducer from "./topTvList-reducer";
import { reducer as formReducer } from 'redux-form'
import authReducer from "./auth-reducer";
import userProfileReducer from "./userProfile-reducer";

let reducers = combineReducers({
    movieListPage: movieListReducer,
    popularMovieListPage: popularMovieListReducer,
    topMovieListPage: topMovieListReducer,
    moviePage: movieReducer,
    tvListPage: tvListReducer,
    popularTvListPage: popularTvListReducer,
    topTvListPage: topTvListReducer,
    tvPage: tvReducer,
    auth: authReducer,
    userProfilePage: userProfileReducer,
    form: formReducer

});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;
export default store;