import React from "react";

const ConditionalRender = Books => Login =>
  class extends React.Component {
    state = {
      loggedIn: false
    };

    componentDidMount = () => {
      if (window.localStorage.getItem("name", "password")) {
        this.setState({ loggedIn: true });
      }
    };

    render() {
      return this.state.loggedIn ? <Books /> : <Login />;
    }
  };
export default ConditionalRender;
