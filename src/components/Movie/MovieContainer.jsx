import React from "react";
import {withRouter} from "react-router";
import {connect} from "react-redux";
import {getMovie, getMovieId, getSimilar, getVideos} from "../../redux/actions/movie-action";
import Background from "../common/Background/Background";
import {Container} from "react-bootstrap";
import Poster from "../common/Poster/Poster";
import MovieTabs from "./MovieTabs";
import MovieDescription from "./MovieItems/MovieDescription";
import 'react-tabs/style/react-tabs.css';
import {getMovieAccountStates, markFavorite} from "../../redux/actions/userProfile-action";
import Error from "../common/Error/Error";

class MovieContainer extends React.Component {

    componentDidMount() {
        let movieId = this.props.match.params.movieId;
        this.props.getMovieId(movieId);
        this.props.getMovie(movieId);
        if (this.props.username && this.props.session_id) {
            this.props.getMovieAccountStates(movieId, this.props.session_id)
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.movieId !== prevProps.match.params.movieId) {
            let movieId = this.props.match.params.movieId;
            this.props.getMovieId(movieId);
            this.props.getMovie(movieId);
            if (this.props.username && this.props.session_id) {
                this.props.getMovieAccountStates(movieId, this.props.session_id)
            }
        }
    }

    render() {

        if (this.props.movieError) return <Error/>

        return (
            <>
                <Background background={this.props.movie} />
                <Container>
                    <div className='pt-5 pb-3'>
                        <div className='pt-5 pb-5'>
                            <div className="row">
                                <Poster isLoading={this.props.movieIsLoading} poster={this.props.movie} />
                                <MovieDescription markFavorite={this.props.markFavorite}
                                                  username={this.props.username}
                                                  session_id={this.props.session_id}
                                                  description={this.props.movie}
                                                  isFavorite={this.props.movieStates}
                                                  id={this.props.movieId}
                                                  movieIsLoading={this.props.movieIsLoading}
                                />
                            </div>
                        </div>
                        <MovieTabs getVideos={this.props.getVideos}
                                   movieId={this.props.movieId}
                                   trailers={this.props.videos}
                                   getSimilar={this.props.getSimilar}
                                   similar={this.props.similar}
                                   path={this.props.match.path}
                                   movieSimilarIsLoading={this.props.movieSimilarIsLoading}
                                   movieTrailersIsLoading={this.props.movieTrailersIsLoading}
                                   movieSimilarError={this.props.movieSimilarError}
                                   movieTrailersError={this.props.movieTrailersError}
                        />
                    </div>
                </Container>
            </>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        movieId: state.moviePage.movieId,
        movie: state.moviePage.movie,
        videos: state.moviePage.videos,
        similar: state.moviePage.similar,
        movieIsLoading: state.moviePage.movieIsLoading,
        movieSimilarIsLoading: state.moviePage.movieSimilarIsLoading,
        movieTrailersIsLoading: state.moviePage.movieTrailersIsLoading,
        movieError: state.moviePage.movieError,
        movieSimilarError: state.moviePage.movieSimilarError,
        username: state.auth.username,
        success: state.auth.success,
        session_id: state.auth.session_id,
        movieStates: state.userProfilePage.movieStates,
        movieTrailersError: state.userProfilePage.movieTrailersError,
    }
}

let urlDataContainer = withRouter(MovieContainer);

export default connect(mapStateToProps, {getMovieId, getMovie,
    getVideos, getSimilar, markFavorite, getMovieAccountStates})(urlDataContainer);