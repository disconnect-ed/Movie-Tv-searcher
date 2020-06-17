import React from "react";
import Load from "../Load/Load";

const Poster = (props) => {

    if (props.isLoading) return <Load/>

    if (!props.poster) return <></>
    return (
        <div className="col-lg-4 pb-3 col-12 text-center">
            <div className="movie-poster">
                <img src={`https://image.tmdb.org/t/p/w300${props.poster.poster_path}`} alt=""/>
            </div>
        </div>
    )

}

export default Poster;