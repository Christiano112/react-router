import { NavLink } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <nav style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "2rem", paddingTop: "3rem" }}>

        <NavLink style={({ isActive }) => {
          return {
            color: isActive ? "red" : "blue",
          };
        }} to="/">HOME</NavLink>

        <NavLink style={({ isActive }) => {
          return {
            color: isActive ? "red" : "blue",
          };
        }} to="/user">USER</NavLink>
      </nav>
    </div>
  )
}

export default Layout;
