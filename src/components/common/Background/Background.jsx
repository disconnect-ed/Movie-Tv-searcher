import React from "react";
import backgroundStyle from "./Background.module.css";

const Background = (props) => {

    if (!props.background) return <></>

    let style = {backgroundImage: `url(https://image.tmdb.org/t/p/w500${props.background.backdrop_path})`}
    return (
        <>
            <div style={style} className={backgroundStyle.wrapper_blur}></div>
            <div className={backgroundStyle.wrabber_darken}></div>
        </>
    )

}

export default Background;