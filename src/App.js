import logo from './logo.svg';
import './App.css';
import Functional from './Components/Functional';
import Class from './Components/Class';
import Jsx from './Components/Jsx';

function App() {
  function Apple(){
    return (<div>Apple component</div>)
  }
  return (
    <div className="App">
      <h1>Hello Harsh</h1>
      {/* <Functional/>
      <Class/>
      <Apple/> */}
      <Jsx/>
    </div>
  );
}


export default App;
