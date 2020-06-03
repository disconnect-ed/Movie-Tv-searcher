import React from "react";
import {connect} from "react-redux";
import {getMovie, updateMovieTitle} from "../../redux/movieList-reducer";
import MovieListSearcher from "./MovieListSearcher";
import MovieList from "./MovieList";
import {getMovieList} from "../../redux/selectors";

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
                <MovieList onPageChanged={this.onPageChanged} page={this.props.page}
                           totalPages={this.props.totalPages} movieList={this.props.movieList}
                />
            </>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        movieList: getMovieList(state),
        movieTitle: state.movieListPage.movieTitle,
        page: state.movieListPage.page,
        totalPages: state.movieListPage.totalPages
    }
}


export default connect(mapStateToProps, {getMovie, updateMovieTitle})(MovieListContainer);