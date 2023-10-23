import "./Header.scss";
import Navigation from "../Navigation/Navigation";

const Header = () => {
  return (
    <header className="header">
      <h1>My Life</h1>
      <Navigation></Navigation>
    </header>
  );
};

export default Header;
