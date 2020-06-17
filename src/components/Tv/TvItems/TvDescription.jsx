import React from "react";
import Favorite from "../../common/Favorite/Favorite";
import Load from "../../common/Load/Load";

const TvDescription = (props) => {

    if (props.isLoading) return <Load/>

    if (props.description) {
        return (
            <div className="col-lg-8 col-12">
                <div className="d-flex flex-column">
                    <div>
                        <div className="movie-title text-lg-left text-center">
                            <h1>{props.description.name}</h1>
                        </div>
                    </div>
                    <div>
                        <div className="movie-descr">
                            <p>Оригинальное название: {props.description.original_name}</p>
                            <p>Жанр: {props.description.genres.map(genre => {
                                return `${genre.name}, `
                            })}</p>
                            <p>Релиз: {props.description.first_air_date}</p>
                            <p>Продолжительность эпизода: {(props.description.episode_run_time + ' мин.') || '-'}</p>
                            <p>Рейтинг сериала: {props.description.vote_average}</p>
                            <p>Официальный сайт: <a target='_blank' href={props.description.homepage}>ссылка</a></p>
                            <h6>Описание:</h6>
                            <p>{props.description.overview || 'Описание отсутсвует.'}</p>
                            {(props.isFavorite && props.session_id) &&
                            <>
                                <Favorite isFavorite={props.isFavorite.favorite} session_id={props.session_id}
                                          id={props.id} markFavorite={props.markFavorite} type='tv' key={props.id}
                                />
                            </>
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        return null
    }

}

export default TvDescription;