import React from "react";
import Load from "../../common/Load/Load";
import Favorite from "../../common/Favorite/Favorite";

const MovieDescription = (props) => {

    if (props.movieIsLoading) return <Load/>

    if (!props.description) return <Load/>

    return (
        <div className="col-lg-8 col-12">
            <div className="d-flex flex-column">
                <div>
                    <div className="movie-title text-lg-left text-center">
                        <h1>{props.description.title}</h1>
                    </div>
                </div>
                <div className='text-md-left text-center'>
                    <div className="movie-descr">
                        <p>Оригинальное название: {props.description.original_title}</p>
                        <p>Жанр: {props.description.genres.map(genre => {
                            return `${genre.name}, `
                        })}</p>
                        <p>Дата выхода: {props.description.release_date}</p>
                        <p>Продолжительность: {(props.description.episode_run_time) || '-'}</p>
                        <p>Рейтинг фильма: {props.description.vote_average}</p>
                        <p>Официальный сайт: <a target='_blank' href={props.description.homepage}>ссылка</a></p>
                        <h5>Описание:</h5>
                        <p>{props.description.overview || 'Описание отсутсвует.'}</p>
                    </div>
                    {(props.isFavorite && props.session_id) &&
                    <>
                        <Favorite isFavorite={props.isFavorite.favorite} session_id={props.session_id}
                                  id={props.id} markFavorite={props.markFavorite} key={props.id}

                        />
                    </>
                    }
                </div>
            </div>
        </div>
    )
}

export default MovieDescription;