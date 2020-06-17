import React from "react";
import {FormControl} from "react-bootstrap";


const MovieListSearcher = (props) => {

    let movieTitle = React.createRef();

    let onChange = () => {
        let text = movieTitle.current.value;
        if (text === '') {
            props.updateMovieTitle(text);
            return
        }
        props.updateMovieTitle(text);
        props.getMovie(text)
    }

    return (
        <div className="search">
            <div className='col-xl-4 col-lg-6 col-md-8 col-sm-10 col-12 m-auto text-center'>
                <div className="form-group row">
                    <div className="col-12">
                        <h4>Введите название фильма:</h4>
                    </div>
                    <div className="col-12 p-0">
                        <FormControl
                            type="text" placeholder={'Название фильма...'}
                            ref={movieTitle}
                            onChange={onChange}
                            value={props.movieTitle}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieListSearcher;