import './App.css';
import About from './components/Body/About';
import Intro from './components/Body/Intro';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <About />
      <Footer />
    </div>
  );
}

export default App;
