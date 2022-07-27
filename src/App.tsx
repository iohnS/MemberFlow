import "./styles/App.scss";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Login from "./views/Login/Login";
import Dashboard from "./views/Dashboard/Dashboard";
import Members from "./views/Members/Members";
import MyAccount from "./views/MyAccount/MyAccount";
import ChangePassword from "./views/ChangePassword/ChangePassword";
import PasswordReset from "./views/PasswordReset/PasswordReset";
import ChangeEmail from "./views/ChangeEmail/ChangeEmail";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/members" element={<Members />} />
        <Route path="/settings" element={<MyAccount />} />
        <Route path="/settings/email" element={<ChangeEmail />} />
        <Route path="/settings/password" element={<ChangePassword />} />
        <Route path="/password_reset" element={<PasswordReset />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
