import React from "react";
import {
  Box,
  Container,
  Typography,
  Paper,
  AppBar,
  Toolbar,
  IconButton,
  Grid,
  Card,
  CardContent,
  Avatar,
} from "@mui/material";
import {
  ArrowLeft,
  BarChart2,
  TrendingUp,
  PieChart,
  Activity,
  Clock,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const features = [
  {
    title: "Real-time Analytics",
    icon: Activity,
    description: "Monitor live data streams and metrics",
    color: "#2196F3",
  },
  {
    title: "Performance Metrics",
    icon: TrendingUp,
    description: "Track system and user performance",
    color: "#4CAF50",
  },
  {
    title: "Custom Reports",
    icon: BarChart2,
    description: "Generate detailed custom reports",
    color: "#9C27B0",
  },
  {
    title: "Data Visualization",
    icon: PieChart,
    description: "Interactive charts and graphs",
    color: "#F44336",
  },
];

const Analytics = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1, minHeight: "100vh", bgcolor: "#f5f5f5" }}>
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
            Analytics Dashboard
          </Typography>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Paper
          sx={{
            p: 4,
            textAlign: "center",
            background: "linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)",
            borderRadius: 4,
            position: "relative",
            overflow: "hidden",
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "4px",
              background: "linear-gradient(90deg, #2196F3, #1565c0)",
            },
          }}
        >
          <Box
            sx={{
              position: "relative",
              mb: 6,
              "&::after": {
                content: '""',
                position: "absolute",
                bottom: -20,
                left: "50%",
                transform: "translateX(-50%)",
                width: 60,
                height: 4,
                bgcolor: "primary.main",
                borderRadius: 2,
              },
            }}
          >
            <Clock size={48} color="#1976d2" />
            <Typography
              variant="h3"
              sx={{
                mt: 2,
                mb: 1,
                fontWeight: 700,
                background: "linear-gradient(90deg, #1976d2, #1565c0)",
                backgroundClip: "text",
                textFillColor: "transparent",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Coming Soon
            </Typography>
            <Typography
              variant="h6"
              color="text.secondary"
              sx={{ maxWidth: 600, mx: "auto", mb: 4 }}
            >
              We're working hard to bring you a powerful analytics dashboard.
              Stay tuned for comprehensive insights and data visualization
              tools.
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {features.map((feature) => (
              <Grid item xs={12} sm={6} md={3} key={feature.title}>
                <Card
                  sx={{
                    height: "100%",
                    transition: "transform 0.2s",
                    "&:hover": {
                      transform: "translateY(-4px)",
                    },
                  }}
                >
                  <CardContent
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      textAlign: "center",
                      p: 3,
                    }}
                  >
                    <Avatar
                      sx={{
                        bgcolor: `${feature.color}22`,
                        color: feature.color,
                        width: 56,
                        height: 56,
                        mb: 2,
                      }}
                    >
                      {React.createElement(feature.icon, { size: 28 })}
                    </Avatar>
                    <Typography
                      variant="h6"
                      sx={{
                        mb: 1,
                        fontWeight: 600,
                        color: "text.primary",
                      }}
                    >
                      {feature.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {feature.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
};

export default Analytics;
