import React from "react";
import {connect} from "react-redux";
import MovieList from "./MovieList";
import {getPopularMovieList} from "../../redux/selectors";
import {getPopularMovie} from "../../redux/popularMovieList-reducer";


class PopularMovieListContainer extends React.Component {

    componentDidMount() {
        if (!this.props.popularMovieList) {
            this.props.getPopularMovie()
        }
    }

    onPageChanged = (pageNumber) => {
        this.props.getPopularMovie(pageNumber);
    }

    render() {
        return (
            <>
                <MovieList movieList={this.props.popularMovieList}
                           onPageChanged={this.onPageChanged}
                           page={this.props.page}
                           totalPages={this.props.totalPages}
                />
            </>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        popularMovieList: getPopularMovieList(state),
        page: state.popularMovieListPage.page,
        totalPages: state.popularMovieListPage.totalPages
    }
}

export default connect(mapStateToProps, {getPopularMovie})(PopularMovieListContainer);