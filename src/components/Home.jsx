import React from "react";
import { Link } from "react-router-dom";
import { Box, makeStyles, Typography } from "@material-ui/core";

import "../App.css";

export default function SignInPage() {
  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      <h2>Sign in</h2>
      <form action="/home">
        <p>
          <label>Username</label>
          <br />
          <input type="text" name="first_name" required />
        </p>
        <p style={{ textAlign: "center" }}>
          <label>Password</label>
          <Link to="/forget-password">
            <label className="right-label">Forget password?</label>
          </Link>
          <br />
          <input type="password" name="password" required />
        </p>
        <p>
          <button id="sub_btn" type="submit">
            Login
          </button>
        </p>
      </form>
      <footer style={{ textAlign: "center" }}>
        <p>
          First time? <Link to="/register">Create an account</Link>.
        </p>
        <p>
          <Link to="/">Back to Homepage</Link>.
        </p>
      </footer>
    </div>
  );
}
