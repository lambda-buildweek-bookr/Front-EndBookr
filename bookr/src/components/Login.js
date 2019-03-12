import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import logo from "../../design/logo.png";

class Login extends React.Component {
  state = {
    username: "",
    password: ""
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
        />
        <TextField
          id="standard-with-placeholder"
          label="password"
          placeholder="password"
          margin="normal"
          name="password"
        />
        <Button
          onClick={ev => this.props.history.push("/")}
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
