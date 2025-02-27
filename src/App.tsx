import React from "react";
import { RouterProvider } from "react-router-dom";
import { AccessibilityProvider } from "./components/AccessibilityProvider";
import { AuthProvider } from "./components/AuthProvider";
import { router } from "./router/router";

export default function App() {
  return (
    <React.StrictMode>
      <AuthProvider>
        <AccessibilityProvider>
          <RouterProvider router={router} />
        </AccessibilityProvider>
      </AuthProvider>
    </React.StrictMode>
  );
}
