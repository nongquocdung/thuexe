import React from "react";
import { Outlet } from "react-router-dom";
import ResponsiveAppBar from "../components/AppBar/Bar";
import FooterCustom from "../components/FooterCustom/FooterCustom";
import { DashboardLayout } from "../components/dashboard-layout";

export const MainPage = () => {
  return (
    <div className="main-page">
      <ResponsiveAppBar />
      <div className="page">
        <Outlet />
      </div>
      <FooterCustom />
    </div>
  );
};

export const UserPage = () => {
  return (
    <DashboardLayout>
      <Outlet />
    </DashboardLayout>
  );
};
