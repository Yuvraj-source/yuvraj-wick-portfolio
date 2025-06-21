// Footer.jsx
import React from 'react';
import { Box, Typography, IconButton, Divider } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        width: '100%',
        py: 4,
        px: 2,
        mt: 'auto',
        textAlign: 'center',
        background: 'radial-gradient(circle at top, #0f0f0f, #070707)',
        position: 'relative',
        borderTop: '1px solid #222',
        fontFamily: 'Orbitron, sans-serif',
        color: '#00e5ff',
        overflow: 'hidden'
      }}
    >
      {/* Scanline effect */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          height: '100%',
          width: '100%',
          backgroundImage:
            'repeating-linear-gradient(to bottom, rgba(255,255,255,0.02) 0, transparent 2px, transparent 6px)',
          zIndex: 1,
          pointerEvents: 'none',
        }}
      />

      {/* Social Links */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          gap: 2,
          mb: 2,
          position: 'relative',
          zIndex: 2,
        }}
      >
        <IconButton
          href="mailto:ydsalunke123@gmail.com"
          color="inherit"
          sx={{ '&:hover': { color: '#fff' } }}
        >
        <EmailIcon fontSize="large" />
        </IconButton>
        <IconButton
          href="https://github.com/ydsalunke"
          target="_blank"
          color="inherit"
          sx={{ '&:hover': { color: '#fff' } }}
        >
         <GitHubIcon fontSize="large" />
        </IconButton>
        <IconButton
          href="https://www.linkedin.com/in/yuvraj-salunke-89192411b"
          target="_blank"
          color="inherit"
          sx={{ '&:hover': { color: '#fff' } }}
        >
          <LinkedInIcon fontSize="large" />
        </IconButton>
      </Box>

      {/* Divider line */}
      <Divider sx={{ bgcolor: '#00bcd4', opacity: 0.2, mb: 1 }} />

      {/* Footer Text */}
      <Typography
        variant="body2"
        sx={{
          fontSize: '0.75rem',
          color: '#aaa',
          zIndex: 2,
          position: 'relative',
        }}
      >
        ⛓️  © 2025 <strong>Yuvi’s</strong> — Crafted in <span style={{ color: '#00e5ff' }}>Wick Mode</span>
      </Typography>
    </Box>
  );
};

export default Footer;
