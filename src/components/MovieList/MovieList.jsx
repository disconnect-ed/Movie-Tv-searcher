import React from "react";
import {Button} from "react-bootstrap";
import GetStart from "../common/GetStart/GetStart";
import {NavLink} from "react-router-dom";
import Paginator from "../common/Paginator";
import Load from "../common/Load/Load";

const MovieList = (props) => {

    if (props.isLoading) return <Load/>

    if (!props.movieList) return <GetStart/>

    return (
        <div className="list-wrapper">
            <div className="col-12 ">
                <div className="d-flex justify-content-center">
                    <Paginator onPageChanged={props.onPageChanged} page={props.page} totalPages={props.totalPages}/>
                </div>
            </div>
            <div className="col-12">
                <div className="row text-center">
                    {props.movieList.map(result => {

                        return <div key={result.id} className="col-12 col-md-6 col-lg-4 col-xl-3">
                            <div className="d-flex justify-content-center">
                                <div className="list-card list-card_big">
                                    <div className="list-poster list-poster_big">
                                        <img className={'list-img list-img_big'}
                                             src={`https://image.tmdb.org/t/p/w300${result.poster_path}`}
                                             alt=""/>
                                        <div className="list-descr-block list-descr-block_big">
                                            <div className='list-descr list-descr_big'><small><h6>Оригинальное
                                                название:</h6> {result.original_title}</small></div>
                                            <div className='list-descr list-descr_big'><small><h6>Дата
                                                премьеры:</h6> {result.release_date}</small></div>
                                            <div className='list-descr list-descr_big'><small><h6
                                                className='inline'>Рейтинг:</h6> {result.vote_average}</small>
                                            </div>
                                            <div className='list-descr list-descr_big'>
                                                <small>{(result.overview).substring(0, 300)}...</small></div>
                                            <div className="list-select">
                                                <NavLink to={'/movies/' + result.id}>
                                                    <Button variant="primary">Подробнее</Button>
                                                </NavLink>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="list-info">
                                        <h5>{result.title}</h5>
                                    </div>

                                </div>


                            </div>
                        </div>

                    })}
                </div>
            </div>
        </div>
    )
}

export default MovieList;