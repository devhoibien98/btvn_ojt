import React from "react";
import { TextField, Button, Typography, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Contact() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate("/login");
  };

  return (
    <Container className="contact-container">
      <Typography variant="h4" className="contact-title">
        Contact
      </Typography>

      <form className="contact-form" onSubmit={handleSubmit}>
        <TextField
          fullWidth
          variant="outlined"
          label="Email"
          type="email"
          required
          margin="normal"
        />

        <TextField
          fullWidth
          variant="outlined"
          label="Message"
          multiline
          rows={4}
          required
          margin="normal"
        />

        <Button
          variant="contained"
          color="primary"
          type="submit"
          className="contact-button"
        >
          Send
        </Button>
      </form>
    </Container>
  );
}
