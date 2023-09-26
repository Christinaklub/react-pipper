import './App.css';

// importere både css og jsx for nav til "script" filen
import { Nav } from './components/Nav';
import { Subscribe } from './components/subscribe';

// importere både css og jsx for pips til "script" filen
import "./css/pips.css"
import { CreatePip } from './components/CreatePip';


function App() {

  return (
    <div className="App">
      {/* tilføjer vores components til vores "app" */}
      <Nav></Nav>
      <CreatePip></CreatePip>
      <Subscribe></Subscribe>
      {/* aner ikke hvad det gør så det skal jeg lige spørge om */}
    </div>
  );
}

export default App;
