import { Box } from "@mui/material"
import NavBar from "./NavBar"
import Title from "./Title"
// import classes from './Header.module.css'

const Header =()=>{
  return (
    <Box sx={{display: 'flex', flex: 'wrap' , justifyContent: 'space-around', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.7)', m:0, border: 'black solid 5px'}} >
    <Title />
    <NavBar />
    </Box>
  )
}

export default Header;