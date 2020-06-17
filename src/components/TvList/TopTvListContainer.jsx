import React from "react";
import {connect} from "react-redux";
import TvList from "./TvList";
import {getTopTvList} from "../utils/selectors";
import {getTopTv} from "../../redux/actions/topTvList-action";
import Error from "../common/Error/Error";

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

        if (this.props.topTvListError) return <Error/>

        return (
            <>
                    <TvList tvList={this.props.topTvList}
                            onPageChanged={this.onPageChanged}
                            page={this.props.page}
                            totalPages={this.props.totalPages}
                            isLoading={this.props.topTvListIsLoading}
                    />
            </>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        topTvList: getTopTvList(state),
        page: state.topTvListPage.page,
        totalPages: state.topTvListPage.totalPages,
        topTvListIsLoading: state.topTvListPage.topTvListIsLoading,
        topTvListError: state.topTvListPage.topTvListError,
    }
}

export default connect(mapStateToProps, {getTopTv})(TopTvListContainer);