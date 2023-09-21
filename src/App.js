import './App.css';

// importere både css og jsx for nav til "script" filen
import { Nav } from './components/Nav';
import { Subscribe } from './components/subscribe';

// importere både css og jsx for pips til "script" filen
import "./css/pips.css"
import { Pips } from './components/Pips';


function App() {

  // laver et object der indeholder en masse data ift. text og farve på pip post
  const data = [
    {username: "Hannah West", message: "Det her er en test, jeg håber det virker"},
    {username: "Hannah West", message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.."},
    {username: "Hannah West", message: "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish."},
  ]

  return (
    <div className="App">
      {/* tilføjer vores components til vores "app" */}
      <Nav></Nav>
      <Subscribe></Subscribe>
      {/* aner ikke hvad det gør så det skal jeg lige spørge om */}
      {data.map( (x) => {
        return <Pips username={x.username} message={x.message} color={x.color} img={x.img}></Pips>
      })}
    </div>
  );
}

export default App;
