import { Box, Typography, CardActionArea } from "@mui/material"

const Skill =(props)=>{
  const colorsChoice = ['rgba(0,0,200,0.3)']

  return <Box sx={{  m: 1, border: '4px solid', p: 1, textAlign: 'center', backgroundColor: colorsChoice[0], }} >
    <CardActionArea>
    <img src={props.image} alt={props.alt} style={{ width: '14rem', height: '10rem', border: '4px black solid', backgroundColor: 'ghostwhite', padding: '2px'}}  />
    <Typography variant="h5" sx={{backgroundColor: 'rgba(0,0,0,1)', color: 'ghostwhite'}}>{props.name}</Typography>
    </CardActionArea>
  </Box>

}

export default Skill

