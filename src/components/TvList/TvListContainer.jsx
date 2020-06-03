import React from "react";
import {connect} from "react-redux";
import {getTv, updateTvTitle} from "../../redux/tvList-reducer";
import TvListSearcher from "./TvListSearcher";
import TvList from "./TvList";
import {getTvList} from "../../redux/selectors";

class TvListContainer extends React.Component {

    onPageChanged = (pageNumber) => {
        this.props.getTv(this.props.tvTitle ,pageNumber);
    }

    render() {
        return (
            <>
                    <TvListSearcher updateTvTitle={this.props.updateTvTitle}
                                    getTv={this.props.getTv}
                                    tvTitle={this.props.tvTitle}
                    />
                    <TvList tvList={this.props.tvList}
                            onPageChanged={this.onPageChanged}
                            page={this.props.page}
                            totalPages={this.props.totalPages}
                    />
            </>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        tvList: getTvList(state),
        tvTitle: state.tvListPage.tvTitle,
        page: state.tvListPage.page,
        totalPages: state.tvListPage.totalPages
    }
}

export default connect(mapStateToProps, { getTv, updateTvTitle })(TvListContainer);