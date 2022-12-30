import { Typography, Box, Avatar, createTheme, ThemeProvider, responsiveFontSizes } from "@mui/material"


const Home =()=>{
  let theme = createTheme();
  theme = responsiveFontSizes(theme);

  return <Box sx={{ flexGrow: 1, py: 10, px: 4 }}>
    <Box sx={{display: 'flex', flexWrap: 'wrap' ,justifyContent: 'space-evenly', alignItems: 'center', minHeight: '40vh' }}>
    <Avatar src="https://avatars.githubusercontent.com/u/102003916?v=4" sx={{width: 250, height: 250}} />
    <div>
      <ThemeProvider theme={theme}>
      <Typography variant="h2">Hello World!</Typography>
      <Typography variant="h2">I'm <span style={{color: 'green',}}> Mubarek Hassen</span>.</Typography>
      </ThemeProvider>
    </div>
    </Box>
  </Box>
}

export default Home