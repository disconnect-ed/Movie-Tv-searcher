import React from "react";
import {withRouter} from "react-router";
import {connect} from "react-redux";
import {getSimilar, getTv, getTvId, getVideos} from "../../redux/tv-reducer";
import Background from "../common/Background/Background";
import Poster from "../common/Poster/Poster";
import TvDescription from "./TvItems/TvDescription";
import {Container} from "react-bootstrap";
import TvTabs from "./TvTabs";
import {getTvAccountStates, markFavorite} from "../../redux/userProfile-reducer";


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
        if (this.props.match.params.tvId !== prevProps.tvId) {
            let tvId = this.props.match.params.tvId;
            this.props.getTvId(tvId);
            this.props.getTv(tvId);
            if (this.props.username && this.props.session_id) {
                this.props.getTvAccountStates(tvId, this.props.session_id)
            }
        }
    }

    render() {
        return (
            <>
                <Background background={this.props.tv}/>
                <Container>
                    <div className='pt-5 pb-3'>
                        <div className='pt-5 pb-5'>
                            <div className="row">
                                <Poster poster={this.props.tv}/>
                                <TvDescription session_id={this.props.session_id}
                                               username={this.props.username}
                                               description={this.props.tv}
                                               markFavorite={this.props.markFavorite}
                                               isFavorite={this.props.tvStates}
                                               id={this.props.tvId}
                                />
                            </div>
                        </div>
                        <TvTabs getVideos={this.props.getVideos}
                                tvId={this.props.tvId}
                                trailers={this.props.videos}
                                getSimilar={this.props.getSimilar}
                                similar={this.props.similar}
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
        username: state.auth.username,
        success: state.auth.success,
        session_id: state.auth.session_id,
        tvStates: state.userProfilePage.tvStates,
    }
}

let urlDataContainer = withRouter(TvContainer);

export default connect(mapStateToProps, {getTvId, getTv, getVideos,
    getSimilar, markFavorite, getTvAccountStates})(urlDataContainer);