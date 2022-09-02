import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { Box, makeStyles, Typography } from "@material-ui/core";
import { registerUser } from "../Service/Api";
import { useNavigate } from "react-router-dom";

import "../App.css";

const initialValues = {
  email: "",
  password: "",
};

export default function SignInPage() {
  const [register, setRegister] = useState(initialValues);
  const { password, email } = register;
  const history = useNavigate();

  const registerUserDetails = async () => {
    await registerUser(register);
    history("/all");
  };
  const valueChange = (e) => {
    console.log(e.target.value);
    setRegister({ ...register, [e.target.name]: e.target.value });
  };

  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      <h2>Sign in</h2>
      <form action="/home">
        <p>
          <label>Email</label>
          <br />
          <input
            type="text"
            onChange={(e) => valueChange(e)}
            name="email"
            value={email}
            required
          />
        </p>
        <p style={{ textAlign: "center" }}>
          <label>Password</label>
          <Link to="/forget-password">
            <label className="right-label">Forget password?</label>
          </Link>
          <br />
          <input
            type="password"
            onChange={(e) => valueChange(e)}
            name="password"
            value={password}
            required
          />
        </p>
        <p>
          <button
            id="sub_btn"
            type="submit"
            onClick={() => registerUserDetails()}
          >
            Login
          </button>
        </p>
      </form>
      <footer style={{ textAlign: "center" }}>
        <p>
          First time? <Link to="/register">Create an account</Link>.
        </p>
        <p>
          <Link to="/all">Back to Homepage</Link>.
        </p>
      </footer>
    </div>
  );
}
