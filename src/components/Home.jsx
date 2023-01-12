import { Typography, Box, createTheme, ThemeProvider, responsiveFontSizes, Button } from "@mui/material"
import { motion } from "framer-motion";

const Home =()=>{
  let theme = createTheme();
  theme = responsiveFontSizes(theme);
  document.title = 'Mubarek - Home'
  return <Box sx={{ flexGrow: 1, py: 10, px: 4 }} component={motion.div} initial={{ opacity: 0}} transition={{ duration: 0.5 }} animate={{opacity: 1}}>
    <Box sx={{display: 'flex', flexWrap: 'wrap' ,justifyContent: 'space-evenly', alignItems: 'center', minHeight: '40vh',  }} component={motion.div}
    initial>
    <motion.img whileHover={{ scale: 1.1, transition: { duration: 0.5, type: 'spring', bounce: 0.8 } }} initial={{x: '-100vw'}} animate={{ rotate: 360, x: 0 }} transition={{ type: 'spring', duration: 1.5 }} src="https://avatars.githubusercontent.com/u/102003916?v=4" style={{width: 250, height: 250}} />
    <motion.div
    initial={{ x: '100vw'}}
    animate={{ x: 0 }}
    transition={{ type: "spring", duration: 0.8 }}
    >
      <ThemeProvider theme={theme}>
      <Typography variant="h3">Hello World!</Typography>
      <Typography variant="h3">I'm <span style={{color: 'green', fontWeight: 'bolder'}}> Mubarek Hassen</span>.</Typography>
      <Typography variant="h3">I'm A Full Stack Developer.</Typography>
      </ThemeProvider>
    </motion.div>
    </Box>
    <Box sx={{textAlign: 'center',display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 4, alignItems: 'center' }}>
      <Button component={motion.a} href="https://drive.google.com/file/d/1EuTr7x1yn4WzvBfmr-E0MHr4W49SmZMZ/view?usp=share_link" target='_blank' rel='noopener noreferrer' variant="contained" sx={{backgroundColor: 'chocolate'}}
      initial={{x: '-50rem', opacity: 0}}
      animate={{ opacity: 1, x: 0}}
      transition= {{duration: 1}}
      whileHover={{scale: 1.2, transition: {duration: 0.3}}}
      >
        Resume
      </Button>
      
      <Button component={motion.a} href="https://drive.google.com/file/d/1-mMXawayDRy5x316Ffum8e1SXuq5b0JI/view?usp=share_link" target='_blank' rel='noopener noreferrer' variant="contained" sx={{backgroundColor: 'chocolate'}}
      initial={{scale: 0, opacity: 0}}
      animate={{ opacity: 1, scale: 1}}
      transition= {{duration: 1}}
      whileHover={{scale: 1.2, transition: {duration: 0.3}}}
      >
        Certificate
      </Button>
      
      <Button  component={motion.a}  href="https://docs.google.com/document/d/1R202c4maIDH8y-eluhxSiZQ--FQQ0BnI20IZM1dvfQo/edit?usp=share_link" target='_blank' rel='noopener noreferrer' variant="contained" sx={{backgroundColor: 'chocolate'}}
      initial={{x: '50rem', opacity: 0}}
      animate={{ opacity: 1, x: 0}}
      transition= {{duration: 1}}
      whileHover={{scale: 1.2, transition: {duration: 0.3} , }}

      >
        Cover Letter
      </Button>
    </Box>
  </Box>
}

export default Home