import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import logo from "../design/logo.png";

class Login extends React.Component {
  state = {
    username: "",
    password: ""
  };
  handleInput = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleLogin = () => {
    window.localStorage.setItem("username", this.state.username);
    window.localStorage.setItem("password", this.state.password);
    window.location.reload();
    this.props.history.push("/");
  };

  render() {
    return (
      <form
        style={{
          margin: "20% 30%",
          width: "300px",
          height: "400px",
          padding: "0% 5% ",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          border: "1px solid lightgray"
        }}
      >
        <img
          style={{
            width: "200px",
            height: "150px",

            margin: "0 15%"
          }}
          src={logo}
          alt="friends-logo"
        />
        <TextField
          id="standard-with-placeholder"
          label="username"
          placeholder="username"
          name="username"
          margin="normal"
          onChange={this.handleInput}
        />
        <TextField
          id="standard-with-placeholder"
          label="password"
          placeholder="password"
          margin="normal"
          name="password"
          onChange={this.handleInput}
        />
        <Button
          onClick={this.handleLogin}
          // onClick={ev => this.props.history.push("/")}
          color="primary"
          type="submit"
          variant="contained"
        >
          Login
        </Button>
      </form>
    );
  }
}
export default Login;
