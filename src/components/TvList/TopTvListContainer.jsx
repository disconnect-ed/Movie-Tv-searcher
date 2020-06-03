import React from "react";
import {connect} from "react-redux";
import TvList from "./TvList";
import {getTopTvList} from "../../redux/selectors";
import {getTopTv} from "../../redux/topTvList-reducer";

class TopTvListContainer extends React.Component {

    componentDidMount() {
        if (!this.props.topTvList) {
            this.props.getTopTv()
        }
    }

    onPageChanged = (pageNumber) => {
        this.props.getTopTv(pageNumber);
    }

    render() {
        return (
            <>
                    <TvList tvList={this.props.topTvList}
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
        topTvList: getTopTvList(state),
        page: state.topTvListPage.page,
        totalPages: state.topTvListPage.totalPages
    }
}

export default connect(mapStateToProps, {getTopTv})(TopTvListContainer);