import { React } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Demo from './components/Demo';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Demo name='word'/>}></Route>
      </Routes>
    </BrowserRouter>
  );
};


export default App;
