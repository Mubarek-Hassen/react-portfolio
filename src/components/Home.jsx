import { Typography, Box, Avatar, createTheme, ThemeProvider, responsiveFontSizes, Button } from "@mui/material"
import { motion } from "framer-motion";

const Home =()=>{
  let theme = createTheme();
  theme = responsiveFontSizes(theme);

  return <Box sx={{ flexGrow: 1, py: 10, px: 4 }} component={motion.div} initial={{ opacity: 0}} transition={{ duration: 0.5 }} animate={{opacity: 1}}>
    <Box sx={{display: 'flex', flexWrap: 'wrap' ,justifyContent: 'space-evenly', alignItems: 'center', minHeight: '40vh',  }} component={motion.div}
    initial>
    <motion.img animate={{ rotate: 360 }} transition={{ type: 'spring', }} src="https://avatars.githubusercontent.com/u/102003916?v=4" style={{width: 250, height: 250}} />
    <div>
      <ThemeProvider theme={theme}>
      <Typography variant="h3">Hello World!</Typography>
      <Typography variant="h3">I'm <span style={{color: 'green', fontWeight: 'bolder'}}> Mubarek Hassen</span>.</Typography>
      <Typography variant="h3">I'm A Full Stack Developer.</Typography>
      </ThemeProvider>
    </div>
    </Box>
    <Box sx={{textAlign: 'center',display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 4, alignItems: 'center' }}>
      <Button href="https://drive.google.com/file/d/1EuTr7x1yn4WzvBfmr-E0MHr4W49SmZMZ/view?usp=share_link" target='_blank' rel='noopener noreferrer' variant="contained" sx={{backgroundColor: 'chocolate'}}>Resume</Button>
      <Button href="https://drive.google.com/file/d/1-mMXawayDRy5x316Ffum8e1SXuq5b0JI/view?usp=share_link" target='_blank' rel='noopener noreferrer' variant="contained" sx={{backgroundColor: 'chocolate'}}>Certificate</Button>
      <Button href="https://docs.google.com/document/d/1R202c4maIDH8y-eluhxSiZQ--FQQ0BnI20IZM1dvfQo/edit?usp=share_link" target='_blank' rel='noopener noreferrer' variant="contained" sx={{backgroundColor: 'chocolate'}}>Cover Letter</Button>
    </Box>
  </Box>
}

export default Home