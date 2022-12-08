import { Container } from "@mui/material"
import NavBar from "./NavBar"
import Title from "./Title"
// import classes from './Header.module.css'

const Header =()=>{
  return (
    <Container sx={{display: 'flex', flex: 'wrap' , justifyContent: 'space-between', alignItems: 'center'}} >
    <Title />
    <NavBar />
    </Container>
  )
}

export default Header;