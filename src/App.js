import './App.css';
import About from './components/Body/About';
import Projects from './components/Body/Projects';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      
      <Header />
      {/* <Projects /> */}
      <About/>
      <Footer />
    </div>
  );
}

export default App;
