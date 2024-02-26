import React from "react";
import Header from "./Header";

class HeaderContainer extends React.Component {

  render() {
    return (
      <Header {...this.props} />
    );
  }
}

// const mapStateToProps = (state) => ({
//   isAuth: state.auth.isAuth,
//   login: state.auth.login
// });

export default HeaderContainer;