import { Button } from "@mui/material";
import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Eye, EyeSlash } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <Form className="w-100" style={{ maxWidth: "400px" }}>
        <h2 className="text-center mb-4">Login</h2>

        <Form.Group controlId="formBasicUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Username" required />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <div className="d-flex align-items-center">
            <Form.Control
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              required
            />
            <Button
              variant="outline-secondary"
              onClick={() => setShowPassword(!showPassword)}
              style={{ marginLeft: "5px" }}
            >
              {showPassword ? <EyeSlash /> : <Eye />}
            </Button>
          </div>
        </Form.Group>

        <Button
          variant="contained"
          color="primary"
          type="submit"
          className="w-100"
        >
          Login
        </Button>
        <Link to="/register">
          <Button
            variant="contained"
            color="primary"
            type="submit"
            className="w-100 mt-2"
          >
            Register
          </Button>
        </Link>
      </Form>
    </div>
  );
}
