import Skill from "./Skill"
import objOfSkills from '../../data/Skills.json'
import { Box } from "@mui/material"
const Skills =()=>{

  return <Box sx={{ flexGrow: 1, py: 10, px: 4, display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', alignContent: 'center', }}>
  { objOfSkills.map(( item, i) => <Skill key={i} image={item.image} alt={item.name} name={item.name} />)}
  </Box>
}

export default Skills