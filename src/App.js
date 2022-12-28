import './App.css';
import MiniDrawer from './components/UI/MiniDrawer';
import About from './components/pages/About';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <section className="App">
    <div className='App-content'>
      <MiniDrawer>
        <Routes>
          <Route path='/' element={<About />} />
        </Routes>
      </MiniDrawer>
    </div>
    </section>
  );
}

export default App;
