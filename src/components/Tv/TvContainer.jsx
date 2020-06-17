import React from "react";
import {withRouter} from "react-router";
import {connect} from "react-redux";
import {getSimilar, getTv, getTvId, getVideos} from "../../redux/actions/tv-action";
import Background from "../common/Background/Background";
import Poster from "../common/Poster/Poster";
import TvDescription from "./TvItems/TvDescription";
import {Container} from "react-bootstrap";
import TvTabs from "./TvTabs";
import {getTvAccountStates, markFavorite} from "../../redux/actions/userProfile-action";
import Error from "../common/Error/Error";


class TvContainer extends React.Component {

    componentDidMount() {
        let tvId = this.props.match.params.tvId;
        this.props.getTvId(tvId);
        this.props.getTv(tvId);
        if (this.props.username && this.props.session_id) {
            this.props.getTvAccountStates(tvId, this.props.session_id)
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.tvId !== prevProps.match.params.tvId) {
            let tvId = this.props.match.params.tvId;
            this.props.getTvId(tvId);
            this.props.getTv(tvId);
            if (this.props.username && this.props.session_id) {
                this.props.getTvAccountStates(tvId, this.props.session_id)
            }
        }
    }

    render() {

        if (this.props.tvError) return <Error/>

        return (
            <>
                <Background background={this.props.tv}/>
                <Container>
                    <div className='pt-5 pb-3'>
                        <div className='pt-5 pb-5'>
                            <div className="row">
                                <Poster isLoading={this.props.tvIsLoading} poster={this.props.tv}/>
                                <TvDescription session_id={this.props.session_id}
                                               username={this.props.username}
                                               description={this.props.tv}
                                               markFavorite={this.props.markFavorite}
                                               isFavorite={this.props.tvStates}
                                               id={this.props.tvId}
                                               isLoading={this.props.tvIsLoading}
                                />
                            </div>
                        </div>
                        <TvTabs getVideos={this.props.getVideos}
                                tvId={this.props.tvId}
                                trailers={this.props.videos}
                                getSimilar={this.props.getSimilar}
                                similar={this.props.similar}
                                tvSimilarIsLoading={this.props.tvSimilarIsLoading}
                                tvTrailersIsLoading={this.props.tvTrailersIsLoading}
                                tvSimilarError={this.props.tvSimilarError}
                                tvTrailersError={this.props.tvTrailersError}
                        />
                    </div>
                </Container>
            </>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        tvId: state.tvPage.tvId,
        tv: state.tvPage.tv,
        videos: state.tvPage.videos,
        similar: state.tvPage.similar,
        tvIsLoading: state.tvPage.tvIsLoading,
        tvSimilarIsLoading: state.tvPage.tvSimilarIsLoading,
        tvTrailersIsLoading: state.tvPage.tvTrailersIsLoading,
        tvError: state.tvPage.tvError,
        tvSimilarError: state.tvPage.tvSimilarError,
        tvTrailersError: state.tvPage.tvTrailersError,
        username: state.auth.username,
        success: state.auth.success,
        session_id: state.auth.session_id,
        tvStates: state.userProfilePage.tvStates,
    }
}

let urlDataContainer = withRouter(TvContainer);

export default connect(mapStateToProps, {getTvId, getTv, getVideos,
    getSimilar, markFavorite, getTvAccountStates})(urlDataContainer);