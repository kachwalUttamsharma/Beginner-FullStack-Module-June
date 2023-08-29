import React  from 'react';
import MyComponent from './Components/MyComponent';
import MyComponent2 from './Components/MyComponent2';
import './App.css';
import UserProfile from './Components/UserProfile';
import Counter from './Components/Counter';

const App= () => {
  return (
    <div id="parent" className='App'>
    <div id="child">
        <h1 id="gretting"> Hello From React</h1>
        <h1 id="gretting2"> Hello From React 2</h1>
    </div>
    {/* <MyComponent />
    <MyComponent2 /> */}
    {/* <UserProfile name="pravina" age="25" email="pravina@scaler.com"/> */}
    <Counter />
  </div>
  );
}

export default App;
