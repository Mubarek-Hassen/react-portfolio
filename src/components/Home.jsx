import { Typography, Box, Avatar } from "@mui/material"


const Home =()=>{
  return <Box sx={{ flexGrow: 1, display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly', alignItems: 'center', }}>
    <Avatar src="https://avatars.githubusercontent.com/u/102003916?v=4" sx={{width: 200, height: 200}} />
    <div>
      <Typography fluid= 'true' variant="h3">Hello World!</Typography>
      <Typography variant="h3">I'm <span style={{color: 'green',}}> Mubarek Hassen</span>.</Typography>
    </div>
  </Box>
}

export default Home