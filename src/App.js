import { React } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import MainPage from './pages';
import Home from './pages/Home';
import ListCar from './pages/ListCar';
import './App.css'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage/>}>
          <Route path='home' element={<Home/>}/>
          <Route path='listcar' element={<ListCar/>}/>
          <Route path='support' element={<>Support</>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};


export default App;
