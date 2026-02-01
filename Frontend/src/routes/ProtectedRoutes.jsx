import { Navigate, Outlet, useLocation } from "react-router-dom";

const ProtectedRoute = () => {
  const token = localStorage.getItem("token");
  const location = useLocation();

  // not logged in
  if (!token) {
    return <Navigate to="/login" replace state={{ from: location.pathname }} />;
  }

  // logged in
  return <Outlet />;
};

export default ProtectedRoute;
