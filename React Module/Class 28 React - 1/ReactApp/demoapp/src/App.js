import React  from 'react';
import MyComponent from './Components/MyComponent';
import MyComponent2 from './Components/MyComponent2';
import './App.css';
import UserProfile from './Components/UserProfile';
import Counter from './Components/Counter';
import Product from './Components/Product';
import Forms from './Components/Forms'

const App= () => {
  //const product = ['Laptop', 'Headphones', 'KeyBoard', 'Mouse', 'Mobile', 'Laptop', 'Headphones'];

  const product = [
    {id: 1, name: 'Laptop', price: 35000, img: 'https://plus.unsplash.com/premium_photo-1666792562882-8bd04befec7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1975&q=80'},
    {id: 2, name: 'Headphones', price: 500},
    {id: 3, name: 'Keyboard', price: 1200},
    {id: 4, name: 'Mouse', price: 450}
  ]
  return (
    <div id="parent" className='App'>
    <div id="child">
        <h1 id="gretting"> Hello From React</h1>
        <h1 id="gretting2"> Hello From React 2</h1>
    </div>
    {/* <MyComponent />
    <MyComponent2 /> */}
    {/* <UserProfile name="pravina" age="25" email="pravina@scaler.com"/> */}
    {/* <Counter /> */}
    {/* <Product product={product}/> */}
    <Forms />
  </div>
  );
}

export default App;
