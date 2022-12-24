import './App.css';
import Footer from './components/Footer/Footer';
import MiniDrawer from './components/UI/Nav';



function App() {
  return (
    <section className="App">
    <div className='App-content'>
      <MiniDrawer />
    </div>
      <Footer />
    </section>
  );
}

export default App;
