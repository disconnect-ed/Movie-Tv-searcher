import React, {useState} from "react";
import {Container} from "react-bootstrap";
import {Link, NavLink} from "react-router-dom";
import {faBars, faTimes, faUser} from "@fortawesome/fontawesome-free-solid";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import logo from '../../assets/logo-white.png'

const Navbar = (props) => {

    const [state, setState] = useState(false)

    return (
        <nav className={'nav'}>
            <Container fluid className='d-flex justify-content-between align-items-center'>
                <div className='navbar-logo'>
                    <NavLink to='/main'>
                        <img src={logo} alt="logo"/>
                    </NavLink>
                </div>
                <ul className="d-md-flex d-none justify-content-center mb-0">
                    <div className='pl-3 pr-3'>
                        <li><Link to="/main" style={({opacity: '0.3'})}>Главная</Link></li>
                    </div>
                    <div className='pl-3 pr-3'>
                        <li>
                            <div className='dropdown'>
                                            <span className='dropbtn-wrap'><NavLink to="#"
                                                                                    activeClassName={'active'}>Фильмы</NavLink></span>
                                <div className="dropdown-content">
                                    <NavLink to="/movies" activeClassName={'active'}>Поиск фильмов</NavLink>
                                    <NavLink to="/popular-movies" activeClassName={'active'}>Популярные
                                        фильмы</NavLink>
                                    <NavLink to="/top-movies" activeClassName={'active'}>Лучшие
                                        фильмы</NavLink>
                                </div>
                            </div>
                        </li>
                    </div>
                    <div className='pl-3 pr-3'>
                        <li>
                            <div className='dropdown'>
                                            <span className='dropbtn-wrap'><NavLink to="#" className='dropbtn'
                                                                                    activeClassName={'active'}>Сериалы</NavLink></span>
                                <div className="dropdown-content">
                                    <NavLink to="/tv" activeClassName={'active'}>Поиск сериалов</NavLink>
                                    <NavLink to="/popular-tv" activeClassName={'active'}>Популярные
                                        сериалы</NavLink>
                                    <NavLink to="/top-tv" activeClassName={'active'}>Лучшие
                                        сериалы</NavLink>
                                </div>
                            </div>
                        </li>
                    </div>
                    <div className='pl-3 pr-3'>
                        <li>{(props.username && props.success) ?
                            <NavLink to="/user-profile" activeClassName={'active'}>
                                <FontAwesomeIcon icon={faUser} /> Профиль
                            </NavLink> :
                            <NavLink to="/login" activeClassName={'active'}>
                                <FontAwesomeIcon icon={faUser} /> Авторизация
                            </NavLink>
                        }</li>
                    </div>
                </ul>
                <div className='d-flex d-md-none justify-content-end align-items-center'>
                    <div className=''>
                        <button onClick={() => setState(!state)} className='navbar-menu__button'>
                            <FontAwesomeIcon icon={state ? faTimes : faBars} color="white" size='lg'/>
                        </button>
                    </div>
                    <div className={`navbar-menu ${state && 'navbar-menu_active'}`}>
                        <ul className='navbar-menu-inner text-center'>
                            <li onClick={() => setState(!state)}>
                                <NavLink to="/main" activeClassName={'active'}>Главная</NavLink>
                            </li>
                            <li onClick={() => setState(!state)}>
                                <NavLink to="/movies" activeClassName={'active'}>Поиск фильмов</NavLink>
                            </li>
                            <li onClick={() => setState(!state)}>
                                <NavLink to="/popular-movies" activeClassName={'active'}>Популярные
                                фильмы</NavLink>
                            </li>
                            <li onClick={() => setState(!state)}>
                                <NavLink to="/top-movies" activeClassName={'active'}>Лучшие
                                фильмы</NavLink>
                            </li>
                            <li onClick={() => setState(!state)}>
                                <NavLink to="/tv" activeClassName={'active'}>Поиск сериалов</NavLink>
                            </li>
                            <li onClick={() => setState(!state)}>
                                <NavLink to="/popular-tv" activeClassName={'active'}>Популярные
                                    сериалы</NavLink>
                            </li>
                            <li onClick={() => setState(!state)}>
                                <NavLink to="/top-tv" activeClassName={'active'}>Лучшие
                                    сериалы</NavLink>
                            </li>
                            <li onClick={() => setState(!state)}>
                                {(props.username && props.success) ?
                                    <NavLink to="/user-profile" >
                                        <FontAwesomeIcon icon={faUser} color="white"/> Профиль
                                    </NavLink> :
                                    <NavLink to="/login" activeClassName={'active'}>
                                        <FontAwesomeIcon icon={faUser} color="white"/> Авторизация
                                    </NavLink>
                                }
                            </li>
                        </ul>
                    </div>
                </div>
            </Container>
        </nav>
    )
}

export default Navbar;