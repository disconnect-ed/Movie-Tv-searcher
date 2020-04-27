import React from "react";
import {FormControl} from "react-bootstrap";


const MovieListSearcher = (props) => {

    let movieTitle = React.createRef();

    let onChange = () => {
        let text = movieTitle.current.value;
        props.updateMovieTitle(text);
        props.getMovie(text)
    }

    return (
        <div className='col-4 m-auto text-center' >
            <div className="search">
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