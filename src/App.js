import React, { Suspense } from 'react';
import MiniDrawer from './components/UI/MiniDrawer';
import Home from './components/Home';
import { Routes, Route } from 'react-router-dom';

const Skills = React.lazy(()=> import('./components/Skills/Skills'));
const Projects = React.lazy(()=> import('./components/Projects/Projects'));
const About = React.lazy(()=> import('./components/About'));

function App() {
  return (
    <section>
      <MiniDrawer>
        <Suspense fallback={<p>Loading...</p>} >
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/projects' element={<Projects />} />
        </Routes>
        </Suspense>
      
      </MiniDrawer>
      </section>
  );
}
export default App;