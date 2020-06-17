import React from "react";
import {Spinner} from "react-bootstrap";

const Load = () => {
    return (
        <div className='m-auto text-center pt-5'>
            <Spinner className='mt-1' animation="border" variant="primary" />
        </div>
    )
}

export default Load;