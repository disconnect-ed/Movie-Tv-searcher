import React from "react";
import {connect} from "react-redux";
import {getMovie} from "../../redux/actions/movieList-action";
import {updateMovieTitle} from "../../redux/actions/movieList-action";
import MovieListSearcher from "./MovieListSearcher";
import MovieList from "./MovieList";
import {getMovieList} from "../utils/selectors";
import Error from "../common/Error/Error";

class MovieListContainer extends React.Component {

    onPageChanged = (pageNumber) => {
        this.props.getMovie(this.props.movieTitle, pageNumber);
    }

    render() {

        return (
            <>
                <MovieListSearcher updateMovieTitle={this.props.updateMovieTitle}
                                   getMovie={this.props.getMovie}
                                   movieTitle={this.props.movieTitle}
                />
                {this.props.movieListError ?
                    <Error/> :
                    <MovieList onPageChanged={this.onPageChanged} page={this.props.page}
                               totalPages={this.props.totalPages} movieList={this.props.movieList}
                               isLoading={this.props.movieListIsLoading}
                    />
                }
            </>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        movieList: getMovieList(state),
        movieTitle: state.movieListPage.movieTitle,
        page: state.movieListPage.page,
        totalPages: state.movieListPage.totalPages,
        movieListIsLoading: state.movieListPage.movieListIsLoading,
        movieListError: state.movieListPage.movieListError,
    }
}


export default connect(mapStateToProps, {getMovie, updateMovieTitle})(MovieListContainer);