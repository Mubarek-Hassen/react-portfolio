import { Box } from "@mui/material";
import Project from "./Project";
import data from "../../data/Projects.json"

const Projects =()=>{

  return <Box sx={{ flexGrow: 1, py: 10, textAlign: 'center', display: 'flex', justifyContent: 'space-evenly' }}>
    {data.projects.map((project, index) => <Project key={index} image={project.image} title={project.title} description={project.description} />)}
  </Box>
}

export default Projects