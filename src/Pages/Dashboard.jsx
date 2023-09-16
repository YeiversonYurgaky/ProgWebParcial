import React from "react";
import NavDashboard from "../Components/NavDashboard";
import ListProducts from "../Components/ListProducts";

const Dashboard = () => {
  return (
    <div className="flex justify-center bg-bread2">
      <div className="w-screen h-screen">
        <NavDashboard />
        <ListProducts />
      </div>
    </div>
  );
};

export default Dashboard;
