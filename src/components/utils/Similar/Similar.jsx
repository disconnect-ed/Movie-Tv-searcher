import React, { useState, useEffect } from "react";

const Trailers = (props) => {

    const [state, setState] = useState(null);

    useEffect(() => {
        setState(props.getVideos(props.id))
    }, [state]);

    if (props.trailers) {
        return (
            <div className="d-flex flex-column pt-3 pb-3">
                {props.trailers.results.map(result => {
                    return (
                        <div className="col-12 text-center">
                            <div className="col-12 mt-2">
                                <div className="trailer-title">
                                    <h3>{result.name}</h3>
                                </div>
                                <div className="trailer">
                                    <iframe width="560" height="315" src={`https://www.youtube.com/embed/${result.key}`}
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen></iframe>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    } else {
        return <div>null</div>
    }

};

export default Trailers;