import React from 'react';
import { Box, Typography, Divider, Grid, Paper, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import watermark from '../assets/BloodOath-product1.webp';

const DeveloperWickPage = () => {
  const projects = [
    {
      name: 'Microverse',
      desc: 'A biotech ecosystem portal with study hubs, mentorship, and more.',
      github: '#',
      live: '#'
    },
    {
      name: 'Catchy Cloud',
      desc: 'E-commerce frontend for organic handmade products.',
      github: '#',
      live: '#'
    },
    {
      name: 'Portfolio Wick Mode',
      desc: 'Interactive, John Wick-inspired animated portfolio.',
      github: '#',
      live: '#'
    }
  ];

  const stack = ['HTML', 'CSS', 'JavaScript', 'React.js', 'Material UI', 'Framer Motion', 'Firebase', 'GitHub'];

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'radial-gradient(circle at top, #0f0f0f, #070707)',
        color: '#fff',
        px: { xs: 3, md: 10 },
        py: 6,
        fontFamily: 'Orbitron, sans-serif',
        position: 'relative',
        overflow: 'hidden',
        cursor: 'crosshair',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
      }}
    >
      <Box>
        {/* Scanlines */}
        <Box sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: 'repeating-linear-gradient(to bottom, rgba(255,255,255,0.02) 0, transparent 2px, transparent 6px)',
          pointerEvents: 'none',
          zIndex: 1
        }} />

        <motion.div initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} style={{ zIndex: 2 }}>
          <Typography variant="caption" sx={{ backgroundColor: '#00bcd4', color: '#000', px: 2, py: 0.5, borderRadius: 1, fontFamily: 'monospace', mb: 2, display: 'inline-block' }}>
            ... SUBJECT IDENTIFIED: FRONT-END DEVELOPER
          </Typography>
        </motion.div>

        <Typography variant="h3" gutterBottom sx={{ textAlign: 'center', fontWeight: 600, textShadow: '0 0 10px #00e5ff', zIndex: 2 }}>
          💻 YUVRAJ SALUNKE – DOSSIER
        </Typography>

        <Box sx={{ textAlign: 'center', mt: 2, mb: 6, zIndex: 2 }}>
          <TypeAnimation
            sequence={['Decrypting skill modules...', 1500, 'Accessing project vault...', 1500]}
            wrapper="span"
            speed={40}
            style={{ fontSize: '1.1rem', color: '#00e5ff', fontFamily: 'monospace' }}
            repeat={Infinity}
          />
        </Box>

        <Divider sx={{ my: 5, bgcolor: '#00bcd4' }} />

        {/* Tech Stack as Weapon Arsenal */}
        <Typography variant="h5" gutterBottom>🫨 Weapon Arsenal (Tech Stack)</Typography>
        <Grid container spacing={2}>
          {stack.map((tech, index) => (
            <Grid item xs={6} md={3} key={index}>
              <Paper elevation={4} sx={{ background: '#111', color: '#0ff', textAlign: 'center', fontWeight: 600, p: { xs: 2, md: 3 } }}>
                {tech}
              </Paper>
            </Grid>
          ))}
        </Grid>

        <Divider sx={{ my: 5, bgcolor: '#00bcd4' }} />

        {/* Project Panels */}
        <Typography variant="h5" gutterBottom>🗂️ Mission Access Panels</Typography>
        <Grid container spacing={3}>
          {projects.map((proj, idx) => (
            <Grid item xs={12} md={4} key={idx}>
              <Paper elevation={4} sx={{ background: '#1a1a1a', border: '1px solid #333', position: 'relative', p: { xs: 2, md: 3 } }}>
                <img src={watermark} alt="seal" style={{ position: 'absolute', bottom: 10, right: 10, width: 45, opacity: 0.9 }} />
                <Typography variant="h6" color="#00e5ff">{proj.name}</Typography>
                <Typography variant="body2" sx={{ mt: 1 }}>{proj.desc}</Typography>
                <Box sx={{ display: 'flex', gap: 2, mt: 2, flexWrap: 'wrap' }}>
                  <Button size="small" variant="outlined" href={proj.github} sx={{ borderColor: '#00bcd4', color: '#00bcd4', '&:hover': { borderColor: '#00e5ff' } }}>GitHub</Button>
                  <Button size="small" variant="outlined" href={proj.live} sx={{ borderColor: '#00bcd4', color: '#00bcd4', '&:hover': { borderColor: '#00e5ff' } }}>Live</Button>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default DeveloperWickPage;
