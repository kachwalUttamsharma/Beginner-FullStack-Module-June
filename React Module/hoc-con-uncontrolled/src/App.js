import './App.css';
import CompA from './Components/CompA';
import Controlled from './Components/Controlled';
import Uncontrolled from './Components/UnControlled';

function App() {
  return (
    <div className="App">
      <CompA />
      <CompA dark />
      <CompA yellow />

      <Controlled />
      <Uncontrolled />
    </div>
  );
}

export default App;
