import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Button.scss";

const Button = ({ href, buttonName }) => {
  return (
    <Link className="btn" to={href}>
      {buttonName}
    </Link>
  );
};

export default Button;

Button.propTypes = {
  href: PropTypes.node,
  buttonName: PropTypes.string,
};
