import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { NavLink } from "react-router-dom";
import logowhite from "../design/logowhite.png";

function NavBar() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar
          style={{
            margin: "0 10%",
            maxWidth: "1280px",
            display: "flex",
            justifyContent: "space-between"
          }}
        >
          <Typography variant="h6" color="inherit">
            <img
              style={{
                height: "75px",
                fontWeight: "bold",
                color: "white"
              }}
              src={logowhite}
              alt="logo"
            />
          </Typography>
          <div className="nav-buttons">
            <NavLink style={{ textDecoration: "none", color: "white" }} to="/">
              <Button color="inherit">Home</Button>
            </NavLink>
            <Button color="inherit">Review</Button>
            <NavLink
              style={{ textDecoration: "none", color: "white" }}
              to="/login"
            >
              {" "}
              <Button color="inherit">Login</Button>
            </NavLink>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
export default NavBar;
