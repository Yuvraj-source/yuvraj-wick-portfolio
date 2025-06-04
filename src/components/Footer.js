// Footer.jsx
import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        width: '100%',
        py: 3,
        px: 2,
        mt: 'auto',
        textAlign: 'center',
        borderTop: '1px solid #333',
        background: 'transparent',
        color: '#aaa',
        fontFamily: 'Orbitron, sans-serif',
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 1 }}>
        <IconButton
          href="mailto:ydsalunke123@gmail.com"
          color="inherit"
          sx={{ '&:hover': { color: '#00e5ff' } }}
        >
          <EmailIcon />
        </IconButton>
        <IconButton
          href="https://github.com/ydsalunke"
          target="_blank"
          color="inherit"
          sx={{ '&:hover': { color: '#00e5ff' } }}
        >
          <GitHubIcon />
        </IconButton>
        <IconButton
          href="https://www.linkedin.com/in/yuvraj-salunke-89192411b"
          target="_blank"
          color="inherit"
          sx={{ '&:hover': { color: '#00e5ff' } }}
        >
          <LinkedInIcon />
        </IconButton>
      </Box>

      <Typography variant="body2" sx={{ fontSize: '0.8rem' }}>
        © 2025 Yuvraj S. — Crafted in <strong>Wick Mode</strong>
      </Typography>
    </Box>
  );
};

export default Footer;
