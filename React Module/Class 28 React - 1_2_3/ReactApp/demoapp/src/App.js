import React  from 'react';
import MyComponent from './Components/MyComponent';
import MyComponent2 from './Components/MyComponent2';
import './App.css';
import UserProfile from './Components/UserProfile';
import Counter from './Components/Counter';
import Product from './Components/product/Product';
import Forms from './Components/Form/Forms'
import Effects from './Components/Effects';

const App= () => {
  //const product = ['Laptop', 'Headphones', 'KeyBoard', 'Mouse', 'Mobile', 'Laptop', 'Headphones'];

  const product = [
    {id: 1, name: 'Laptop', price: 35000, img: 'https://plus.unsplash.com/premium_photo-1666792562882-8bd04befec7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1975&q=80'},
    {id: 2, name: 'Headphones', price: 500, img: 'https://plus.unsplash.com/premium_photo-1666896753506-acf92db72d87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTZ8fG5hdHVyZXxlbnwwfHx8fDE2ODY5MzY4Mjh8MQ&ixlib=rb-4.0.3&q=80&w=1080'},
    {id: 3, name: 'Keyboard', price: 1200, img: 'https://images.unsplash.com/photo-1475776408506-9a5371e7a068?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTN8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=800&q=60'},
    {id: 4, name: 'Mouse', price: 450, img: 'https://plus.unsplash.com/premium_photo-1666896899793-65565d2a1f01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MjN8fG5hdHVyZXxlbnwwfHx8fDE2ODY5MzY4Mjh8MQ&ixlib=rb-4.0.3&q=80&w=1080'}
  ]
  return (
    <div id="parent" className='App'>
    <div id="child">
        <h1 id="gretting"> Hello From React</h1>
        <h1 id="gretting2"> Hello From React 2</h1>
    </div>
    <MyComponent />
    <MyComponent2 />
   <UserProfile name="pravina" age="25" email="pravina@scaler.com"/>
    <Counter />
    <Product product={product}/>
    <Forms /> 
    <Effects />
  </div>
  );
}

export default App;
