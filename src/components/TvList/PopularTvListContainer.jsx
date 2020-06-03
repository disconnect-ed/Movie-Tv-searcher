import React from "react";
import {connect} from "react-redux";
import TvList from "./TvList";
import {getPopularTvList} from "../../redux/selectors";
import {getPopularTv} from "../../redux/popularTvList-reducer";

class popularTvListContainer extends React.Component {

    componentDidMount() {
        if (!this.props.popularTvList) {
            this.props.getPopularTv()
        }
    }

    onPageChanged = (pageNumber) => {
        this.props.getPopularTv(pageNumber);
    }

    render() {
        return (
            <>
                <TvList tvList={this.props.popularTvList}
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
        popularTvList: getPopularTvList(state),
        page: state.popularTvListPage.page,
        totalPages: state.popularTvListPage.totalPages
    }
}

export default connect(mapStateToProps, {getPopularTv})(popularTvListContainer);