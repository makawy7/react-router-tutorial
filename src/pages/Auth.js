import { Navigate } from "react-router-dom";

function Auth({ children, user }) {
  if (!user) {
    return <Navigate to="/login" />;
  }
  return children;
}
export default Auth;
