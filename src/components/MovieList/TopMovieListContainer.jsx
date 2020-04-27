import React from "react";
import {Container} from "react-bootstrap";
import {connect} from "react-redux";
import MovieList from "./MovieList";
import {getPopularMovieList} from "../../redux/selectors";
import {getPopularMovie} from "../../redux/movieList-reducer";

class PopularMovieListContainer extends React.Component {

    componentDidMount() {

        this.props.getPopularMovie()
    }

    render() {
        return (
            <>
                <Container fluid>
                    <MovieList movieList={this.props.popularMovieList}
                    />
                </Container>
            </>
        )
    }
}

let mapStateToProps = (state) => {

    return {
        popularMovieList: getPopularMovieList(state),
    }
}

export default connect(mapStateToProps, {getPopularMovie})(PopularMovieListContainer);