import { React } from "react";
import { Routes, Route, BrowserRouter, Redirect, Navigate } from "react-router-dom";
import {MainPage, UserPage} from "./pages";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ListCar from "./pages/ListCar";
import "./App.css";
import { UserRentPage } from "./pages/UserRent";
import { UserInformationPage } from "./pages/UserInformation";
import { UserSupportPage } from "./pages/UserSupport";
import { UserHistoryPage } from "./pages/UserHistory";
import { UserAnnouncementsPage } from "./pages/UserAnnouncements";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path='/' element={<Navigate replace to='/home'/>}/>
        <Route path="/" element={<MainPage />}>
          <Route path="home" element={<Home />} />
          <Route path="listcar" element={<ListCar />} />
          <Route path="support" element={<>Support</>} />
        </Route>
        <Route path='/user/' element={<Navigate replace to='/user/rent'/>}/>
        <Route path="/user/" element ={<UserPage/>}>
          <Route path="rent" element={<UserRentPage/>}/>
          <Route path='information' element={<UserInformationPage/>}/>
          <Route path="support" element={<UserSupportPage/>}/>
          <Route path="history" element={<UserHistoryPage/>}/>
          <Route path="announcements" element={<UserAnnouncementsPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

