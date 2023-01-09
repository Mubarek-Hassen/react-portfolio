import Skill from "./Skill"
import objOfSkills from '../../data/Skills.json'
import { Box, Typography, createTheme, responsiveFontSizes, ThemeProvider, Avatar, Divider, } from "@mui/material"
import { motion } from "framer-motion"
import { useRef } from "react"

const Skills =()=>{
  const scrollRef = useRef(null)
  let theme = createTheme();
  theme = responsiveFontSizes(theme);
  return <Box sx={{ flexGrow: 1, py: 10, px: 2, textAlign: 'center' }} component={motion.div} initial={{ opacity: 0}} transition={{ duration: 0.5}} animate={{opacity: 1}}>
    <ThemeProvider theme={theme}>
    <Typography variant="h2" sx={{ fontWeight: '500' }}> Skills </Typography>
    <br />
    
    <Typography variant="h5" sx={{ mx: '1rem', mb: '5rem' }} paragraph>
      - As a Full Stack Developer, one has to be comfortable, consistant, patient, passionate and motivated to consume new knowledge and evolve with new technology. Working on a full stack taught me how to integrate different technologies and get the desired outcome. But technical skills are not the only things that are needed. Sometimes, we have to work with fellow colleague. Interacting and communication are requirement as well.
    </Typography>
    <Divider sx={{mb: '5rem', backgroundColor: 'green', mx: 10 }}/>
        <ThemeProvider theme={theme}>
    <Typography variant="h3">Interpersonal Skills</Typography>
    <Box sx={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center'}} >
      <Avatar src="https://static.thenounproject.com/png/3378442-200.png" sx={{ width: '15rem', height: '15rem',}} variant='rounded' />
      <Box sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center', textAlign: 'left' }} >
        <ul>
          <li><Typography variant='h5'>Excellent Communication</Typography></li>
          <li><Typography variant='h5'>Reliability</Typography></li>
          <li><Typography variant='h5'>Team Player</Typography></li>
          <li><Typography variant='h5'>Critical Thinking & Problem Solving</Typography></li>
          <li><Typography variant='h5'>Respectful</Typography></li>
        </ul>
        <ul>
          <li><Typography variant='h5'>Self-Confidence</Typography></li>
          <li><Typography variant='h5'>Flexibility</Typography></li>
          <li><Typography variant='h5'>Positive Attitude</Typography></li>
          <li><Typography variant='h5'>Strong Work Ethic</Typography></li>
          <li><Typography variant='h5'>Outgoing</Typography></li>
        </ul>
      </Box>
    </Box>
    <Divider sx={{my: '5rem', backgroundColor: 'green', mx: 10 }}/>
        </ThemeProvider>
        <Box>
          <br />
          <br />
          <Typography variant="h3">
            Technical Skills
          </Typography>

          <Box sx={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', flexWrap: 'wrap', }}>
          <Typography variant="h5" paragraph sx={{ maxWidth: '45rem', textAlign: 'left'  }}>
            During my journey of full stack development, I've been exposed to a lot of development concepts, designs, libraries and frameworks that would allow me to achieve the desired outcome. RESTful API, Model View Controllers, Object Oriented Programming, Database Queries... the list goes on and on. Below are some of the tech tools that I have eperience with.
          </Typography>
          <Avatar src="https://static.thenounproject.com/png/3293529-200.png" sx={{ width: '15rem', height: '15rem', }} variant='rounded' />
          </Box>
        </Box>
        <br />
        <br />
      <Box ref={scrollRef} component={motion.div} sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', alignContent: 'center', }}
      viewport={{ once: true}}
      initial={{ x: "-100%"}}
      whileInView = {{ x: 0, duration: 3}}
      >
    { objOfSkills.map(( item, i) => <Skill key={i} image={item.image} alt={item.name} name={item.name} />)}
    </Box>
    </ThemeProvider>
  </Box>
}

export default Skills