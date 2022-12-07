import { useState } from 'react';
import { Container, Button, Typography} from '@mui/material';




const NavBar =()=>{
  return (
    <Container>
    <Typography sx={{ fontSize: 30, fontWeight: 'bold', letterSpacing: 2, width: 1, fontStyle: 'oblique'}}>
      Mubarek Hassen
    </Typography>
    <Button variant='contained' size='large' sx={{m: 1, background: 'black'}} >About</Button>
    <Button variant='contained' size='large' sx={{m: 1, background: 'black'}} >Skills</Button>
    <Button variant='contained' size='large' sx={{m: 1, background: 'black'}} >Projects</Button>
    
    </Container>
  );
}
export default NavBar;