import React from "react";
import {Button} from "react-bootstrap";
import GetStart from "../common/GetStart/GetStart";
import {NavLink} from "react-router-dom";
import Paginator from "../common/Paginator";

const TvList = (props) => {

    if (!props.tvList) return <GetStart/>
        return (
            <div className="list-wrapper">

                    <div className="d-flex justify-content-center">
                        <Paginator onPageChanged={props.onPageChanged} page={props.page} totalPages={props.totalPages}/>
                    </div>
                    <div className="row">
                        {props.tvList.map(result => {

                            return <div key={result.id} className="col-12 col-md-6 col-lg-4 col-xl-3">
                                <div className="d-flex justify-content-center">
                                    <div className="list-card list-card_big">
                                        <div className="list-poster list-poster_big">
                                            <img className={'list-img list-img_big'}
                                                 src={`https://image.tmdb.org/t/p/w300${result.poster_path}`}
                                                 alt=""/>
                                            <div className="list-descr-block">
                                                <div className='list-descr'><small><h6>Оригинальное
                                                    название:</h6> {result.original_name}</small></div>
                                                <div className='list-descr'><small><h6 className='list-inline'>Дата
                                                    премьеры:</h6> {result.first_air_date}</small></div>
                                                <div className='list-descr'><small><h6
                                                    className='list-inline'>Рейтинг:</h6> {result.vote_average}</small>
                                                </div>
                                                <div className='list-descr'>
                                                    <small>{(result.overview).substring(0, 300)}...</small></div>
                                                <div className="list-select">
                                                    <NavLink to={'/tv/' + result.id}>
                                                        <Button variant="primary">Подробнее</Button>
                                                    </NavLink>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="list-info">
                                            <h5>{result.title || result.name}</h5>
                                        </div>

                                    </div>

                                </div>
                            </div>

                        })}
                    </div>

            </div>
        )
}

export default TvList;