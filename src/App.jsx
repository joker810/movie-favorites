import {Routes,Route} from "react-router-dom";
import Home from "./assets/pages/Home";

import './css/App.css';
import Favorite from "./assets/pages/Favorites";
import NavBar from "./assets/components/NavBar";
import { MovieProvider } from './context/MovieContext.jsx';
function App() {

  return (
    <MovieProvider>
      <NavBar/>
      <main className='main-content'>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/favorites" element={<Favorite/>}/>
      </Routes>
    </main>
    </MovieProvider>
  )
}

export default App
