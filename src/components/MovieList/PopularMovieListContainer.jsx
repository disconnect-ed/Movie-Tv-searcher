import React from "react";
import {Container} from "react-bootstrap";
import {connect} from "react-redux";
import {getPopularTv} from "../../redux/tvList-reducer";
import TvList from "./TvList";
import {getPopularTvList} from "../../redux/selectors";

class popularTvListContainer extends React.Component {

    componentDidMount() {
        debugger
        this.props.getPopularTv()
    }

    render() {
        return (
            <>
                <Container fluid>
                    <TvList tvList={this.props.popularTvList}
                    />
                </Container>
            </>
        )
    }
}

let mapStateToProps = (state) => {
    debugger
    return {
        popularTvList: getPopularTvList(state),
    }
}

export default connect(mapStateToProps, {getPopularTv})(popularTvListContainer);