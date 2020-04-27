import React from "react";
import {connect} from "react-redux";
import {getMovie, updateMovieTitle} from "../../redux/movies-reducer";
import {Container} from "react-bootstrap";
import MovieListSearcher from "./MovieListSearcher";
import MovieList from "./MovieList";
import {getMovieList} from "../../redux/selectors";
import {withRouter} from "react-router";

class MovieListContainer extends React.Component {

    render() {
        debugger
        return (
            <>
                <Container fluid>
                    <MovieListSearcher updateMovieTitle={this.props.updateMovieTitle}
                                       getMovie={this.props.getMovie}
                                       movieTitle={this.props.movieTitle}
                    />
                    <MovieList movieList={this.props.movieList}
                    />
                </Container>
            </>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        movieList: getMovieList(state),
        movieTitle: state.movieListPage.movieTitle
    }
}

let urlDataContainer = withRouter(MovieListContainer);

export default connect(mapStateToProps, { getMovie, updateMovieTitle })(urlDataContainer);