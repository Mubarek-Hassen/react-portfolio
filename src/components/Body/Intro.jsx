import { Box, Typography } from "@mui/material";
import classes from './Intro.module.css'

const Intro =()=>{

  return (
    <Box className={classes.intro} sx={{border: '5px black solid', m: 4, p: 4, backgroundColor: ' rgba(0,0,0,0.7)'}} >
      <Typography fontSize={50} sx={{ color: 'wheat', p: 4}}>
        Hi There! I'm Mubarek Hassen!
        <br />
        Welcome to my page!
      </Typography>
      <img src="https://avatars.githubusercontent.com/u/102003916?v=4" alt="Mubarek Hassen" style={{border: '5px solid black', maxWidth: '50%' }} />
    </Box>
  )

}

export default Intro;