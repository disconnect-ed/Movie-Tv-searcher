import React from "react";

const Error = () => {
    return (
        <div className="col-12 text-center pt-3">
            <div className='d-flex justify-content-center flex-column pt-5 pb-5'>
                <h4>Произошла ошибка!</h4>
                <h5 style={{color: 'red'}}>Попробуйте позже</h5>
            </div>
        </div>
    )
}

export default Error