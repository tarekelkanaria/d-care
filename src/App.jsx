import "./App.css";
import Home from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./components/Layout/Layout";
import Dashboard from "./pages/Dashboard";
import NotFound from "./components/NotFound/NotFound";
import LoginPage from "./pages/LoginPage";
import RegesterPage from "./pages/RegesterPage";

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
      },

      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path:"/Regester",
        element:<RegesterPage/>
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
