import "./Header.scss";
import Navigation from "../Navigation/Navigation";
import PropTypes from "prop-types";

const Header = ({ imgpath }) => {
  return (
    <>
      <div
        className={`img-wrapper ${imgpath ? "display-block" : "display-none"}`}
      >
        <img
          src={imgpath}
          alt="background-picture"
          className={`bg-img ${imgpath ? "display-block" : "display-none"}`}
        />
      </div>
      <header className="header">
        <h1>My Life</h1>
        <Navigation></Navigation>
      </header>
    </>
  );
};

export default Header;

Header.propTypes = {
  imgpath: PropTypes.node,
};
