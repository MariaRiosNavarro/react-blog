import PropTypes from "prop-types";
import Button from "../Button/Button";
import "./Card.scss";

const Card = ({ url, title, id }) => {
  return (
    <div className="card-wrapper">
      <div className="img-card-wrapper">
        <img src={url} alt={title} />
      </div>
      <h2>{title}</h2>
      <Button href={`/blog/article/${id}`} buttonName="Read more" />
    </div>
  );
};

export default Card;

Card.propTypes = {
  url: PropTypes.string,
  alt: PropTypes.string,
  title: PropTypes.string,
  id: PropTypes.number,
};
