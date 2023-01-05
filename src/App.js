import MiniDrawer from './components/UI/MiniDrawer';
import About from './components/About';
import Home from './components/Home';
import { Routes, Route } from 'react-router-dom';
import Skills from './components/Skills/Skills';



function App() {
  return (
    <section>
      <MiniDrawer>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/projects' element={<p>projects</p>} />
        </Routes>
      
      </MiniDrawer>
      </section>
  );
}

export default App;


{/* <img src='https://miro.medium.com/max/1400/1*uoUra4LLjZqtkMH4RUeRmw.gif' style={{ marginTop: '4rem',maxWidth: '20vh', maxHeight: '15vh' }} alt='skills' /> */}