import React from "react";
import {Container} from "react-bootstrap";
import {connect} from "react-redux";
import {getTv, updateTvTitle} from "../../redux/tvList-reducer";
import TvListSearcher from "./TvListSearcher";
import TvList from "./TvList";
import {getTvList} from "../../redux/selectors";

class TvListContainer extends React.Component {

    render() {
        return (
            <>
                <Container fluid>
                    <TvListSearcher updateTvTitle={this.props.updateTvTitle}
                                    getTv={this.props.getTv}
                                    tvTitle={this.props.tvTitle}
                    />
                    <TvList tvList={this.props.tvList}
                    />
                </Container>
            </>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        tvList: getTvList(state),
        tvTitle: state.tvListPage.tvTitle
    }
}

export default connect(mapStateToProps, { getTv, updateTvTitle })(TvListContainer);