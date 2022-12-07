import { Box, Typography } from "@mui/material";

const About =()=>{
  return (
    <Box sx={{ mx: 'auto'  }} >
      <Typography variant="h1" >About me</Typography>
  <Typography sx={{maxWidth: '70%', mx: 'auto', fontSize: 24}}>
    Hello World! My name is Mubarek Hassen and I'm a certified software engineer. I graduated from General Assembly Coding Bootcamp in Full Stack Software Engineering Immersive program and my passion for programming has been growing.
  </Typography>
  
  </Box>
  )
}
export default About;