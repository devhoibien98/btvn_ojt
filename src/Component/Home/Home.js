import { Button } from "@mui/material";
import React from "react";

import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100">
      <h1>Welcome to My Page</h1>
      <div className="mb-3">
        <Link to="/login">
          <Button variant="contained" color="primary">
            Login
          </Button>
        </Link>
      </div>
      <div>
        <Link to="/contact">
          <Button variant="contained" color="primary">
            Contact
          </Button>
        </Link>
      </div>
    </div>
  );
}
