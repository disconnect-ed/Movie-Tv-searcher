import React from "react";
import {connect} from "react-redux";
import {logout} from "../../redux/auth-reducer";
import {getFavoriteMovies, getFavoriteTv} from "../../redux/userProfile-reducer";
import {Container} from "react-bootstrap";
import UserProfileTabs from "./UserProfileTabs";
import {Redirect} from "react-router";
import {faStar} from "@fortawesome/fontawesome-free-solid";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class UserProfileContainer extends React.Component {

    logout = () => {
        this.props.logout(localStorage.movieSearcherSessionId)
    }

    favoriteMoviesPageChange = (page) => {
        this.props.getFavoriteMovies(this.props.session_id, page)
    }

    favoriteTvPageChange = (page) => {
        this.props.getFavoriteTv(this.props.session_id, page)
    }

    render() {
        if (!this.props.username || !this.props.success) return <Redirect to={'/login'}/>
        return (
            <div className='user-profile'>
                <Container>
                    <div className="row">
                        <div className="col-lg-3 col-12">
                            <aside className='user-profile-menu'>
                                <div>
                                    <h3>Привет,<br className='d-lg-block d-none'/> {this.props.username}!</h3>
                                </div>
                                <div>
                                    <button onClick={this.logout} className='btn btn-danger'>Выйти</button>
                                </div>
                            </aside>
                        </div>
                        <div className="col-lg-9 col-12 pt-lg-0 pt-4">
                            <div className="col-12 pt-3 pb-3 text-center">
                                <div>
                                    <FontAwesomeIcon icon={faStar} color="yellow" size='2x'/>
                                    <h4>Избранные фильмы и сериалы</h4>
                                </div>

                            </div>
                            <UserProfileTabs getFavoriteMovies={this.props.getFavoriteMovies}
                                             session_id={this.props.session_id}
                                             favoriteMovies={this.props.favoriteMovies}
                                             getFavoriteTv={this.props.getFavoriteTv}
                                             favoriteTv={this.props.favoriteTv}

                                             favoriteMoviesPageChange={this.favoriteMoviesPageChange}
                                             favoriteTvPageChange={this.favoriteTvPageChange}
                            />
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        username: state.auth.username,
        success: state.auth.success,
        session_id: state.auth.session_id,
        favoriteMovies: state.userProfilePage.favoriteMovies,
        favoriteTv: state.userProfilePage.favoriteTv
    }
}

export default connect(mapStateToProps, {logout, getFavoriteMovies, getFavoriteTv})(UserProfileContainer);