import "./App.css";
import Cart from "./Components/Cart";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Provider} from 'react-redux';
import Store from './Store/store';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

const persistor = persistStore(Store);

function App() {
  return (
    <div className="App">
      <Provider store={Store}>
      <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
        </Routes>
      </BrowserRouter>
      </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
