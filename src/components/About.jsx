import { Typography, Box, createTheme, responsiveFontSizes, ThemeProvider, Divider } from "@mui/material";
import { motion } from "framer-motion";

const About =()=>{

  let theme = createTheme();
  theme = responsiveFontSizes(theme);
  const title = 'Mubarek - About'
  const who =  <Box sx={{maxWidth: '80rem'}}>
      <Typography variant="h3" fontWeight='400' fontStyle='oblique' sx={{my: '0.5rem'}} >Who Am I?</Typography>
      <Typography variant='h5' paragraph sx={{m: '2rem', textAlign: 'left'}}>
        Hi There! <br /> I'm <span style={{color: 'green', fontWeight: '600' }}>Mubarek Hassen</span>. A Full Stack Developer who is passionate about developing solutions for problems. I'm originally from Ethiopia, but I have been living in Washington DC for quite some time. While working in customer service, I decided to learn and pursue a career that i would enjoy.
      </Typography>
      </Box>
  const what =  <Box sx={{maxWidth: '80rem'}}>
      <Typography variant="h3" fontWeight='400' fontStyle='oblique' sx={{my: '0.5rem'}} >What did i find?</Typography>
      <Typography variant='h5' paragraph sx={{m: '2rem', textAlign: 'left'}}>
        After weeks of research to find a career path that i would like to grow in, I found <span style={{color: 'green', fontWeight: '600' }}>General Assembly Coding Bootcamp</span> and the program to i chose to learn and pursue was <span style={{color: 'green', fontWeight: '600' }}>Software Engineering</span>.
      </Typography>
      </Box>
  const why = <Box sx={{maxWidth: '80rem'}}>
      <Typography variant="h3" fontWeight='400' fontStyle='oblique' sx={{my: '0.5rem'}} >Why?</Typography>
      <Typography variant='h5' paragraph sx={{m: '2rem', textAlign: 'left'}}>
        I like puzzles and games. I found programming interesting because it felt like an unlimited amount of different types of lego pieces and you can construct whatever pleases you, as long as you followed the rules (syntax) correctly.
      </Typography>
      </Box>

  const contents = [who, what, why]
  document.title = title
  
  return  <Box component={motion.div} initial={{ opacity: 0}} transition={{ duration: 0.5}} animate={{opacity: 1}} sx={{ flexGrow: 1, py: 10, px: 4, textAlign: 'center' }}>
    <ThemeProvider theme={theme}  >
      <Typography variant="h1">About Me</Typography>
      <Divider sx={{mb: '2rem', backgroundColor: 'green', mx: 10 }}/>
      {contents.map((text, i) => <Box key={i} sx={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly', alignItems: 'flex-start', }} 
      component={motion.div}
      initial={{ x: '100%', opacity: 0}}
      animate={{x: 0, opacity: 1, transition: { type: 'spring', bounce: 0.7, duration: 2, delay: i * 0.25}}}
      >
        {text}
      </Box> )}
      
      <Divider sx={{mb: '2rem', backgroundColor: 'green', mx: 10 }}/>
    </ThemeProvider>
  </Box> 
}

export default About;