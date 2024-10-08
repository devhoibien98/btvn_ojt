import React from "react";
import { TextField, Button, Typography } from "@mui/material";
import "../../SASS/SignUp.scss";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="signup-container">
      <Typography variant="h4" className="signup-title">
        Register
      </Typography>

      <form className="signup-form">
        <TextField
          fullWidth
          variant="outlined"
          label="Username"
          required
          margin="normal"
        />

        <TextField
          fullWidth
          variant="outlined"
          label="Mật khẩu"
          type="Password"
          required
          margin="normal"
        />

        <TextField
          fullWidth
          variant="outlined"
          label="Address"
          required
          margin="normal"
        />

        <TextField
          fullWidth
          variant="outlined"
          label="FullName"
          required
          margin="normal"
        />

        <TextField
          fullWidth
          variant="outlined"
          label="NumberPhone"
          required
          margin="normal"
        />

        <TextField
          fullWidth
          variant="outlined"
          label="Email"
          type="email"
          required
          margin="normal"
        />

        <Button
          variant="contained"
          color="primary"
          type="submit"
          className="signup-button"
        >
          Register
        </Button>
        <div className="mt-4">
          <Link to="/login">
            <Button
              variant="contained"
              color="primary"
              type="submit"
              className="signup-button"
            >
              Login
            </Button>
          </Link>
        </div>
      </form>
    </div>
  );
}
