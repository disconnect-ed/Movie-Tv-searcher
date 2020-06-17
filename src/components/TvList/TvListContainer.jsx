import React from "react";
import {connect} from "react-redux";
import {updateTvTitle} from "../../redux/actions/tvList-action";
import {getTv} from "../../redux/actions/tvList-action";
import TvListSearcher from "./TvListSearcher";
import TvList from "./TvList";
import {getTvList} from "../utils/selectors";
import Error from "../common/Error/Error";

class TvListContainer extends React.Component {

    onPageChanged = (pageNumber) => {
        this.props.getTv(this.props.tvTitle, pageNumber);
    }

    render() {
        return (
            <>
                <TvListSearcher updateTvTitle={this.props.updateTvTitle}
                                getTv={this.props.getTv}
                                tvTitle={this.props.tvTitle}
                />
                {this.props.tvListError ?
                    <Error/> :
                    <TvList tvList={this.props.tvList}
                            onPageChanged={this.onPageChanged}
                            page={this.props.page}
                            totalPages={this.props.totalPages}
                            isLoading={this.props.tvListIsLoading}
                    />
                }
            </>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        tvList: getTvList(state),
        tvTitle: state.tvListPage.tvTitle,
        page: state.tvListPage.page,
        totalPages: state.tvListPage.totalPages,
        tvListIsLoading: state.tvListPage.tvListIsLoading,
        tvListError: state.tvListPage.tvListError,
    }
}

export default connect(mapStateToProps, {getTv, updateTvTitle})(TvListContainer);