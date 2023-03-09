import { NavLink } from "react-router-dom";

function StyledNavbar() {
  return (
    <nav className="navbar">
      {/* <NavLink
        style={({ isActive }) =>
          isActive ? { color: "red" } : { color: "grey" }
        }
        to="/"
      >
        Home
      </NavLink> */}
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/products">Products</NavLink>
      <NavLink to="login">Login</NavLink>
    </nav>
  );
}

export default StyledNavbar;
