import React from "react";
import {Spinner} from "react-bootstrap";

const Load = () => {
    return (
        <div className='m-auto text-center pt-5'>
            <Spinner animation="border" variant="primary" />
        </div>
    )
}

export default Load;