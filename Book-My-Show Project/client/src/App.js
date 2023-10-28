import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Home from './Pages/Home/Home';
import ProtectedRoute from './Components/ProtectedRoute'
import "./stylesheets/alignments.css";
import "./stylesheets/sizes.css";
import "./stylesheets/form-elements.css";
import "./stylesheets/custom.css";
import "./stylesheets/theme.css";
import Profile from './Pages/Profile';
import Admin from './Pages/Admin';
import TheatresForMovie from './Pages/TheatresForMovie';
import { useSelector } from "react-redux";
import BookShow from './Pages/BookShow'

function App() {
  const { loading } = useSelector((state) => state.loaders);
  return (
    <div className="App">
      {loading && (
        <div className="loader-parent">
          <div className="loader"></div>
        </div>
      )}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProtectedRoute><Home/></ProtectedRoute>}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
          <Route path="/admin" element={<ProtectedRoute><Admin /></ProtectedRoute>} />
          <Route path="/movie/:id" element={<ProtectedRoute><TheatresForMovie /></ProtectedRoute>}/>
          <Route path="/book-show/:id" element={<ProtectedRoute><BookShow /></ProtectedRoute>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
