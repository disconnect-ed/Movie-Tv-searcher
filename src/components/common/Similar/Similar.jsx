import React, {useEffect} from "react";
import {NavLink} from "react-router-dom";
import {Button} from "react-bootstrap";
import './Similar.css'
import Load from "../../common/Load/Load";
import Error from "../Error/Error";

const Similar = (props) => {

    useEffect(() => {
        props.getSimilar(props.id)
    }, []);

    const onClick = () => {
        window.scrollTo(0, 0);
    };

    if (props.isLoading) return <Load/>
    if (props.error) return <Error/>
    if (props.similar.results.length === 0) return <div className='col-12 text-center pt-4'>
        <h5>Ничего не найдено</h5>
    </div>
    return (
        <div className="row pt-3">
            {props.similar.results.map(result => {
                return (
                    <div key={result.id} className="col-lg-3 col-md-4 col-sm-6 col-12 text-center">
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
                                        <NavLink to={`/${props.type}/` + result.id}>
                                            <Button onClick={onClick} variant="primary">Подробнее</Button>
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

export default Similar;