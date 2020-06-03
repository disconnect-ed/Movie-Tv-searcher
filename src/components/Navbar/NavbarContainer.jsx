import React from "react";
import Navbar from "./Navbar";
import {connect} from "react-redux";

class NavbarContainer extends React.Component {

    render() {
        return (
            <Navbar username={this.props.username} success={this.props.success} />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        username: state.auth.username,
        success: state.auth.success,
    }
}

export default connect(mapStateToProps, null)(NavbarContainer);