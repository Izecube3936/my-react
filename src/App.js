
import './App.css';
import Jsx3 from './komponenter/Jsx3';
import Jsx from './komponenter/Jsx';
import Jsx2 from './komponenter/Jsx2';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <p> My name is Fredrik Dahlbom </p>
        <em>I´m learning React, which is fun </em>
        <Jsx /> 
        <Jsx2 />
        <Jsx3 />
        
      </header>
    </div>
  );
}

export default App;
