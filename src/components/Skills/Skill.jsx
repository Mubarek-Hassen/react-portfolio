import { Box, Typography, CardActionArea } from "@mui/material"
import { motion } from "framer-motion";
const Skill =(props)=>{
  const colorsChoice = [ 'skyblue','lightblue', 'salmon', 'rosybrown', 'navajowhite', 'darkolivegreen', 'goldenrod', 'chocolate', 'wheat', 'tomato', 'peru', 'tan', 'slateblue', 'sienna', 'purple'];
  let colorPicked = colorsChoice[Math.floor(Math.random()*colorsChoice.length)]
  return <Box sx={{  m: 1, mx: 4, border: '4px solid', p: 1, textAlign: 'center', backgroundColor: colorPicked, }}>
    <CardActionArea>
    <motion.img whileHover={{scale: 1.1}} whileTap={{rotate: -360  }} src={props.image} alt={props.alt} style={{ width: '15rem', height: '12rem', border: '4px black solid', backgroundColor: 'ghostwhite' , padding: '2px'}}  />
    <Typography variant="h4" sx={{backgroundColor: 'rgba(0,0,0,0.7)', color: 'ghostwhite', border: 'black 4px solid'}}>{props.name}</Typography>
    </CardActionArea>
  </Box>

}

export default Skill

