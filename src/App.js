import './App.css';
import MiniDrawer from './components/UI/MiniDrawer';
import About from './components/About';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <section className="App">
    <div className='App-content'>
      <MiniDrawer>
        <Routes>
          <Route path='/' element={<p>Home</p>} />
          <Route path='/about' element={<About />} />
          <Route path='/skills' element={<p>skills</p>} />
          <Route path='/projects' element={<p>projects</p>} />
        </Routes>
      </MiniDrawer>
    </div>
    </section>
  );
}

export default App;
