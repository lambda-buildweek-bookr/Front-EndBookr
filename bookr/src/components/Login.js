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
        state
      )
      .then(res => {
        console.log(res.data);
        localStorage.setItem("jwt", res.data.token);
        localStorage.setItem("name", res.data.name);
        localStorage.setItem("id", res.data.id);
        this.props.history.push("/");
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <form
        style={{
          backgroundColor: "white",
          margin: "10% 37.5%",
          width: "300px",
          height: "420px",
          padding: "0% 2% ",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          border: "1px solid lightgray"
        }}
      >
        <img
          style={{
            width: "200px",
            height: "120px",

            margin: "0 10%"
          }}
          src={logo}
          alt="friends-logo"
        />
        <TextField
          id="standard-with-placeholder"
          label="username"
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
