import { Box } from "@mui/material"
import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea } from '@mui/material';

const Project =(props)=>{
  return <Box sx={{textAlign: 'center', border: 'black 1px solid', my: 2}}>
      <CardActionArea>
        <img src={props.image} width='250px' height='150px' alt="" />
        <Box sx={{width: '18rem', textAlign: 'center', height: '8rem'}} >
          <Typography variant="h5">
            {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" >
            {props.description}
          </Typography>
        </Box>
      </CardActionArea>
        <Button variant="contained" sx={{ m: 2, backgroundColor: 'chocolate' }} href={props.link} target='_blank' rel='noopener noreferrer' >
          Check it out
        </Button>
  </Box>
}

export default Project