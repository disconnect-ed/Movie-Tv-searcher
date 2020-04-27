import React from "react";
import {Button} from "react-bootstrap";
import GetStart from "../utils/GetStart/GetStart";
import {NavLink} from "react-router-dom";

const MovieList = (props) => {

    if (props.movieList) {
        debugger
        return (
            <div className="col-12">
                <div className="row">
                    {props.movieList.map(result => {

                        return <div className="col-3">
                            <div className="col-12 p-0">
                                <div className="search-card">
                                    <div className="search-poster">
                                        <img className={'search-img'}
                                             src={`https://image.tmdb.org/t/p/w300${result.poster_path}`}
                                             alt=""/>
                                        <div className="search-descr-block">
                                            <div className='search-descr' ><small><h6>Оригинальное название:</h6> {result.original_title}</small></div>
                                            <div className='search-descr' ><small><h6>Дата премьеры:</h6> {result.release_date}</small></div>
                                            <div className='search-descr' ><small><h6 className='inline'>Рейтинг:</h6> {result.vote_average}</small></div>
                                            <div className='search-descr' ><small>{(result.overview).substring(0, 300)}...</small></div>
                                            <div className="search-select">
                                                <NavLink to={'/movies/' + result.id}>
                                                    <Button variant="primary" >Подробнее</Button>
                                                </NavLink>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="search-info">
                                        <h5>{result.title}</h5>
                                    </div>

                                </div>

                            </div>
                        </div>

                        // return <div className="col-6">
                        //     <div className="search-card">
                        //         <div className="row">
                        //             <div className="col-6">
                        //                 <div className="d-flex flex-column text-center">
                        //                     <img className={'search-img'}
                        //                          src={`https://image.tmdb.org/t/p/w300${result.poster_path}`}
                        //                          alt=""/></div>
                        //                     <div className={'search-visual'}>
                        //                     <div className="search-more">
                        //                         <Button variant="success">Подробнее</Button>
                        //                     </div>
                        //                 </div>
                        //
                        //             </div>
                        //             <div className="col-6">
                        //                 <div className="d-flex flex-column">
                        //                     <div className="search-title">
                        //                         <h4>{result.title || result.name}</h4>
                        //                     </div>
                        //                     <div className="search-info">
                        //                         <div><small><h6>Дата выхода:</h6> {result.release_date || result.first_air_date}</small>
                        //                         </div>
                        //                         <div><small><h6>Оригинальное название:</h6> {result.original_title || result.original_name}
                        //                         </small></div>
                        //                         <div><small><h6>Оригинальный язык:</h6> {result.original_language}
                        //                         </small></div>
                        //                         <div><small><h6>Рейтинг:</h6> {result.vote_average}</small></div>
                        //                     </div>
                        //                     <div className="search-descr">
                        //                         <p>{(result.overview).substring(0, 100)}...</p>
                        //                     </div>
                        //                 </div>
                        //
                        //             </div>
                        //         </div>
                        //     </div>
                        // </div>
                    })}
                </div>
            </div>
        )
    } else {
        return <GetStart/>
    }
}

export default MovieList;