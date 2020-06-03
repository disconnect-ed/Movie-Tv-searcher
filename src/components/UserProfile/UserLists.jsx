import React, {useState, useEffect} from "react";
import {NavLink} from "react-router-dom";
import {Button} from "react-bootstrap";
import Load from "../common/Load/Load";
import Paginator from "../common/Paginator";

const UserLists = (props) => {

    const [state, setState] = useState(null);

    useEffect(() => {
        setState(props.getFavorite(props.session_id))
    }, [state]);


    if (!props.favorite) return <Load/>
    return (
        <div className="row">
            <div className="col-12 ">
                <div className="d-flex justify-content-center">
                    <Paginator onPageChanged={props.onPageChanged} page={props.favorite.page}
                               totalPages={props.favorite.total_pages}/>
                </div>
            </div>
            {props.favorite.results.map(result => {
                return (
                    <div key={result.id} className="col-xl-3 col-md-4 col-sm-6 col-12 text-center">
                        <div className="similar-card">
                            <div className="similar-poster">
                                <img className={'similar-img'}
                                     src={`https://image.tmdb.org/t/p/w200${result.poster_path}`}
                                     alt=""/>
                                <div className="similar-descr-block">
                                    <div className="similar-title">
                                        <h6>{result.title || result.name}</h6>
                                    </div>
                                    <div className='list-select'>
                                        <NavLink to={`/${props.path}/` + result.id}>
                                            <Button variant="primary">Подробнее</Button>
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                            <div className="similar-info">
                                <h5>{result.title || result.name}</h5>
                            </div>
                        </div>


                    </div>
                )
            })}
        </div>
    )
};

export default UserLists;