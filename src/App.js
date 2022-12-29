import './App.css';
import MiniDrawer from './components/UI/MiniDrawer';
import About from './components/About';
import Home from './components/Home';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <section>
      <MiniDrawer>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/skills' element={<p>skills</p>} />
          <Route path='/projects' element={<p>projects</p>} />
        </Routes>
      </MiniDrawer>
      </section>
  );
}

export default App;
