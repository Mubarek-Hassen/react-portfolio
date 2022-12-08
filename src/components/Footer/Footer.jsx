import { Button, Box } from "@mui/material";
import classes from './Footer.module.css'
const Footer =()=>{
  return <section className={classes.btm}>
    <Button variant="outlined" href="mailto:mubarekhassen4@gmail.com" rel="noreferrer" target='_blank' >E-Mail</Button>
    <br />
    <Button variant="outlined" href="https://www.linkedin.com/in/mubarek-hassen-wubitu/" rel="noreferrer" target='_blank' >LinkedIn</Button>
    <br />
    <Button variant="outlined" href="https://github.com/Mubarek-Hassen" rel="noreferrer" target='_blank' >GitHub</Button>
  </section>
}

export default Footer;



// html,
// body {
//    margin:0;
//    padding:0;
//    height:100%;
// }
// #container {
//    min-height:100%;
//    position:relative;
// }
// #header {
//    background:#ff0;
//    padding:10px;
// }
// #body {
//    padding:10px;
//    padding-bottom:60px;   /* Height of the footer */
// }
// #footer {
//    position:absolute;
//    bottom:0;
//    width:100%;
//    height:60px;   /* Height of the footer */
//    background:#6cf;
// }