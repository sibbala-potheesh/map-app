import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Container,
  Paper,
  TextField,
  Button,
  Typography,
  Avatar,
} from "@mui/material";
import { Lock as LockIcon } from "lucide-react";

import api from "../api";

const Login = ({ onLogin }) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("admin@test.com");
  const [password, setPassword] = useState("Admin@123");

  const handleLogin = async () => {
    try {
      const { data } = await api.post("api/login", { username, password });
      localStorage.setItem("token", data.token);
      onLogin();
      navigate("/dashboard");
    } catch (err) {
      alert("Invalid credentials");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin();
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1506012787146-f92b2d7d6d96?auto=format&fit=crop&q=80&w=2069')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Container component="main" maxWidth="xs">
        <Paper
          elevation={24}
          sx={{
            p: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: "rgba(255, 255, 255, 0.95)",
            backdropFilter: "blur(10px)",
            borderRadius: 2,
            position: "relative",
            overflow: "hidden",
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "4px",
              background: "linear-gradient(90deg, #1976d2, #dc004e)",
            },
          }}
        >
          <Avatar
            sx={{
              m: 1,
              bgcolor: "primary.main",
              width: 56,
              height: 56,
              boxShadow: 2,
            }}
          >
            <LockIcon size={32} />
          </Avatar>
          <Typography
            component="h1"
            variant="h4"
            sx={{
              mb: 3,
              fontWeight: 700,
              background: "linear-gradient(90deg, #1976d2, #dc004e)",
              backgroundClip: "text",
              textFillColor: "transparent",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Welcome Back
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ width: "100%" }}>
            <TextField
              margin="normal"
              required
              fullWidth
              label="Username"
              autoComplete="username"
              autoFocus
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "&:hover fieldset": {
                    borderColor: "primary.main",
                  },
                },
              }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              label="Password"
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "&:hover fieldset": {
                    borderColor: "primary.main",
                  },
                },
              }}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                py: 1.5,
                fontSize: "1.1rem",
                fontWeight: 600,
                textTransform: "none",
                background: "linear-gradient(90deg, #1976d2, #dc004e)",
                "&:hover": {
                  background: "linear-gradient(90deg, #1565c0, #c4004e)",
                },
              }}
            >
              Sign In
            </Button>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default Login;
