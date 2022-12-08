import './App.css';
import Intro from './components/Body/Intro';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';


function App() {
  return (
    <div className="App">
    <div className='App-content'>
      <Header />
      <Intro />
    </div>
      <Footer />
    </div>
  );
}

export default App;
