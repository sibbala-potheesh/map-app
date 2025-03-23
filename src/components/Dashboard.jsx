import React, { useEffect, useState } from "react";
import api from "../api"; // Import your custom API instance
import {
  Box,
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  AppBar,
  Toolbar,
  IconButton,
  Avatar,
  Divider,
  CircularProgress,
} from "@mui/material";
import { Map, BarChart2, Users, Activity, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";

const iconMap = {
  Map,
  BarChart2,
  Users,
  Activity,
};

const Dashboard = ({ setIsAuthenticated }) => {
  const navigate = useNavigate();
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const response = await api.get("api/dashboard");
        setCards(response.data.cards);
      } catch (err) {
        setError("Failed to load dashboard data");
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    setIsAuthenticated(false);
    navigate("/");
  };

  if (loading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <Typography color="error">{error}</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ flexGrow: 1, minHeight: "100vh", bgcolor: "#f5f5f5" }}>
      <AppBar
        position="static"
        elevation={3}
        sx={{
          background: "linear-gradient(90deg, #0d47a1, #1976d2)",
          padding: "8px 0",
        }}
      >
        <Toolbar>
          <Typography
            variant="h5"
            component="div"
            sx={{
              flexGrow: 1,
              fontWeight: 700,
              letterSpacing: "0.5px",
              color: "white",
            }}
          >
            Command Center
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Avatar sx={{ bgcolor: "#42a5f5", cursor: "pointer" }}>A</Avatar>
            <IconButton color="inherit" onClick={handleLogout}>
              <LogOut size={24} />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      <Container sx={{ py: 6 }} maxWidth="lg">
        <Typography
          variant="h4"
          sx={{ mb: 4, fontWeight: 700, color: "#1a237e" }}
        >
          Welcome back, Admin
        </Typography>

        <Grid container spacing={4}>
          {cards.map((card) => (
            <Grid item key={card.id} xs={12} sm={6} md={3}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: "0 12px 24px rgba(0,0,0,0.1)",
                  },
                }}
              >
                <Box
                  sx={{ p: 3, display: "flex", alignItems: "center", gap: 2 }}
                >
                  <Avatar
                    sx={{
                      bgcolor: `${card.color}22`,
                      color: card.color,
                      width: 48,
                      height: 48,
                    }}
                  >
                    {React.createElement(iconMap[card.icon], { size: 24 })}
                  </Avatar>
                  <Box>
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: 600, color: "#1a237e" }}
                    >
                      {card.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {card.stats}
                    </Typography>
                  </Box>
                </Box>

                <Divider sx={{ mx: 2 }} />

                <CardContent sx={{ flexGrow: 1, pt: 2 }}>
                  <Typography variant="body1" color="text.secondary">
                    {card.description}
                  </Typography>
                </CardContent>

                <CardActions sx={{ p: 2, pt: 0 }}>
                  <Button
                    fullWidth
                    variant="contained"
                    onClick={() => navigate(card.link)}
                    sx={{ bgcolor: card.color, textTransform: "none", py: 1 }}
                  >
                    View Details
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Dashboard;
