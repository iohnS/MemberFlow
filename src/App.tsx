import "./styles/App.scss";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Homepage from "./views/Homepage/Homepage";
import Dashboard from "./views/Dashboard/Dashboard";
import Members from "./views/Members/Members";
import MyAccount from "./views/MyAccount/MyAccount";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/members" element={<Members />} />
        <Route path="/my-account" element={<MyAccount />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
