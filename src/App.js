import { React } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import MainPage from "./pages";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ListCar from "./pages/ListCar";
import "./App.css";
import { SideBar } from "./components/sideBar/SideBar";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/" element={<MainPage />}>
          <Route path="home" element={<Home />} />
          <Route path="listcar" element={<ListCar />} />
          <Route path="support" element={<>Support</>} />
        </Route>
        <Route path="/test" element={<SideBar />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
