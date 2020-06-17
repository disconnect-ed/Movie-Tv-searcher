import React from "react";
import {connect} from "react-redux";
import MovieList from "./MovieList";
import {getTopMovieList} from "../utils/selectors";
import {getTopMovie} from "../../redux/actions/topMovieList-action";
import Error from "../common/Error/Error";

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

        if (this.props.topMovieListError) return <Error/>

        return (
            <>
                <MovieList movieList={this.props.topMovieList}
                           onPageChanged={this.onPageChanged}
                           page={this.props.page}
                           totalPages={this.props.totalPages}
                           isLoading={this.props.topMovieListIsLoading}
                />
            </>
        )
    }
}

let mapStateToProps = (state) => {

    return {
        topMovieList: getTopMovieList(state),
        page: state.topMovieListPage.page,
        totalPages: state.topMovieListPage.totalPages,
        topMovieListIsLoading: state.topMovieListPage.topMovieListIsLoading,
        topMovieListError: state.topMovieListPage.topMovieListError,
    }
}

export default connect(mapStateToProps, {getTopMovie})(TopMovieListContainer);