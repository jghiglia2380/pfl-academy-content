import { ToastContainer } from "react-toastify";
import { Outlet } from 'react-router-dom';

import { Navbar } from "../Navbar";

export function DefaultLayout() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <ToastContainer />
      {/* Render child routes */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <Outlet />
      </main>
    </div>
  );
}