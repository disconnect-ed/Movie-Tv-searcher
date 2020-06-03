import React, {useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from '@fortawesome/fontawesome-free-solid'

const Favorite = ({markFavorite, isFavorite, type, ...props}) => {
    debugger
    const [state, setState] = useState(isFavorite);

    useEffect(() => {
        setState(isFavorite)
    }, [isFavorite]);

    const onClick = (bool) => {
        setState(bool)
        markFavorite(props.id, props.session_id, bool, type)
    }

    return (
        <>
            {state ?
                <div><FontAwesomeIcon icon={faStar} onClick={() => onClick(false)} color="yellow" size='lg'/> - в
                    избранном</div> :
                <div><FontAwesomeIcon icon={faStar} onClick={() => onClick(true)} color="gray" size='lg'/> - добавить
                    в избранное</div>
            }
        </>
    )
}

export default Favorite;