import PropTypes from "prop-types";

import css from "./Info.module.css";

const Info = ({ name, tag, location, image }) => {
  return (
    <div>
      <img className={css["card-img"]} src={image} alt="User avatar" />
      <p className={css.name}>{name}</p>
      <p className={css.tag}>@{tag}</p>
      <p className={css.location}>{location}</p>
    </div>
  );
};

Info.propTypes = {
  name: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  image: PropTypes.string,
};

export default Info;
