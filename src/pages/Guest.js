import { Navigate } from "react-router-dom";

function Guest({ children, user }) {
  if (user) {
    return <Navigate to="/dashboard" />;
  }
  return children;
}
export default Guest;
