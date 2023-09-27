import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = ({ user, loggedInPath, children }) => {
  if (!user) {
    return <Navigate to={loggedInPath} replace />;
  }
  return children ? children : <Outlet />;
};
