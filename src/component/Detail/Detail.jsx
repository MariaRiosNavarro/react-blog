import PropTypes from "prop-types";
import "./Detail.scss";

const Detail = ({ url, title, date, text, author }) => {
  return (
    <>
      <div className="detail-img-wrapper">
        <img src={url} alt={title} />
      </div>
      <div className="detail-text-wrapper">
        <div className="row space">
          <h2>{title}</h2>
          <span>{date}</span>
        </div>
        <div className="column text">
          <p>{text}</p>
          <span>{author}</span>
        </div>
      </div>
    </>
  );
};

export default Detail;

Detail.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string,
  id: PropTypes.number,
  date: PropTypes.string,
  text: PropTypes.string,
  author: PropTypes.string,
};
