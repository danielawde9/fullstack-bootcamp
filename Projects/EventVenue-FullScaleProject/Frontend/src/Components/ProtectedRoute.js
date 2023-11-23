import { Navigate } from "react-router-dom";
import { getUserRole } from "../Util/GetUserData";
import "../Styles.css";
const ProtectedRoute = ({ children, adminOnly = false }) => {
  const isAuthenticated = sessionStorage.getItem("authToken");
  const userRole = getUserRole();
  // if user logged in then it will go to '/', it will check for the token, true then show the home component

  // else (user not logged in) then isAuthenticated is false then it will navigate to login

  // if user logged in and tried to open /dashboard protected with adminOnly = true, then it will check if the user has admin role it will redirect to login

  if (!isAuthenticated || (adminOnly && userRole !== "admin")) {
    return <Navigate to="/login" />;
  }
  return children;
};
export default ProtectedRoute;
