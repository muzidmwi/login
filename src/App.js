import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  useLocation,
  Outlet,
} from "react-router-dom";
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
import MainNavigation from "./components/MainNavigaion";
import AuthenticationPage,{action as authAction} from "./Pages/AuthenticationPage";

const ConditionalNavigation = () => {
  const location = useLocation();
  const noHeaderPaths = ["/login", "/signup"];

  return (
    <>
      {!noHeaderPaths.includes(location.pathname) && <MainNavigation />}
      <Outlet />
    </>
  );
};

const router = createBrowserRouter([
  {
    element: <ConditionalNavigation />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      {
        path: 'auth',
        element: <AuthenticationPage />,
        action: authAction,
      }
    ],
  },
]);

function App() {
  return (
    <div className="w-full min-h-screen">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
