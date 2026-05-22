import "./App.css";
import Home from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./components/Layout/Layout";
import Dashboard from "./pages/Dashboard/Dashboard";
import Dash from "./components/Dash/Dash";
import Schedule from "./pages/Dashboard/Schedule";
import Patients from "./pages/Dashboard/Patients";
import Analytics from "./pages/Dashboard/Analytics";
import Staff from "./pages/Dashboard/Staff";
import Settings from "./pages/Dashboard/Settings";
import NotFound from "./components/NotFound/NotFound";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
        children: [
          {
            path: "/dashboard",
            element: <Dash />,
          },
          {
            path: "schedule",
            element: <Schedule />,
          },
          {
            path: "patients",
            element: <Patients />,
          },
          {
            path: "analytics",
            element: <Analytics />,
          },
          {
            path: "staff",
            element: <Staff />,
          },
          {
            path: "settings",
            element: <Settings />,
          },
        ],
      },

      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/Register",
        element: <RegisterPage />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={routes} />;
}

export default App;
