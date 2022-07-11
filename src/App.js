import './App.css';
import Navbar from './Components/Navbar.js'
import Hero from './Components/Hero.js'
import AboutMe from './Components/AboutMe'
import WhereIveWorked from './Components/WhereIveWorked'
import ThingsIveBuilt from './Components/ThingsIveBuilt';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <AboutMe/>
      <WhereIveWorked/>
      <ThingsIveBuilt/>
    </div>
  );
}

export default App;
