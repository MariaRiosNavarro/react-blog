import PropTypes from "prop-types";
import Button from "../Button/Button";
import "./Card.scss";

const Card = ({ url, title, idArticle }) => {
  return (
    <div className="card-wrapper">
      <div className="img-card-wrapper">
        <img src={url} alt={title} />
      </div>
      <h2>{title}</h2>
      <Button href={`/blog/article/${idArticle}`} buttonName="Read more" />
    </div>
  );
};

Card.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string,
  idArticle: PropTypes.number,
};

export default Card;
