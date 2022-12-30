import { Typography, Box, Avatar, createTheme, ThemeProvider, responsiveFontSizes, Button } from "@mui/material"


const Home =()=>{
  let theme = createTheme();
  theme = responsiveFontSizes(theme);

  return <Box sx={{ flexGrow: 1, py: 10, px: 4 }}>
    <Box sx={{display: 'flex', flexWrap: 'wrap' ,justifyContent: 'space-evenly', alignItems: 'center', minHeight: '40vh' }}>
    <Avatar src="https://avatars.githubusercontent.com/u/102003916?v=4" sx={{width: 250, height: 250}} />
    <div>
      <ThemeProvider theme={theme}>
      <Typography variant="h3">Hello World!</Typography>
      <Typography variant="h3">I'm <span style={{color: 'green', fontWeight: 'bolder'}}> Mubarek Hassen</span>.</Typography>
      <Typography variant="h3">I'm A Full Stack Developer.</Typography>
      </ThemeProvider>
    </div>
    </Box>
    <Box sx={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 2 }}>
      <Button variant="contained" sx={{backgroundColor: 'chocolate'}}>Resume</Button>
      <Button variant="contained" sx={{backgroundColor: 'chocolate'}}>Certificate</Button>
      <Button variant="contained" sx={{backgroundColor: 'chocolate'}}>Cover Letter</Button>
    </Box>
  </Box>
}

export default Home