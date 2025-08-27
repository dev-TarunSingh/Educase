import React, { useState } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const isFormValid = email && password;

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        bgcolor: "#f9fafb",
        padding: 2,
        minHeight: "100vh",
      }}
    >
      <Box sx={{ width: "100%", maxWidth: 400, mt: 5 }}>
        {/* Heading */}
        <Typography variant="h5" fontWeight="600" color="text.primary">
          Signin to your
        </Typography>
        <Typography
          variant="h5"
          fontWeight="600"
          color="text.primary"
          sx={{ mb: 1 }}
        >
          PopX account
        </Typography>

        {/* Subtitle */}
        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
          Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit,
        </Typography>

        {/* Email Input */}
        <TextField
          label="Email Address"
          placeholder="Enter email address"
          variant="outlined"
          fullWidth
          size="small"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          InputLabelProps={{
            shrink: true,
            sx: { color: "#6C25FF" },
          }}
          sx={{
            mb: 2,
            "&.Mui-focused fieldset": { borderColor: "#6C25FF" },
          }}
        />

        {/* Password Input */}
        <TextField
          label="Password"
          placeholder="Enter password"
          type="password"
          variant="outlined"
          fullWidth
          size="small"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          InputLabelProps={{
            shrink: true,
            sx: { color: "#6C25FF" },
          }}
          sx={{
            mb: 2,
            "&.Mui-focused fieldset": { borderColor: "#6C25FF" },
          }}
        />

        <Button
          variant="contained"
          fullWidth
          sx={{
            bgcolor: isFormValid ? "#6C25FF" : "grey.400",
            color: "white",
            fontWeight: 600,
            textTransform: "none",
            py: 1.2,
            "&:hover": {
              bgcolor: isFormValid ? "#5a1ccc" : "grey.500",
            },
          }}
          onClick={() => navigate("/Dashboard")}
        >
          Login
        </Button>
        
      </Box>
    </Box>
  );
}
