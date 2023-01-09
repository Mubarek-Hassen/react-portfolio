import { Typography, Box, createTheme, responsiveFontSizes, ThemeProvider, } from "@mui/material";
import { motion } from "framer-motion";

const About =()=>{

  let theme = createTheme();
  theme = responsiveFontSizes(theme);

  return  <Box component={motion.div} initial={{ opacity: 0}} transition={{ duration: 0.5}} animate={{opacity: 1}} sx={{ flexGrow: 1, py: 10, px: 4 }}>
    <ThemeProvider theme={theme} >
      <Typography variant="h1">About Me</Typography>
      <hr />
      <Typography variant="h3" fontWeight='400' fontStyle='oblique' sx={{ml: '0.5rem'}} >Who Am I?</Typography>
      <Typography variant='h5' paragraph sx={{ml: '1rem',}}>
        Hi There! <br /> I'm <span style={{color: 'green', fontWeight: '600' }}>Mubarek Hassen</span>. A Full Stack Developer who is passionate about developing solutions for problems. I'm originally from Ethiopia, but I have been living in Washington DC for quite some time. After High School, I was working in customer service. 
      </Typography>
    </ThemeProvider>
  </Box> 
}

export default About;