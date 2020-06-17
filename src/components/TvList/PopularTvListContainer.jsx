import React from "react";
import {connect} from "react-redux";
import TvList from "./TvList";
import {getPopularTvList} from "../utils/selectors";
import {getPopularTv} from "../../redux/actions/popularTvList-action";
import Error from "../common/Error/Error";

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

        if (this.props.popularTvListError) return <Error/>

        return (
            <>
                <TvList tvList={this.props.popularTvList}
                        onPageChanged={this.onPageChanged}
                        page={this.props.page}
                        totalPages={this.props.totalPages}
                        isLoading={this.props.popularTvListIsLoading}
                />
            </>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        popularTvList: getPopularTvList(state),
        page: state.popularTvListPage.page,
        totalPages: state.popularTvListPage.totalPages,
        popularTvListIsLoading: state.popularTvListPage.popularTvListIsLoading,
        popularTvListError: state.popularTvListPage.popularTvListError,
    }
}

export default connect(mapStateToProps, {getPopularTv})(popularTvListContainer);