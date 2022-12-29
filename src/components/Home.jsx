import { Typography, Box } from "@mui/material"


const Home =()=>{
  return <Box fluid sx={{display: 'flex', flex: 'wrap',justifyContent: 'space-evenly', alignItems: 'center', mt: 5 }}>
    <div>
      <Typography variant="h2">Hello World!</Typography>
      <Typography variant="h2">I'm <span style={{color: 'green',}}> Mubarek Hassen</span></Typography>
    </div>
    <img src="https://avatars.githubusercontent.com/u/102003916?v=4" alt="mubarek"/>
  </Box>
}

export default Home