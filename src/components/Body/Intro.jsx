import { Box, Typography } from "@mui/material";
import classes from './Intro.module.css'

const Intro =()=>{

  return (
    <Box className={classes.intro}>
      <Typography fontSize={50}>Hi There! I'm Mubarek Hassen!</Typography>
      <img src="https://avatars.githubusercontent.com/u/102003916?v=4" alt="Mubarek Hassen" style={{border: '5px solid black' }} />
    </Box>
  )

}

export default Intro;