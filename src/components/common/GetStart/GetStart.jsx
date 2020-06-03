import React from "react";
import logo from '../../../assets/logo-white.png'

const GetStart = () => {
    return (
        <div className="col-12 text-center">
            <div className='d-flex justify-content-center flex-column pt-5'>
                    <div className='mb-3'><img src={logo} alt=""/></div>
                    <div><h4>Здесь будет результат поиска!</h4></div>
            </div>
        </div>
    )
}

export default GetStart;