import { Typography, Box, createTheme, responsiveFontSizes, ThemeProvider } from "@mui/material";

const About =()=>{

  let theme = createTheme();
  theme = responsiveFontSizes(theme);

  return  <Box component="main" sx={{ flexGrow: 1, py: 10, px: 4 }}>
    <ThemeProvider theme={theme} >
      <Typography variant="h1">About Me</Typography>
      <Typography variant="h3" fontWeight='400'>Mubarek Hassen, <span style={{color: 'green', fontStyle: 'italic', fontWeight: '200'}}>Full Stack Developer</span>.</Typography>
      <hr />
      
    <Typography variant='h5' paragraph>
      - Without Javascript
    </Typography>
    </ThemeProvider>
  </Box> 
}

export default About;