import { Box, Button } from "@mui/material"


const NavBar=()=>{
  return (
    <Box sx={{ }}>
        <Button sx={{m:2, backgroundColor: 'ghostwhite', color: 'black'}} variant="contained" color="success" >About</Button>
        <Button sx={{m:2, backgroundColor: 'ghostwhite', color: 'black'}} variant="contained" color="success" >Skills</Button>
        <Button sx={{m:2, backgroundColor: 'ghostwhite', color: 'black'}} variant="contained" color="success" >Projects</Button>
    </Box>
  )
}
export default NavBar;