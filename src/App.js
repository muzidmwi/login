import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import NotFound from "./Pages/NotFound";
import Header from "./components/Header";

function App() {
  return (
    <div className="absolute w-full">
      <BrowserRouter>
        <ConditionalHeader />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/login/signup" element={<Signup />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function ConditionalHeader() {
  const location = useLocation();
  const noHeaderPaths = ["/login", "/signup"];
  
  return !noHeaderPaths.includes(location.pathname) ? <Header /> : null;
}

export default App;
