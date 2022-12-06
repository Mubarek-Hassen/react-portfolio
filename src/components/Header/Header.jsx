import { Tab, Tabs } from "@mui/material";

const Header =()=>{
  return(
    <header>
      <h1>Mubarek Hassen</h1>
      <Tabs >
        <Tab label="About" />
        <Tab label="Skills" />
        <Tab label="Project" />
      </Tabs> 
    </header>
  )
}

export default Header;