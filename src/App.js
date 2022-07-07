import React, { useState } from "react";
import {
  Routes,
  Route,
  BrowserRouter,
  Redirect,
  Navigate,
} from "react-router-dom";
import { MainPage, UserPage } from "./pages";
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
import { useSelector } from "react-redux";
import { ProtectedRoutes_ChuXe, ProtectedRoutes_KhachHang } from "./routes/protected-routes";
import DefaultLayout from "./layouts/Default";
function App(props){
  const { loggedIn, user } = useSelector((state) => state.auth);
  const { refreshMenu } = useSelector((state) => state.layout);
  // const [routes, setRoutes] = useState(Object.values(ProtectedRoutes_KhachHang));
  const [routes, setRoutes] = useState(Object.values(ProtectedRoutes_ChuXe));
  const [script, setScript] = useState("");
  // React.useEffect(() => {
  //   //chia luồng cho úng dụng routes. .....
  //   setRoutes(demo);

  // }, [user]);

  const renderPublicRoutes = () => {
    return <Routes></Routes>;
  };
  const renderProtectedRoutes = () => {
    if (!routes.length) {
      return null;
    }
    return (
      <DefaultLayout {...props} routes={routes}>
        <Routes>
          {routes.map((route) => {
            if (route.children) {
              return route.children.map((child) => {
                return (
                  <Route
                    key={child.id}
                    path={child.path}
                    element={<child.component />}
                  />
                );
              });
            }
            return (
              <Route
                key={route.id}
                path={route.path}
                element={<route.component />}
              />
            );
          })}
          <Route path="*" element={<Navigate to="/danh-sach-yeu-cau" />} />
        </Routes>
      </DefaultLayout>
    );
  };
  // const Demo = () => {
  //   const child = routes['Demo'];
  //   return (
  //     <DefaultLayout {...props} routes={routes}>
  //       <Routes>
  //         <Route
  //           key={child.id}
  //           path={child.path}
  //           element={<child.component />}
  //         />
  //       </Routes>
  //     </DefaultLayout>
  //   );
  // };
  return (
    <BrowserRouter>
      {/* <Routes>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/" element={<MainPage />}>
          <Route path="home" element={<Home />} />
          <Route path="listcar" element={<ListCar />} />
          <Route path="support" element={<>Support</>} />
        </Route>
        <Route path="/user/" element={<Navigate replace to="/user/rent" />} />
        <Route path="/user/" element={<UserPage />}>
          <Route path="rent" element={<UserRentPage />} />
          <Route path="information" element={<UserInformationPage />} />
          <Route path="support" element={<UserSupportPage />} />
          <Route path="history" element={<UserHistoryPage />} />
          <Route path="announcements" element={<UserAnnouncementsPage />} />
        </Route>
      </Routes> */}
      {renderProtectedRoutes()}
    </BrowserRouter>
  );
};

export default App;
