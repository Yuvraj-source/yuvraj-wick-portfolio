import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Tooltip,
  Box
} from '@mui/material';

import DescriptionIcon from '@mui/icons-material/Description';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import JohnIcon from '../assets/JohnIcon.png';

const Header = () => {
  return (
    <AppBar
      position="sticky"
      elevation={6}
      sx={{
        background: '#0a0a0a',
        borderBottom: '1px solid #222',
        color: '#fff',
        fontFamily: 'Orbitron, sans-serif',
        backdropFilter: 'blur(4px)',
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 1, sm: 4 } }}>
        {/* Left: Logo & Tagline */}
        <Box display="flex" alignItems="center">
          <IconButton href="/" color="inherit" sx={{ p: 0 }}>
            <Box
              component="img"
              src={JohnIcon}
              alt="Wick Icon"
              sx={{
                width: 50,
                height: 50,
                filter: 'drop-shadow(0 0 6px #00e5ff)',
                transition: '0.3s ease',
                '&:hover': {
                  transform: 'scale(1.05)',
                  filter: 'drop-shadow(0 0 12px #00e5ff)',
                }
              }}
            />
          </IconButton>
          <Typography
            variant="subtitle2"
            sx={{
              ml: 2,
              color: '#00e5ff',
              fontSize: '0.75rem',
              fontFamily: 'monospace',
              letterSpacing: 1,
              display: { xs: 'none', sm: 'block' },
              textShadow: '0 0 8px rgba(0,229,255,0.6)'
            }}
          >
             Surveillance Active · Operative: Yuvraj S.
          </Typography>
        </Box>

        {/* Right: Action Icons */}
        <Box display="flex" alignItems="center" gap={1}>
          <Tooltip title="Download Resume">
            <IconButton
              href="/Yuvraj_Resume_Microbiology.pdf"
              target="_blank"
              color="inherit"
              sx={{
                '&:hover': {
                  color: '#00e5ff',
                  textShadow: '0 0 10px #00e5ff'
                }
              }}
            >
              <DescriptionIcon fontSize="medium" />
            </IconButton>
          </Tooltip>

          <Tooltip title="Email Me">
            <IconButton
              href="mailto:ydsalunke123@gmail.com"
              color="inherit"
              sx={{
                '&:hover': {
                  color: '#00e5ff',
                  textShadow: '0 0 10px #00e5ff'
                }
              }}
            >
              <EmailIcon fontSize="medium" />
            </IconButton>
          </Tooltip>

          <Tooltip title="LinkedIn">
            <IconButton
              href="https://www.linkedin.com/in/yuvraj-salunke-89192411b"
              target="_blank"
              color="inherit"
              sx={{
                '&:hover': {
                  color: '#00e5ff',
                  textShadow: '0 0 10px #00e5ff'
                }
              }}
            >
              <LinkedInIcon fontSize="medium" />
            </IconButton>
          </Tooltip>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
