import MiniDrawer from './components/UI/MiniDrawer';
import About from './components/About';
import Home from './components/Home';
import { Routes, Route } from 'react-router-dom';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';


function App() {
  return (
    <section>
      <MiniDrawer>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/projects' element={<Projects />} />
        </Routes>
      
      </MiniDrawer>
      </section>
  );
}
export default App;