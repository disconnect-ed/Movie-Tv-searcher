import React from "react";
import {connect} from "react-redux";
import MovieList from "./MovieList";
import {getPopularMovieList} from "../utils/selectors";
import {getPopularMovie} from "../../redux/actions/popularMovieList-action";
import Error from "../common/Error/Error";


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

        if (this.props.popularMovieListError) return <Error/>

        return (
            <>
                <MovieList movieList={this.props.popularMovieList}
                           onPageChanged={this.onPageChanged}
                           page={this.props.page}
                           totalPages={this.props.totalPages}
                           isLoading={this.props.popularMovieListIsLoading}
                />
            </>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        popularMovieList: getPopularMovieList(state),
        page: state.popularMovieListPage.page,
        totalPages: state.popularMovieListPage.totalPages,
        popularMovieListIsLoading: state.popularMovieListPage.popularMovieListIsLoading,
        popularMovieListError: state.popularMovieListPage.popularMovieListError,
    }
}

export default connect(mapStateToProps, {getPopularMovie})(PopularMovieListContainer);