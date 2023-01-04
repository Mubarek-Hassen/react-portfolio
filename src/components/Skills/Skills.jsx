import Skill from "./Skill"
import objOfSkills from '../../data/Skills.json'
const Skills =()=>{

  return <>
  { objOfSkills.map(( item, i) => <Skill key={i} image={item.image} alt={item.name} />)}
  </>
}

export default Skills