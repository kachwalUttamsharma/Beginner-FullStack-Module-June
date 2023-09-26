import "./App.css";
import React, { Suspense, lazy } from 'react';
import NavBar from "./components/Home/NavBar";
import Banner from "./components/Home/Banner";
import Movies from "./components/Home/Movies";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const WatchList = lazy(() => import('./components/WatchList/WatchList'));
function App() {
  return (
    <div>
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path="/" element={
            <>
            <Banner />
            <Movies />
            </>
          }> 
          </Route>
          <Route path="/watchList" element={<Suspense fallback={<div>Loading...</div>}><WatchList /></Suspense>}></Route>
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
