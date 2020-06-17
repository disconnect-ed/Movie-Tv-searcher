import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from 'redux-thunk';
import movieListReducer from "./reducers/movieList-reducer";
import tvListReducer from "./reducers/tvList-reducer";
import movieReducer from "./reducers/movie-reducer";
import tvReducer from "./reducers/tv-reducer";
import popularMovieListReducer from "./reducers/popularMovieList-reducer";
import topMovieListReducer from "./reducers/topMovieList-reducer";
import popularTvListReducer from "./reducers/popularTvList-reducer";
import topTvListReducer from "./reducers/topTvList-reducer";
import { reducer as formReducer } from 'redux-form'
import authReducer from "./reducers/auth-reducer";
import userProfileReducer from "./reducers/userProfile-reducer";

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