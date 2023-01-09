import { Box, Typography, Divider, createTheme, responsiveFontSizes, ThemeProvider } from "@mui/material";
import Project from "./Project";
import data from "../../data/Projects.json"
import { motion } from "framer-motion";
const Projects =()=>{
  let theme = createTheme();
  theme = responsiveFontSizes(theme);

  return <Box component={motion.div} initial={{ opacity: 0}} transition={{ duration: 0.5}} animate={{opacity: 1}} sx={{flexGrow: 1, py: 10, px: 2, textAlign: 'center'  }}>
    <ThemeProvider theme={theme}>
    <Typography variant="h2" sx={{m: 3, fontWeight: '500'}}>Projects</Typography>
    <Typography variant="h5">
      The General Assembly Coding Bootcamp was a great journey were we learned and implemented what was taught daily. A lot of our work ressembled and mimicked a day to day work of a developer. 
    </Typography>
    
    <Divider sx={{mb: '3rem', backgroundColor: 'green', mx: 10 }}/>
    <Box sx={{ textAlign: 'center', display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap', alignItems: 'flex-start',  }}>
      {data.projects.map((project, index) => <Project key={index} image={project.image} title={project.title} description={project.description} link={project.link} />)}
    </Box>
    </ThemeProvider>
  </Box>
}

export default Projects