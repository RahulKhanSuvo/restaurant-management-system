import { useContext } from "react";
import AuthContext from "../Context/AuthContext";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return <div className="border size-6 rounded-full animate-spin"></div>;
  }
  if (user) {
    return children;
  }
  return <Navigate state={{ form: location }} replace to={"/login"}></Navigate>;
};

export default PrivateRoutes;
