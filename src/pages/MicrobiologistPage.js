import React from 'react';
import { Box, Typography, Divider, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

const MicrobiologistWickPage = () => {
  const careerData = [
    {
      title: "Executive – Enzene Biosciences Ltd",
      duration: "📍 Pune | 🗓️ 2024 – Present",
      description: [
        "Isolated, characterized, and identified microorganisms from various sources.",
        "Maintained in-house microbial isolates with regular subculturing and tracking.",
        "Compiled monthly reports on microbial trends, supporting internal audits and quality reviews.",
        "Revised microbial ID documentation and TDS, enabling a 2× increase in sample processing capacity."

      ]
    },
    {
      title: "Officer – Lupin Limited Injectable Facility (Unit 2)",
      duration: "📍 Nagpur | 🗓️ 2021 – 2022",
      description: [
        "Performed BET using gel clot and kinetic turbidimetric assay (KTA) methods across various matrices including WFI, raw materials, and finished products.",
        "Conducted sterility testing inside isolators; validated test methods for packaging and gases.",
        "Handled LBPC testing on finished and stability batches.",
        "Managed testing workflows using Labware LIMS 7.",
        "Prepared comprehensive validation reports aligning with regulatory compliance."
      ]
    },
    {
      title: "Officer – Indoco Remedies Ltd (Plant 2) Sterile Formulation Plant",
      duration: "📍 Goa | 🗓️ 2020 – 2021",
      description: [
        "Executed validated sterility testing on diverse sample types including finished, in-process, and packaging.",
        "Performed microbial limit testing (MLT) and bioburden analysis.",
        "Led BET validation using gel clot method for critical raw materials and final dosage forms.",
        "Successfully carried out CCIT and environment monitoring routines.",
        "Performed sampling of primary packaging materials."
      ]
    },
    {
      title: "Jr. Executive – Eurolife Healthcare Pvt. Ltd. (Baxter India)",
      duration: "📍 Aurangabad | 🗓️ 2017 – 2019",
      description: [
        "Performed BET using gel clot method for WFI, finished goods, and in-process samples.",
        "Conducted environmental monitoring in aseptic and classified zones.",
        "Handled sampling/testing of compressed air, purified water, and WFI.",
        "Executed MLT and bioburden tests across raw and intermediate stages."
      ]
    }
  ];

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

        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{ zIndex: 2 }}
        >
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
              display: 'inline-block',
              fontSize: { xs: '1rem', md: '1.2rem' }
            }}
          >
            ... SUBJECT IDENTIFIED: MICROBIOLOGIST
          </Typography>
        </motion.div>

        <Typography variant="h3" gutterBottom sx={{ textAlign: 'center', fontWeight: 600, textShadow: '0 0 10px #00e5ff', zIndex: 2 }}>
          🔬 YUVRAJ SALUNKE – DOSSIER
        </Typography>

        <Box sx={{ textAlign: 'center', mt: 2, mb: 6, zIndex: 2 }}>
          <TypeAnimation
            sequence={['Executing mission logs...', 1500, 'Loading microbiological records...', 1500]}
            wrapper="span"
            speed={40}
            style={{ fontSize: '1.1rem', color: '#00e5ff', fontFamily: 'monospace' }}
            repeat={Infinity}
          />
        </Box>

        <Divider sx={{ my: 5, bgcolor: '#00bcd4' }} />

        <Typography variant="h5" gutterBottom>📂 Skill Deployment Records</Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Paper elevation={4} sx={{ background: '#111', color: '#00e5ff', p: { xs: 2, md: 3 } }}>
              <Typography fontWeight={600} sx={{ color: '#f27b42' }}>🧫 Tests Conducted</Typography>
              <ul>
                <li>BET (Gel Clot & KTA)</li>
                <li>Sterility Testing</li>
                <li>Microbial Limit Testing</li>
                <li>LBPC</li>
                <li>Environmental Monitoring</li>
              </ul>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper elevation={4} sx={{ background: '#111', color: '#00e5ff', p: { xs: 2, md: 3 } }}>
              <Typography fontWeight={600} sx={{ color: '#f27b42' }}>🔬 Instruments Used</Typography>
              <ul>
                <li>pH Meter: Lab India, Mettler Toledo</li>
                <li>Autoclave: Equitron, Pharmalab</li>
                <li>Weighing Balance: Essae, Radwag</li>
                <li>DHS: Newtronics</li>
                <li>Particle Counter: Lasair III, MET ONE 3400</li>
                <li>Air Sampler: MAS 100 Eco, NT, SAS Super 180L</li>
                <li>Liquid Counter: HIAC 9703</li>
                <li>Dry Heating Block: Equichem</li>
                <li>Glove Integrity Tester: SKAN WirelessGT 2</li>
                <li>Sterility Test Isolator </li>
              </ul>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper elevation={4} sx={{ background: '#111', color: '#00e5ff', p: { xs: 2, md: 3 } }}>
              <Typography fontWeight={600} sx={{ color: '#f27b42' }}>💻 Software and Tools</Typography>
              <ul>
                <li>LIMS Labware 7</li>
                <li>Caliber eLog</li>
                <li>KTA: Biotek Reader + Endoscan V & Win KCL</li>
              </ul>
            </Paper>
          </Grid>
        </Grid>

        <Divider sx={{ my: 5, bgcolor: '#00bcd4' }} />

        <Typography variant="h5" gutterBottom>🧪 Career Timeline</Typography>
        <Grid container spacing={3}>
          {careerData.map((item, idx) => (
            <Grid item xs={12} md={12} key={idx}>
              <Paper elevation={3} sx={{ background: '#151515', borderLeft: '4px solid #00bcd4', position: 'relative', p: { xs: 2, md: 3 } }}>
                <Typography variant="h5">{item.title}</Typography>
               <Typography variant="body1" sx={{ fontSize: '1.1rem', color: '#ccc' }}>
  {item.duration}
</Typography>
                <ul style={{ marginTop: 8, paddingLeft: 20 }}>
                  {item.description.map((point, i) => (
                    <li key={i}>
                      <Typography variant="body2" sx={{ fontSize: '1.1rem', color:"#eee"}} >{point}</Typography>
                    </li>
                  ))}
                </ul>
              </Paper>
            </Grid>
          ))}
        </Grid>

        <Divider sx={{ my: 5, bgcolor: '#00bcd4' }} />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          style={{ zIndex: 2 }}
        >
      
         {/* Audit Highlights */}
<Typography variant="h5" gutterBottom>🏅 Audit Highlights</Typography>
<Grid container spacing={3}>
  <Grid item xs={12} md={6}>
    <Paper elevation={3} sx={{ background: '#181818', borderLeft: '4px solid #4caf50', p: { xs: 2, md: 3 } }}>
      <Typography fontWeight={600} sx={{ fontSize: '1.1rem'}}>✔️ Zero Critical Observations</Typography>
      <Typography>
        Successfully demonstrated BET and Sterility Testing during USFDA audit led by Cynthia Jim.
      </Typography>
    </Paper>
  </Grid>
  <Grid item xs={12} md={6}>
    <Paper elevation={3} sx={{ background: '#181818', borderLeft: '4px solid #4caf50', p: { xs: 2, md: 3 } }}>
      <Typography fontWeight={600} sx={{ fontSize: '1.1rem'}}>🕵️‍♂️ Audits Faced</Typography>
      <Typography sx={{ fontSize: '1rem'}}>
        Participated in multiple regulatory audits including USFDA, WHO, EMA and various regulatory audits with compliance success.
      </Typography>
    </Paper>
  </Grid>
</Grid>

<Divider sx={{ my: 5, bgcolor: '#00bcd4' }} />

{/* Certifications */}
<Typography variant="h5" gutterBottom >🎓 Certifications</Typography>
<Grid container spacing={3}>
  <Grid item xs={12} md={6}>
    <Paper elevation={3} sx={{ background: '#181818', borderLeft: '4px solid #2196f3', p: { xs: 2, md: 3 } }}>
      <Typography fontWeight={600} sx={{ fontSize: '1.1rem'}}>📜 Advanced Program in Clinical Research and Management</Typography>
      <Typography>
        Completed specialized training covering clinical studies , pharmacovigilance and clinical data management.
      </Typography>
    </Paper>
  </Grid>
</Grid>

        </motion.div>
      </Box>
    </Box>
  );
};

export default MicrobiologistWickPage;
