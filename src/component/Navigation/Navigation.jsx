import { NavLink } from "react-router-dom";
import "./Navigation.scss";

const Navigation = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/Blog">Blog</NavLink>
    </nav>
  );
};

export default Navigation;
