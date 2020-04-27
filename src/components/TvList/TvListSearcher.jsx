import React from "react";
import {FormControl} from "react-bootstrap";


const TvListSearcher = (props) => {
debugger
    let tvTitle = React.createRef();

    let onChange = () => {
        let text = tvTitle.current.value;
        props.updateTvTitle(text);
        props.getTv(text)
    }

    return (
        <div className='col-4 m-auto text-center' >
            <div className="search">
                <div className="form-group row">
                    <div className="col-12">
                        <h4>Введите название сериала:</h4>
                    </div>
                    <div className="col-12 p-0">
                        <FormControl
                             type="text" placeholder={'Название сериала...'}
                             ref={tvTitle}
                             onChange={onChange}
                             value={props.tvTitle}
                        />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default TvListSearcher;