import React from "react";
import NavDashboard from "../Components/NavDashboard";
import ListProducts from "../Components/ListProducts";
import DashBanner from "../Components/DashBanner";

const Dashboard = () => {
  return (
    <div className="flex justify-center bg-[#906f4c]">
      <div className="w-screen h-screen">
        <NavDashboard />
        <DashBanner />
        <ListProducts />
      </div>
    </div>
  );
};

export default Dashboard;
