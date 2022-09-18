import "./styles/App.scss";
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import Login from "./views/Login/Login";
import Dashboard from "./views/Dashboard/Dashboard";
import Members from "./views/Members/Members";
import MyAccount from "./views/MyAccount/MyAccount";
import ChangePassword from "./views/ChangePassword/ChangePassword";
import PasswordReset from "./views/PasswordReset/PasswordReset";
import ChangeEmail from "./views/ChangeEmail/ChangeEmail";
import auth from "./backend/auth";
import { getData } from "./backend/db";

// Problemet just nu är att auth försvinner efter refresh. Localstorage finns kvar men auth till firebase är null.
// Går fortfarande att göra get data fastän auth är null.
const ProtectedRoute = ({ children }) => {
  if (auth.currentUser != null || localStorage.getItem("user") != null) {
    return children;
  } else {
    return <Navigate to="/" />;
  }
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/members"
          element={
            <ProtectedRoute>
              <Members />
            </ProtectedRoute>
          }
        />
        <Route
          path="/settings"
          element={
            <ProtectedRoute>
              <MyAccount />
            </ProtectedRoute>
          }
        />
        <Route
          path="/settings/email"
          element={
            <ProtectedRoute>
              <ChangeEmail />
            </ProtectedRoute>
          }
        />
        <Route
          path="/settings/password"
          element={
            <ProtectedRoute>
              <ChangePassword />
            </ProtectedRoute>
          }
        />
        <Route
          path="/password_reset"
          element={
            <ProtectedRoute>
              <PasswordReset />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<h1>There is nothing here 404</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
