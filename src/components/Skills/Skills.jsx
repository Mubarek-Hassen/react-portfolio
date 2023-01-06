import Skill from "./Skill"
import objOfSkills from '../../data/Skills.json'
import { Box, Typography, createTheme, responsiveFontSizes, ThemeProvider } from "@mui/material"
const Skills =()=>{
  let theme = createTheme();
  theme = responsiveFontSizes(theme);
  return <Box sx={{ flexGrow: 1, py: 10, px: 2, textAlign: 'center' }}>
    <ThemeProvider theme={theme}>
    <Typography variant="h2" sx={{ fontWeight: '500'}}> Skills </Typography>
    <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', alignContent: 'center', }}>
    { objOfSkills.map(( item, i) => <Skill key={i} image={item.image} alt={item.name} name={item.name} />)}
    </Box>
    </ThemeProvider>
  </Box>
}

export default Skills