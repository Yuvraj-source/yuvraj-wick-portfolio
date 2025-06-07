import React, { useState, useEffect, useRef } from 'react';
import { Box, Typography, Button, Fade } from '@mui/material';
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-router-dom';
import bg from '../assets/johnwick-bg.jpg';
import smoke from '../assets/Smoke.gif';
import { motion } from 'framer-motion';

const HeroSectionWick = () => {
  const [showIntro, setShowIntro] = useState(false);
  const gunshotSound = useRef(null);
  const wickAudio = useRef(null);
  const [wickActivated, setWickActivated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    gunshotSound.current = new Audio('/sounds/gunShot.mp3');
    gunshotSound.current.load();

    wickAudio.current = new Audio('/sounds/wick-bgm.mp3');
    wickAudio.current.loop = true;
    wickAudio.current.volume = 0.4;
    wickAudio.current.load();
  }, []);

  const handleWickMode = () => {
    if (wickAudio.current) {
      wickAudio.current.play().catch(err => console.warn('Autoplay blocked:', err));
    }
    setWickActivated(true);
  };

  return (
    <Fade in={showIntro} timeout={3000}>
      <Box
        sx={{
          height: '100vh',
          width: '100vw',
          backgroundImage: `url(${bg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          color: '#fff',
          position: 'relative',
          fontFamily: 'Orbitron, sans-serif',
          px: { xs: 2, md: 8 },
          py: { xs: 4, md: 6 },
          cursor: 'default'
        }}
      >
        {/* Grid & Fog */}
        <Box sx={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          backgroundImage: 'radial-gradient(circle at center, rgba(255,255,255,0.015) 1px, transparent 1px)',
          backgroundSize: '20px 20px',
          pointerEvents: 'none',
          zIndex: 0
        }} />

        <Box component="img" src={smoke} alt="fog" sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          opacity: 0.15,
          zIndex: 1,
          objectFit: 'cover'
        }} />

        <Typography 
          variant="caption" 
          sx={{ position: 'absolute', top: 16, left: 16, background: '#0009', px: 2, py: 0.5, borderRadius: 2 }}>
          Inspired by <strong>John Wick</strong>
        </Typography>

        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }}>
          <Typography variant="h2" sx={{ fontWeight: 'bold', mb: 2, textShadow: '0 0 20px #ff0044', fontSize: { xs: '1.8rem', sm: '2.5rem', md: '3rem' } }}>
            YUVRAJ SALUNKE
          </Typography>
        </motion.div>


        <Typography variant="h6" sx={{ fontFamily: 'monospace', color: '#eeee2a' , boxShadow: '0 0 15px rgba(0, 188, 212, 0.3)', }}>
          Analytical Mind. Creative Heart. 6 Years in Pharma QC | Code-Crafter by Passion.
        </Typography>
        <Typography variant="body2" sx={{ mt: 1, fontSize: '0.98rem', color: '#ccff00' }}>
          Dive into this portfolio — a blend of precision and aesthetics. Let’s connect and innovate together.
        </Typography>

        {/* Buttons */}
        <Box sx={{ display: 'flex', gap: 4, mt: 3, zIndex: 2 ,flexDirection: { xs: 'column', sm: 'row' } }}>
          <Button
            component={Link}
            to="/microbiologist"
            variant="outlined"
            onClick={() => gunshotSound.current && gunshotSound.current.play()}
            sx={{
              backgroundColor: '#0ff2',
              border: '2px solid #0ff',
              backdropFilter: 'blur(4px)',
              '&:hover': {
                boxShadow: '0 0 25px #00eaff',
                transform: 'scale(1.05)'
              }
            }}
          >
            🔬 QC Microbiologist
          </Button>

          <Button
            component={Link}
            to="/developer"
            variant="outlined"
            onClick={() => gunshotSound.current && gunshotSound.current.play()}
            sx={{
              backgroundColor: '#0ff2',
              border: '2px solid #0ff',
              backdropFilter: 'blur(4px)',
              '&:hover': {
                boxShadow: '0 0 25px #00eaff',
                transform: 'scale(1.05)'
              }
            }}
          >
            💻 Front-End Developer
          </Button>
        </Box>

        {/* Quotes */}
        <Box sx={{
          background: 'rgba(0,0,0,0.4)',
          border: '1px solid #444',
          borderRadius: 1,
          px: 3,
          py: 2,
          mt: 4,
          fontSize: '0.98rem',
          fontFamily: 'monospace',
          color: '#ccc',
          boxShadow: '0 0 15px rgba(0, 255, 255, 0.2)'
        }}>
          <TypeAnimation
            sequence={[
              'How you do anything is how you do everything',
              2000,
              'Si vis pacem, para bellum',
              2000,
              "If you want peace, prepare for war", 
              2000,
            ]}
            wrapper="span"
            speed={40}
            style={{ fontSize: 'clamp(0.95rem, 1vw + 0.5rem, 1.3rem)', fontWeight: 400, marginTop: '20px', color: '#aaa' }}
            repeat={Infinity}
          />
        </Box>

        {/* Wick Mode Button Below Quote */}
        {!wickActivated ? (
          <Button 
            onClick={handleWickMode}
            sx={{
              mt: 4,
              fontSize: '0.875rem',
              color: '#ccc',
              textTransform: 'none',
              zIndex: 3,
              position: 'relative',
              '&:hover': { color: '#fff' }
            }}
          >
            ▶️ Activate Wick Mode
          </Button>
        ) : (
          <Typography sx={{ mt: 4, fontSize: '1rem', fontFamily: 'monospace', color: '#00eaff' }}>
            🔥 WICK MODE ACTIVATED
          </Typography>
        )}

      </Box>
    </Fade>
  );
};

export default HeroSectionWick;
