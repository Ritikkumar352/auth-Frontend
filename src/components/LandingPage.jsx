import React from "react";
import { Button, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./LandingPage.css";


function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="landing-page">
      <Container className="content">
        <Typography variant="h2" className="title">
          Welcome to Our Platform
        </Typography>
        <Typography variant="h5" className="subtitle">
          Experience seamless authentication with a modern design.
        </Typography>
        <div className="buttons">
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate("/login")}
          >
            Login
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            onClick={() => navigate("/register")}
          >
            Register
          </Button>
        </div>
      </Container>
    </div>
  );
}

export default LandingPage;
