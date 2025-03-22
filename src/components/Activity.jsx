import React from "react";
import {
  Box,
  Container,
  Typography,
  Paper,
  AppBar,
  Toolbar,
  IconButton,
} from "@mui/material";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import ActivityImg from "../assets/activity.svg";

const Activity = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1, minHeight: "100vh", bgcolor: "#f5f5f5" }}>
      {/* App Bar */}
      <AppBar
        position="static"
        elevation={0}
        sx={{
          background: "linear-gradient(90deg, #1976d2, #1565c0)",
        }}
      >
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={() => navigate("/dashboard")}
            sx={{ mr: 2 }}
          >
            <ArrowLeft />
          </IconButton>
          <Typography
            variant="h5"
            component="div"
            sx={{
              flexGrow: 1,
              fontWeight: 600,
              letterSpacing: "0.5px",
            }}
          >
            Activity Dashboard
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Content */}
      <Container maxWidth="md" sx={{ py: 10, textAlign: "center" }}>
        <Paper
          sx={{
            p: 6,
            borderRadius: 4,
            background: "linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)",
          }}
        >
          {/* Imported SVG Illustration */}
          <Box sx={{ mb: 4 }}>
            <img
              src={ActivityImg}
              alt="Coming Soon"
              style={{ width: "200px", height: "200px" }}
            />
          </Box>

          {/* Text */}
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              background: "linear-gradient(90deg, #1976d2, #1565c0)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Coming Soon
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ mt: 2, maxWidth: 600, mx: "auto" }}
          >
            We are working on this feature. Stay tuned for updates!
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
};

export default Activity;
