import { React } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import MainPage from './pages';
import Home from './pages/Home';
<<<<<<< HEAD
import Login from "./pages/Login";
import Register from './pages/Register'
=======
import ListCar from './pages/ListCar';
import './App.css'

>>>>>>> c11e286b8208f840f879eca723631806c2eb00d2
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
<<<<<<< HEAD
        <Route path="/" element={<Register />}></Route>
=======
        <Route path="/" element={<MainPage/>}>
          <Route path='home' element={<Home/>}/>
          <Route path='listcar' element={<ListCar/>}/>
          <Route path='support' element={<>Support</>}/>
        </Route>
>>>>>>> c11e286b8208f840f879eca723631806c2eb00d2
      </Routes>
    </BrowserRouter>
  );
};


export default App;
