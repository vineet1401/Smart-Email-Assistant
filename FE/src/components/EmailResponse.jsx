import React from "react";
import { Button, Container, Typography, Box } from "@mui/material";

const EmailResponse = ({ text, onBack }) => {
  // Function to copy text
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    alert("Copied to clipboard!");
  };

  return (

    <Container maxWidth="md" style={{ marginTop: "2rem" }}>
      <Typography variant="h4" gutterBottom>
        Generated Email
      </Typography>

      {/* Generated Text */}
      <Box
        sx={{
          border: "1px solid #ccc",
          borderRadius: "8px",
          padding: "1rem",
          marginBottom: "1rem",
          whiteSpace: "pre-wrap", // keeps line breaks
        }}
      >
        {text}
      </Box>

      {/* Buttons */}
      <Box display="flex" gap={2}>
        <Button variant="contained" color="primary" onClick={handleCopy}>
          Copy
        </Button>
        <Button variant="outlined" color="secondary" onClick={onBack}>
          Back
        </Button>
      </Box>
    </Container>
  );
};

export default EmailResponse;
