import React from 'react';
import { Box, Typography, Divider, Grid, Paper, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import microverseImg from '../assets/microverse-img.png';
import cloudKitchen from '../assets/cloudKitchen.png';
import importExport from '../assets/import-export.png';

const DeveloperWickPage = () => {
  const projects = [
    {
      name: 'Microverse',
      desc: 'An all-in-one biotechnology portal tailored for students and professionals. Microverse offers access to study materials, discussion forums, mentorship booking, career updates, and more — all with a sleek, John Wick-inspired interface.',
      github: '',
      live: 'https://spiffy-babka-74494a.netlify.app/',
      image: microverseImg
    },
    {
      name: 'Foodie',
      desc: 'A responsive landing page for a fictional cloud kitchen brand offering traditional Indian meals. Designed with clarity and user flow in mind, the interface prioritizes intuitive navigation and high conversion potential.' ,
      github: '#',
      live: 'https://timely-jelly-5304b3.netlify.app/',
      image: cloudKitchen
    },
    {
      name: 'Export Company',
      desc: 'A clean and professional website for an agricultural export firm. Emphasizes credibility and clarity while highlighting India’s global role in food exports.',
      github: 'https://neon-khapse-3698b3.netlify.app/',
      live: '#',
      image: importExport
    }
  ];

  const stack = ['HTML', 'CSS', 'JavaScript', 'React.js', 'Material UI', 'Framer Motion', 'Firebase', 'GitHub', 'Bootstrap'];

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
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: 'repeating-linear-gradient(to bottom, rgba(255,255,255,0.02) 0, transparent 2px, transparent 6px)',
            pointerEvents: 'none',
            zIndex: 1
          }}
        />

        <motion.div initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} style={{ zIndex: 2 }}>
          <Typography
            variant="caption"
            sx={{
              backgroundColor: '#00bcd4',
              color: '#000',
              px: 2,
              py: 0.5,
              borderRadius: 1,
              fontFamily: 'monospace',
              mb: 2,
              display: 'inline-block'
            }}
          >
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

        {/* Tech Stack */}
        <Typography variant="h5" gutterBottom>🫨 Weapon Arsenal (Tech Stack)</Typography>
        <Grid container spacing={2}>
          {stack.map((tech, index) => (
            <Grid item xs={6} sm={4} md={3} key={index}>
              <Paper elevation={4} sx={{ background: '#111', color: '#0ff', textAlign: 'center', fontWeight: 600, p: 2 }}>
                {tech}
              </Paper>
            </Grid>
          ))}
        </Grid>

        <Divider sx={{ my: 5, bgcolor: '#00bcd4' }} />

        {/* Internship */}
        <Typography variant="h5" gutterBottom>🎯 Field Ops Log (Internship)</Typography>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper elevation={4} sx={{ background: '#181818', borderLeft: '4px solid #f57c00', p: 3 }}>
              <Typography fontWeight={600} sx={{ fontSize: '1.1rem' }} color="#ffa726">
                Web Development Intern (Remote)
              </Typography>
              <Typography variant="body2" color="#ccc" sx={{ fontSize: '1rem' }}>
                Creative I Digital Agency, Erode, Tamil Nadu — Duration: 3 Months
              </Typography>
              <Typography variant="body2" sx={{ mt: 1, color: '#aaa', fontSize: '1rem' }}>
                Contributed to responsive front-end development, integrated real-time UI components, and optimized performance for client websites and dashboards under professional supervision.
              </Typography>
            </Paper>
          </Grid>
        </Grid>

        <Divider sx={{ my: 5, bgcolor: '#00bcd4' }} />

        {/* Projects */}
       <Grid container spacing={3} justifyContent="center">
  {projects.map((proj, idx) => (
    <Grid item xs={12} sm={6} key={idx}>
      <Paper
        elevation={4}
        sx={{
          background: '#1a1a1a',
          border: '1px solid #333',
          borderRadius: 2,
          width: '100%',
          maxWidth: 550,
          height: 420,
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          mx: 'auto'
        }}
      >
        {/* Image */}
        <Box
          component="img"
          src={proj.image}
          alt={proj.name}
          sx={{
            width: '100%',
            height: 180,
            objectFit: 'cover',
            borderBottom: '1px solid #444',
          }}
        />

        {/* Content */}
        <Box sx={{ p: 2, display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
          <Typography variant="h6" color="#00e5ff" sx={{ mb: 1 }}>
            {proj.name}
          </Typography>

          <Typography
            variant="body2"
            sx={{
              color: '#ccc',
              flexGrow: 1,
              fontSize: '0.9rem',
              mb: 2,
              overflow: 'hidden',
              textOverflow: 'ellipsis'
            }}
          >
            {proj.desc}
          </Typography>

          <Box sx={{ display: 'flex', gap: 1 }}>
            <Button
              size="small"
              variant="outlined"
              href={proj.github}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                borderColor: '#00bcd4',
                color: '#00bcd4',
                textTransform: 'none',
                '&:hover': { borderColor: '#00e5ff', color: '#00e5ff' }
              }}
            >
              GitHub
            </Button>
            <Button
              size="small"
              variant="outlined"
              href={proj.live}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                borderColor: '#00bcd4',
                color: '#00bcd4',
                textTransform: 'none',
                '&:hover': { borderColor: '#00e5ff', color: '#00e5ff' }
              }}
            >
              Live
            </Button>
          </Box>
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
