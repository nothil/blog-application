import React from "react";
import {
  AppBar,
  Toolbar,
  Box,
  makeStyles,
  //   Typography,
} from "@material-ui/core";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles({
  component: {
    backgroundColor: "#330066",
    height: "auto",
  },
  headerBar: {
    backgroundColor: "#330066",
    height: 60,
    position: "static",
  },
  tabs: {
    color: "#FFFFFF",
    textDecoration: "none",
    marginRight: 20,
    fontSize: 20,
  },
});

const Navbar = () => {
  const className = useStyles();
  return (
    <Box className={className.component}>
      <AppBar position="static" className={className.headerBar}>
        <Toolbar>
          <NavLink to="./" className={className.tabs}>
            {" "}
            Sign up{" "}
          </NavLink>
          <NavLink to="all" className={className.tabs}>
            {" "}
            Users{" "}
          </NavLink>
          <NavLink to="add" className={className.tabs}>
            {" "}
            Add user{" "}
          </NavLink>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
