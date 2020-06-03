import React from "react";
import {connect} from "react-redux";
import MovieList from "./MovieList";
import {getTopMovieList} from "../../redux/selectors";
import {getTopMovie} from "../../redux/topMovieList-reducer";

class TopMovieListContainer extends React.Component {

    componentDidMount() {
        if (!this.props.topMovieList) {
            this.props.getTopMovie()
        }
    }

    onPageChanged = (pageNumber) => {
        this.props.getTopMovie(pageNumber);
    }

    render() {
        return (
            <>
                <MovieList movieList={this.props.topMovieList}
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
        topMovieList: getTopMovieList(state),
        page: state.topMovieListPage.page,
        totalPages: state.topMovieListPage.totalPages
    }
}

export default connect(mapStateToProps, {getTopMovie})(TopMovieListContainer);