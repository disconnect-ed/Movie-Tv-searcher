import React from "react";
import Login from "./Login";
import {connect} from "react-redux";
import {getAuthRequest} from "../../redux/actions/auth-action";

class LoginContainer extends React.Component {



    render() {
        return <Login success={this.props.success} getAuthRequest={this.props.getAuthRequest} />
    }
}

let mapStateToProps = (state) => {
    return {
        success: state.auth.success
    }
}

export default connect(mapStateToProps, {getAuthRequest})(LoginContainer);