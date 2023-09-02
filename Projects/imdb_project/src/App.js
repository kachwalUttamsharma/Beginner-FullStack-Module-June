import "./App.css";
import NavBar from "./components/Home/NavBar";
import Banner from "./components/Home/Banner";
import Movies from "./components/Home/Movies";
import WatchList from "./components/WatchList/WatchList";
import { BrowserRouter, Routes, Route } from "react-router-dom";

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
          <Route path="/watchList" element={<WatchList />}></Route>
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
