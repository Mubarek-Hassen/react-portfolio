import './App.css';
import MiniDrawer from './components/UI/MiniDrawer';
import About from './components/pages/About';


function App() {
  return (
    <section className="App">
    <div className='App-content'>
      <MiniDrawer>
        <About />
      </MiniDrawer>
    </div>
    </section>
  );
}

export default App;
