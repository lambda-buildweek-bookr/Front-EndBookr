import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import logo from "../design/logo.png";
import axios from "axios";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      password: ""
    };
  }

  handleInput = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleLogin = (ev, state) => {
    state = this.state;
    console.log(this.state, this.props);
    ev.preventDefault();
    axios
      .post(
        `https://bookr-buildweek-backend.herokuapp.com/api/users/login`,
        this.state
      )
      .then(res => {
        localStorage.setItem("jwt", res.data.token);
        localStorage.setItem("name", res.data.name);

        this.props.history.push("/");
      })
      .catch(err => {
        console.log(err);
      });
  };
  // window.localStorage.setItem("username", this.state.username);
  // window.localStorage.setItem("password", this.state.password);
  // window.location.reload();
  // this.props.history.push("/");
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
          label="name"
          placeholder="username"
          name="name"
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
