import { React } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Demo from './components/Demo';
import Home from './pages/Home';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
      </Routes>
    </BrowserRouter>
  );
};


export default App;
