import React from "react";

const ConditionalRender = Books => Login =>
  class extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        loggedIn: false
      };

    }


    componentDidMount = () => {
      if (!window.localStorage.getItem("name", "password")) {
        //this.setState({ loggedIn: true });
        this.props.history.push("/login")
      }
    };

    render() {
      //return this.state.loggedIn ? <Books /> : <Login />;
      return <Books />
    }
  };
export default ConditionalRender;
