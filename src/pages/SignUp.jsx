import React, { useState } from "react";
import { Box, Typography, TextField, Button, Radio, RadioGroup, FormControlLabel, FormLabel } from "@mui/material";
import { useNavigate } from "react-router-dom";


export default function Signup() {
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    agency: "Yes",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const isFormValid = form.fullName && form.phone && form.email && form.password && form.agency;

  const navigate = useNavigate();

  return (

    <>
      <Box
        sx={{
          justifyContent: "center",
          alignItems: "flex-start",
          bgcolor: "#f9fafb",
        
        }}
      >
        <Box sx={{
          padding: 2
        }}><Typography className="Title" variant="h5" fontWeight={600} sx={{ mb: 3, marginTop: 5 }}>
            Create your<br /> PopX account
          </Typography>

          <TextField
            label="Full Name"
            required
            name="fullName"
            value={form.fullName}
            onChange={handleChange}
            placeholder="Marry Doe"
            variant="outlined"
            fullWidth
            size="small"
            sx={{ mb: 2 }}
            InputLabelProps={{
              shrink: true,
              sx: {
                color: "#6C25FF",
                "& .MuiInputLabel-asterisk": {
                  color: "red",
                },
              },
            }}
          />

          {/* Phone Number */}
          <TextField
            label="Phone number "
            required
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="9876543210"
            variant="outlined"
            fullWidth
            size="small"
            sx={{ mb: 2 }}
            InputLabelProps={{
              shrink: true,
              sx: {
                color: "#6C25FF",
                "& .MuiInputLabel-asterisk": {
                  color: "red",
                },
              },
            }}
          />

          {/* Email */}
          <TextField
            label="Email address"
            required
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="example@mail.com"
            variant="outlined"
            fullWidth
            size="small"
            sx={{ mb: 2 }}
            InputLabelProps={{
              shrink: true,
              sx: {
                color: "#6C25FF",
                "& .MuiInputLabel-asterisk": {
                  color: "red",
                },
              },
            }}
          />


          {/* Password */}
          <TextField
            label="Password "
            required
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Enter password"
            type="password"
            variant="outlined"
            fullWidth
            size="small"
            sx={{ mb: 2 }}
            InputLabelProps={{
              shrink: true,
              sx: {
                color: "#6C25FF",
                "& .MuiInputLabel-asterisk": {
                  color: "red",
                },
              },
            }}
          />

          {/* Company Name */}
          <TextField
            label="Company name"
            name="company"
            value={form.company}
            onChange={handleChange}
            placeholder="Your company"
            variant="outlined"
            fullWidth
            size="small"
            sx={{ mb: 2 }}
            InputLabelProps={{ shrink: true, sx: { color: "#6C25FF" } }}
          />

          <FormLabel sx={{ display: "block", mb: 1 }}>
            Are you an Agency?*
          </FormLabel>
          <RadioGroup
            row
            name="agency"
            value={form.agency}
            onChange={handleChange}
            sx={{ mb: 3 }}
          >
            <FormControlLabel value="Yes" control={<Radio sx={{ color: "#6C25FF", "&.Mui-checked": { color: "#6C25FF" } }} />} label="Yes" />
            <FormControlLabel value="No" control={<Radio sx={{ color: "#6C25FF", "&.Mui-checked": { color: "#6C25FF" } }} />} label="No" />
          </RadioGroup>

          <Button
            className="btn-primary"
            variant="contained"
            style={{
              position: "absolute",
              bottom: 20
            }}
            fullWidth
            sx={{
              bgcolor: isFormValid ? "#6C25FF" : "grey.400",
              "&:hover": { bgcolor: isFormValid ? "#5a1ccc" : "grey.500" },
              color: "white",
              py: 1.5,
            }}
            onClick={() => navigate("/Dashboard")}
          >
            Create Account
          </Button></Box>
      </Box>
    </>
  );
}
