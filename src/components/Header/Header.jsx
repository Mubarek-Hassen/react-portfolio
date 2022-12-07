import { Box, Container, Typography } from '@mui/material';
import classes from './Header.module.css'
import NavBar from './NavBar';

const Header =()=>{
  return(
    <Container>
      <Box fluid sx={{border: 'black solid 5px', display: 'flex', m: '10px 0', flex: 'wrap', justifyContent: 'center', alignItems: 'center'}}>
      <NavBar />
      </Box>
      <Box className={classes.badge}>
        <Typography sx={{fontSize: 30, fontStyle: 'oblique'}}>Hi, I'm Mubarek Hassen. <br />
        I am a Fullstack Developer.</Typography>
      <img src="https://avatars.githubusercontent.com/u/102003916?v=4" alt="Mubarek Hassen Profile Photo" style={{maxWidth: '40%', border: '5px black solid', borderRadius: 5}} className={classes.im}  />
      </Box>
      <hr />
    </Container>
  )
}

export default Header;