import React from "react";
import './FormControls.css'

export const Input = ({input, meta, ...props}) => {
    return (
        <div >
            {meta.touched && meta.error && <span className='error'>{meta.error}</span>}
            <div>
                <input className="form-control" {...input} {...props}/>
            </div>
        </div>
    )
}