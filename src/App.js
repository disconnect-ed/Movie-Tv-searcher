import React, {Component} from 'react';
import './App.css';
import {Container} from "react-bootstrap";
import {Route, Switch} from "react-router";
import MovieListContainer from "./components/MovieList/MovieListContainer";
import TvListContainer from "./components/TvList/TvListContainer";
import MovieContainer from "./components/Movie/MovieContainer";
import TvContainer from "./components/Tv/TvContainer";
import PopularTvListContainer from "./components/TvList/PopularTvListContainer";
import TopTvListContainer from "./components/TvList/TopTvListContainer";
import PopularMovieListContainer from "./components/MovieList/PopularMovieListContainer";
import TopMovieListContainer from "./components/MovieList/TopMovieListContainer";
import LoginContainer from "./components/Login/LoginContainer";
import UserProfileContainer from "./components/UserProfile/UserProfileContainer";
import {connect} from "react-redux";
import {setAuthData} from "./redux/auth-reducer";
import NavbarContainer from "./components/Navbar/NavbarContainer";


class App extends Component {

    componentDidMount() {
        if (localStorage.movieSearcherSessionId &&
            localStorage.movieSearcherUsername &&
            localStorage.movieSearcherSuccess) {
            this.props.setAuthData(localStorage.movieSearcherSessionId,
                localStorage.movieSearcherUsername,
                localStorage.movieSearcherSuccess)
        }
    }

    render() {
        return (
            <Container fluid>
                <div className="wrapper_black"></div>
                <div className="App">
                    <NavbarContainer/>
                    <Switch>
                        <Route exact path={'/main'}
                               render={() => <MovieListContainer/>}/>
                        <Route exact path={'/movies'}
                               render={() => <MovieListContainer/>}/>
                        <Route exact path={'/popular-movies'}
                               render={() => <PopularMovieListContainer/>}/>
                        <Route exact path={'/top-movies'}
                               render={() => <TopMovieListContainer/>}/>
                        <Route exact path={'/movies/:movieId'}
                               render={() => <MovieContainer/>}/>
                        <Route exact path={'/tv'}
                               render={() => <TvListContainer/>}/>
                        <Route exact path={'/popular-tv'}
                               render={() => <PopularTvListContainer/>}/>
                        <Route exact path={'/top-tv'}
                               render={() => <TopTvListContainer/>}/>
                        <Route exact path={'/tv/:tvId'}
                               render={() => <TvContainer/>}/>
                        <Route exact path={'/login'}
                               render={() => <LoginContainer/>}/>
                        <Route exact path={'/user-profile'}
                               render={() => <UserProfileContainer/>}/>
                        <Route exact path={'/'}
                               render={() => <MovieListContainer/>}/>
                        <Route exact path={'*'}
                               render={() => <div className='position-fixed w-100 vh-100
                                d-flex justify-content-center align-items-center'>
                                   <div className='text-center'>
                                       <h1>Ой... 404</h1>
                                       <h3>Страница не найдена :(</h3>
                                   </div>
                               </div>}/>
                    </Switch>
                </div>
            </Container>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        username: state.auth.username,
        success: state.auth.success,
        session_id: state.auth.session_id,
    }
}

export default connect(mapStateToProps, {setAuthData})(App);
