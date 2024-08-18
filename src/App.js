import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import NotFound from "./Pages/NotFound";
import Header from "./components/Header";
import FindID from "./Pages/FindID";
import SettingsPage from "./Pages/SettingPage";
import Logind from "./Pages/Logind";

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
          <Route path="/FindID" element={<FindID />} />
          <Route path="/SettingPage" element={<SettingsPage />} />
          <Route path="/Logind" element={<Logind />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function ConditionalHeader() {
  const location = useLocation();
  const noHeaderPaths = ["/login", "/login/signup"];
  
  return !noHeaderPaths.includes(location.pathname) ? <Header /> : null;
}

export default App;
