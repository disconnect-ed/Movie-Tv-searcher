import React, {useEffect, useState} from "react";
import Load from "../Load/Load";

const Trailers = (props) => {

    const [state, setState] = useState(false)

    useEffect(() => {
        props.getVideos(props.id)
        setState(true)
    }, [state]);

    if (!props.trailers) return <Load/>
    if (props.trailers.results.length === 0) return <div className='col-12 text-center pt-4'>
        <h5>Ничего не найдено</h5>
    </div>
        return (
            <div className="row pt-3 pb-3">
                {props.trailers.results.map(result => {
                    return (
                        <div key={result.key} className="col-md-6 col-12 text-center p-0">
                                <div className="trailer-title pb-3">
                                    <h6>{result.name}</h6>
                                </div>
                                <div className="trailer">
                                    <iframe  src={`https://www.youtube.com/embed/${result.key}`}
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen></iframe>
                                </div>
                        </div>
                    )
                })}
            </div>
        )
};

export default Trailers;