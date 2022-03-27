import { React } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Demo from './components/Demo';
import Home from './pages/Home';
import Login from "./pages/Login";
import Register from './pages/Register'
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />}></Route>
      </Routes>
    </BrowserRouter>
  );
};


export default App;
