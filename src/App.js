import react from 'react';
import NavBar from './Components/header/NavBar.jsx';
import Footer from './Components/footer/footer.jsx';
import Home from './pages/home.jsx';

function App() {
  return (
    <div className="App">
      <NavBar/>
      < Home />
      <Footer/>
    </div>
  );
}

export default App;
