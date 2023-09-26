import "./App.css";
import React, { lazy, Suspense } from "react";
import Navbar from "./Components/NavBar";
import {BrowserRouter , Routes , Route} from 'react-router-dom'
function App() {
  // 362kb

  // const [movies, setMovies] = useState([])

  // const getMovies = () => {
  //   import('./data').then((module) => {
  //     console.log(module.moviesData);
  //     setMovies(module.moviesData);
  //   })
  // }

  const Home  = lazy(() => import('./Components/Home'))
  const Products = lazy(() => import('./Components/Products'))
  const Testimonials  = lazy(() => import('./Components/Testimonials'))
  const About = lazy(() => import('./Components/About'))

  return (
    <div className="App">
      {/* <h1>These are movies</h1>
      <button onClick={getMovies}>Show Movies</button>
      <p>{movies.length > 0 && JSON.stringify(movies)}</p> */}
    <Suspense fallback={<h2>Loading....</h2>}>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/testimonials" element={<Testimonials />} />
        </Routes>
      </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
